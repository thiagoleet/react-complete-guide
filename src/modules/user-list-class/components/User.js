import { Component } from "react";

// styles
import classes from "./User.module.css";

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

export default User;
