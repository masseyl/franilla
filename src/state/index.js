const createStore = reducer => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(listener => listener());
  };

  const subscribe = listener => {
    listeners.push(listener);
    return () => listeners.filter(l => l !== listener);
  };

  dispatch({});
  return { getState, dispatch, subscribe };
};

/*

  update(nameSpace, data) {
    if (!state[nameSpace]) {
      state[nameSpace] = new Set();
    }
    if (!state[nameSpace][data.type]) {
      state[nameSpace][data.type] = new Set();
    }
    state[nameSpace][data.type][data.path] = data.payload;
    this.broadcast(data.type, { nameSpace, payload: data.payload });
  }

  subscribe(eventType, nameSpace, handler) {
    if (!listeners[eventType]) {
      listeners[eventType] = new Set();
    }
    if (!listeners[eventType][nameSpace]) {
      listeners[eventType][nameSpace] = new Set();
    }
    listeners[eventType][nameSpace].add(handler);
  }

  broadcast(eventType) {
    (listeners[eventType] || noset).forEach(handler => {
      handler(data);
    });
  }*/
