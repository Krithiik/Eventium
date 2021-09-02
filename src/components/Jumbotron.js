import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../style/index";

export default withStyles(styles)(function Jumbotron({ classes }) {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center ${classes.body} vh-100 mb-5`}
    >
      <h1>Digital Economy Conference 2018</h1>
      <br />
      <em>13-15 April 2018, San Francisco</em>
      <br />
      <button className="btn btn-success">Buy Tickets</button>
    </div>
  );
});
