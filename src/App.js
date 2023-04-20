import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function App() {
  <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="index.html" title="home">
          <img
            className="logo"
            width="250"
            src="src/images/designlogo.jpg"
            alt=""
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <br />
        <br />
        <br />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="index.html"
                autofocus
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About NK
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact NK
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <section className="intro">
      <h1>WOODEN BATHTUB COLLECTION</h1>
    </section>

    <section>
      <h3>WOODEN BATHTUB DESIGNS BY NK</h3>
    </section>
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <p>
            Nk’s modern approach to luxury wood baths is unique and
            maintenance-free! These art pieces are completely stabilized,
            waterproof and smooth to the touch. They are not affected by extreme
            humidity, dryness, or common liquid cleaning products and are
            designed for daily use. You can buy them direct from us and select
            galleries and showrooms across the US.
          </p>

          <p>
            We handcraft our wood bathtubs from distinctive sustainable domestic
            and exotic hardwoods in our Seattle studio. Each is then finished
            with our specialized finish system that has unmatched durability and
            longevity. These wood bathtubs offer you the luxury of fine art
            furniture as the centerpiece of your bathroom and a luxurious soak.
            From our studio in Seattle, Washington, we can ship our custom wood
            bathtubs anywhere in the world.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            className="tubintro"
            src="src/images/backgroundtub.jpg"
            width="500"
            alt=""
          />
        </div>
      </div>
    </div>
    <hr />
    <hr />

    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img
            className="tubexample"
            src="src/images/luna.jpg"
            width="500"
            alt=""
          />
        </div>

        <div className="col-lg-6">
          <h4>LUNA COLLECTION</h4>
        </div>

        <div className="col-lg-6">
          <h4>LOTUS COLLECTION</h4>
        </div>
        <div className="col-lg-6">
          <img
            className="tubexample"
            src="src/images/lotus1.jpg"
            width="500"
            alt=""
          />
        </div>

        <div className="col-lg-6">
          <img
            className="tubexample"
            src="src/images/round.jpg"
            width="500"
            alt=""
          />
        </div>
        <div className="col-lg-6">
          <h4>ROUND COLLECTION</h4>
        </div>
      </div>
    </div>
  </div>;
}
