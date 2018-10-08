import Base from "../base";
import RootContainer from "../RootContainer/index";

class App extends Base {
  render(html) {
    let myDiv = document.createElement("div");
    const rootContainer = new RootContainer();
    myDiv.appendChild(rootContainer.render());
    const currentDiv = document.getElementById("root");
    document.body.appendChild(myDiv, currentDiv);
    console.log(myDiv);
  }
}
export default App;
