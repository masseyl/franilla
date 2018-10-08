import Base from "../../base";
import styles from "./index.css";

class SwipeableCard extends Base {
  constructor(props) {
    this.props = props;
  }
  htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content;
  }

  render() {
    let title = Title(this.props);
    const props = { ...this.props, children: title };
    let markup = Container(props);
    return this.htmlToElement(markup);
  }
}

export default SwipeableCard;

const Container = props => {
  return `<div class="${styles.container}" style="transform:translate3d(${
    props.x
  },${props.y},0)">${props.children}</div>`;
};

const Title = props => {
  return `<div >${props.title}</div>`;
};
