class Base {
  htmlToElement(html) {
    let template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template.content.firstChild;
  }
  render(html) {
    return this.htmlToElement(html);
  }
}
export default Base;
