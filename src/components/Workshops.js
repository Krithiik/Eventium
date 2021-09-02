import React from "react";
import { withStyles } from "@material-ui/styles";
const styles = {
  card: {
    width: "200px",
    height: "300px",
  },
};
export default withStyles(styles)(function Workshops(props) {
  return (
    <div className="row mt-3" id="workshop">
      <div className="col col-md-6 d-flex ">
        <div className="row">
          <div
            className="card mx-3 my-3"
            style={{ width: "300px", height: "300px", border: "none" }}
          >
            <div
              class="card-body"
              style={{ backgroundColor: "#023e8a", color: "white" }}
            >
              <h5 class="card-title text-center">Marketing</h5>
              <p class="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card mx-3"
            style={{ width: "300px", height: "300px", border: "none" }}
          >
            <div
              class="card-body"
              style={{ backgroundColor: "#023e8a", color: "white" }}
            >
              <h5 class="card-title text-center">Finance</h5>
              <p class="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="card mx-3"
            style={{ width: "300px", height: "300px", border: "none" }}
          >
            <div
              class="card-body"
              style={{ backgroundColor: "#023e8a", color: "white" }}
            >
              <h5 class="card-title text-center">Business growth</h5>
              <p class="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div
            className="card mx-3 my-3"
            style={{
              width: "300px",
              height: "300px",
              border: "none",
            }}
          >
            <div
              class="card-body"
              style={{ backgroundColor: "#023e8a", color: "white" }}
            >
              <h5 class="card-title text-center">Business strategy</h5>
              <p class="card-text text-center">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col col-md-6 p-5 d-flex flex-column justify-content-center align-items-center ">
        <h1>Workshops</h1>
        <br />
        <p>
          Phasellus hendrerit. Pellentesque aliquet nibh ne c urna. In nisi
          neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
          <br />
          sollicitudin laoreet viverra, tortor libero sodales leo. Nullam
          <br />
          mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate
          volutpat, eros pede semper est, vitae luctus metus libero eu augue.
          and much more ...
        </p>
      </div>
    </div>
  );
});
