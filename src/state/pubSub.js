const listeners = {};
const noset = new Set();
export default class PubSub {
  publish(eventName, data) {
    (listeners[eventName] || noset).forEach(handler => {
      handler(data);
    });
  }
  subscribe(eventName, handler) {
    if (!listeners[eventName]) {
      listeners[eventName] = new Set();
    }
    listeners[eventName].add(handler);
  }
  unsubscribe(eventName, handler) {
    (listeners[eventName] || noset).delete(handler);
  }
}
