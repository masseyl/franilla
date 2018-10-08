import Base from "../base";
import styles from "./index.css";
import SwipeableCard from "./components/swipeableCard";

export default class Home extends Base {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const props = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const cards = props.map((card, index) => {
      let prop = { title: index };
      return SwipeableCard(prop);
    });
    let myDiv = `<div class="${styles.container}">${cards.join("")}</div>`;
    return myDiv;
  }
}
