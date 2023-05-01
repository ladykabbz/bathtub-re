import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logoimage from "./images/designlogo.jpg";
import backgroundtub from "./images/backgroundtub.jpg";
import cube from "./images/cube.jpg";
import cubesink from "./images/cubesink.jpg";
import lotus from "./images/lotus1.jpg";
import luna from "./images/luna.jpg";
import octo from "./images/octo.jpg";
import round from "./images/round.jpg";
import sunburst from "./images/sunburst.jpg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <img className="logo" src={logoimage} width="200" alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="App.js">Bathtubs</Nav.Link>

              <Nav.Link href="staircase.js">Custom staircase</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div class="card text-bg-dark">
        <img src={backgroundtub} class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h1 class="card-title">NK WOODWORKING AND DESIGN</h1>
        </div>
      </div>

      <section>
        <h3>WOODEN BATHTUB DESIGNS BY NK</h3>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <p className="paragraph">
              Nk’s modern approach to luxury wood baths is unique and
              maintenance-free! These art pieces are completely stabilized,
              waterproof and smooth to the touch. They are not affected by
              extreme humidity, dryness, or common liquid cleaning products and
              are designed for daily use. You can buy them direct from us and
              select galleries and showrooms across the US.
            </p>

            <p className="paragraph">
              We handcraft our wood bathtubs from distinctive sustainable
              domestic and exotic hardwoods in our Seattle studio. Each is then
              finished with our specialized finish system that has unmatched
              durability and longevity. These wood bathtubs offer you the luxury
              of fine art furniture as the centerpiece of your bathroom and a
              luxurious soak. From our studio in Seattle, Washington, we can
              ship our custom wood bathtubs anywhere in the world.
            </p>
          </div>
          <div className="col-lg-6">
            <img className="tubintro" src={backgroundtub} width="500" alt="" />
          </div>
        </div>
      </div>
      <hr />
      <hr />

      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img className="tubexample" src={luna} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>LUNA COLLECTION</h4>
          </div>

          <div className="col-lg-6">
            <img className="tubexample" src={lotus} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>LOTUS COLLECTION</h4>
          </div>

          <div className="col-lg-6">
            <img className="tubexample" src={round} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>ROUND COLLECTION</h4>
          </div>

          <div className="col-lg-6">
            <img className="tubexample" src={sunburst} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>SUNBURST COLLECTION</h4>
          </div>

          <div className="col-lg-6">
            <img className="tubexample" src={cube} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>CUBE COLLECTION</h4>
          </div>

          <div className="col-lg-6">
            <img className="tubexample" src={octo} width="500" alt="" />
          </div>
          <div className="col-lg-6">
            <h4>OCTO COLLECTION</h4>
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
