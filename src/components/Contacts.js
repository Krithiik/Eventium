import React from "react";

export default function Contacts() {
  return (
    <div
      id="contacts"
      className="bg-dark d-flex justify-content-center align-items-center p-5"
      style={{ color: "white" }}
    >
      <div className="row">
        <div className="col-4 d-flex flex-column justify-content-center align-items-center ">
          <h3>Connect with us</h3>
          <p>Get the latest updates</p>
          <ul
            class="d-flex justify-content-around"
            style={{ listStyle: "none", width: "50%" }}
          >
            <li>
              <a class="facebook" href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a class="twitter" href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="linkedin" href="#">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-center p-3">
          <h3>Join the Newsletter</h3>
          <p>Creativity happens everywhere</p>
          <input
            type="text"
            class="form-control"
            placeholder="enter your email..."
          ></input>
          <button className="btn btn-success m-3">SUBSCRIBE</button>
        </div>
        <div className="p-3 col-4 d-flex  flex-column justify-content-center align-items-center">
          <h4>What is bussiness conference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            <br />
            odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
            <br />
            Suspendisse urna nibh, viverra non, semper suscipit.
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
