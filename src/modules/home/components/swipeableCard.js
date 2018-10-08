import styles from "./index.css";

const SwipeableCard = props => {
  let swipeProps = { ...props };
  swipeProps.children = Title(props);
  return Container(swipeProps);
};

export default SwipeableCard;

const Container = props => {
  const height = "250px";
  console.log(
    `<div class="${styles.container}" style="height:${height};">${
      props.children
    }</div>`
  );
  return `<div class="${styles.container}" style="height:${height};">${
    props.children
  }</div>`;
};

const Title = props => {
  return `<div >${props.title}</div>`;
};
