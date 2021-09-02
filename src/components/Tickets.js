import React from "react";

export default function Tickets() {
  return (
    <div id="tickets">
      <h1 className="text-center ">Pricing List </h1>
      <hr />
      <div className=" container d-flex justify-content-center align-items-center">
        <div
          class="col-md-4 m-3 p-3"
          style={{ backgroundColor: "#a3cef1", height: "100%" }}
        >
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h2>Early Bird</h2>
            <p>
              <span>$29</span>/ Per day
            </p>
            <ul class="pricing-list">
              <li>Entrance</li>
              <li>Coffee Break</li>
              <li>Launch</li>
              <li>Photos Allowed</li>
              <li>Certificate</li>
              <li>Workshop</li>
            </ul>
            <button class="btn btn-primary">Buy now</button>
          </div>
        </div>
        <div class="col-md-4 m-3 p-3" style={{ backgroundColor: "#a3cef1" }}>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h2>Early Bird</h2>
            <p>
              <span>$29</span>/ Per day
            </p>
            <ul class="pricing-list">
              <li>Entrance</li>
              <li>Coffee Break</li>
              <li>Launch</li>
              <li>Photos Allowed</li>
              <li>Certificate</li>
              <li>Workshop</li>
            </ul>
            <button class="btn btn-primary">Buy now</button>
          </div>
        </div>
        <div class="col-md-4 m-3 p-3" style={{ backgroundColor: "#a3cef1" }}>
          <div class="d-flex flex-column justify-content-center align-items-center">
            <h2>Early Bird</h2>
            <p>
              <span>$29</span>/ Per day
            </p>
            <ul class="pricing-list">
              <li>Entrance</li>
              <li>Coffee Break</li>
              <li>Launch</li>
              <li>Photos Allowed</li>
              <li>Certificate</li>
              <li>Workshop</li>
            </ul>
            <button class="btn btn-primary">Buy now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
