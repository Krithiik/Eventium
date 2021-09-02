import React from "react";

export default function About() {
  return (
    <div className="container m-5 pt-5" id="about">
      <div className="row pt-5">
        <div className="col col-md-6">
          <em className="text-muted fs-4">About conference</em>
          <h1>
            Successfully plan,
            <br /> create, and deliver
            <br /> strategic content.
          </h1>
          <br />
          <p>
            Sed pretium, ligula sollicitudin laoreet viverra, tortor libero
            sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut
            justo.
          </p>
          <br />
          <p>
            Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
            neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
            ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
        </div>
        <div className="col col-md-6 px-5">
          <img
            width="370"
            height="410"
            src="http://demo.qkthemes.net/eventium/wp-content/uploads/2018/06/art4.jpg"
            alt=""
            srcset="http://demo.qkthemes.net/eventium/wp-content/uploads/2018/06/art4.jpg 370w, http://demo.qkthemes.net/eventium/wp-content/uploads/2018/06/art4-271x300.jpg 271w"
            sizes="(max-width: 370px) 100vw, 370px"
            style={{ position: "absolute" }}
          ></img>
          <img
            width="370"
            height="410"
            src="http://demo.qkthemes.net/eventium/wp-content/uploads/2018/06/art3.jpg"
            alt=""
            srcset="http://demo.qkthemes.net/eventium/wp-content/uploads/2018/06/art3.jpg 370w, http://demo.qkthemes.net/eventium/wp-content/uploads/2018/06/art3-271x300.jpg 271w"
            sizes="(max-width: 370px) 100vw, 370px"
            style={{ position: "relative", top: "70px", left: "200px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
