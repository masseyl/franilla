import styles from "./index.css";

export default class Mighty {
  constructor(props) {
    this.props = props;
  }

  htmlToElement(html) {
    var template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }

  render() {
    let myDiv = this.htmlToElement(`<div class="${styles.budgie}"></div>`);
    const myApp = this.props.data.map(item => {
      return myDiv.appendChild(
        this.htmlToElement(`<div class="${styles.box}">Data: ${item}</div>`)
      );
    });
    return myDiv;
  }
}
