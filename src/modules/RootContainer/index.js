import Base from "../base";
import styles from "./index.css";
import Home from "../home/index";

class RootContainer extends Base {
  constructor(props) {
    super(props);
    this.props = { ...props, title: "Peep" };
  }

  render() {
    const home = new Home(this.props).render();
    console.log(home);
    return super.render(home);
  }
}

export default RootContainer;
