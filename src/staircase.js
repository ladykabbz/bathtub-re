import React from "react";
import "./staircase.css";
import "./App.css";
import elementalspine from "./images/elementalspine.jpg";
import modernmelody from "./images/modernmelody.jpg";
import staircaselogo from "./images/staircaselogo.jpg";
import thehive from "./images/thehive.jpg";
import { Link } from "react-router-dom";

export default function staircase() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="index.html" title="home">
            <img className="logo" width="250" src={logoimage} alt="logo" />
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
                  href="./src/App.js"
                  autofocus
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./src/staircase">
                  Custom staircases
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
      <div class="card text-bg-dark">
        <img src={staircaselogo} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h1 class="card-title">CUSTOM STAIRCASE</h1>
        </div>
      </div>

      <section>
        <h3>WOODEN STAIRCASE DESIGNS BY NK</h3>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h3>THE ART STAIRCASE</h3>

            <p className="paragraph">
              THE NEW GENERATION OF ART & CRAFTSMANSHIP IN STAIRS: A century
              ago, the staircase was the centerpiece of the house. Built by
              artisan craftsmen devoted to their calling, each staircase was
              unique. NK Woodworking is bringing back that tradition. Our
              mission is to bring back the centrality of spectacular stairs and
              railings made with the finest natural materials and traditional
              craftsmanship. That is our passion and that is what sets us apart.
            </p>
          </div>
          <div className="col-lg-6">
            <img className="tubintro" src={""} width="500" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="tubexample" src={thehive} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>THE HIVE</h4>
            <p>
              Comprised of 4,000 walnut pieces - hand-shaped, sculpted, and
              stacked - to create this organic sculptural stair. The brushed
              stainless steel soffit was formed by an auto-mechanic to follow
              the complicated convex shape. LED lighting details throughout.
              Installed 2018
            </p>
          </div>

          <div className="col-lg-6">
            <img
              className="tubexample"
              src={elementalspine}
              width="500"
              alt=""
            />
          </div>
          <div className="col-lg-6">
            <h4>ELEMENTAL SPINE</h4>
            <p>
              CONTEMPORARY DESIGNS BUILT WITH TRADITIONAL CRAFTSMANSHIP - MADE
              TO LAST! Our clients come to us because they want a sculptural
              staircase to be the focal point of their home. They want to live
              amid the stunning beauty of a floating curved stairway, the
              dramatic elegance of a contemporary circular stair, the dazzling
              design of a spectacular railing. They want their guests and
              visitors to be as awed as they are; to be wowed by the presence of
              architectural art, every day, in their home.
            </p>
          </div>

          <div className="col-lg-6">
            <img className="tubexample" src={modernmelody} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>MODERN MELODYN</h4>
            <p>
              MODERN MELODY - wide sweeping stair, with breezy open treads, in
              Sapele Mahogany. Installed in a home in the Pacific Northwest, WA,
              2019
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h3 className="services">ART DESIGN AND CRAFTSMANSHIP</h3>
            <ul>
              <li>Staircase design</li>
              <li>Furniture design</li>
              <li>Complete Room Design</li>
              <li>Bathtubs</li>
              <li>
                Craftsmanship Team to build and install all of the above
                worldwide
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="row">
              <div className="navigation-links" mb-5>
                <div className="col-sm-4">
                  <a className="staircase-link" href="">
                    CUSTOM STAIRCASES
                  </a>
                </div>
                <br />
                <div className="col-sm-4">
                  <a className="bathtub-link" href="">
                    WOOD BATHTUBS
                  </a>
                </div>
                <br />
                <div className="col-sm-4">
                  <a className="furniture-link" href="">
                    CUSTOM FURNITURE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="contact">
        <p className="footer">NK WOOD WORKING DESIGN</p>
        <p>
          <em>Made in Seattle,shipped and installed worldwide</em>
        </p>
        <hr />

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h5 className="three">CONTACT</h5>
              <p>PH: 206-486-3600</p>
              <p>info@nkwoodworking.com</p>
              <br />
              <p> M-F 9am-6pm PST</p>
            </div>

            <div className="col-sm-6">
              <h5 className="three">Studio address</h5>
              <p>Nk Woodworking & Design</p>
              <p>6327 W Marginal Way SW</p>
              <p>Seattle,WA 98106</p>
              <br />
              <br />

              <em>~Visits to our Gallery/Workshop by appointment only~</em>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}
