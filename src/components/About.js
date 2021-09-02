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
            src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1850&q=80"
            sizes="(max-width: 370px) 100vw, 370px"
            style={{ position: "absolute" }}
          ></img>
          <img
            width="370"
            height="410"
            src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            sizes="(max-width: 370px) 100vw, 370px"
            style={{ position: "relative", top: "70px", left: "200px" }}
          ></img>
        </div>
      </div>
    </div>
  );
}
