import React from "react";
import { Link } from "react-router-dom";
import video from "./Particles.mp4";

import myPic from "../../assets/my-pic.jpg";

class Home extends React.Component {
  render() {
    return (
      <section className="home">
        <video
          autoPlay="autoplay"
          loop
          muted
          className="w-100"
          ref="vidRef"
          id="myVideo"
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-left">
            <div className="col-6 col-lg-6 text-left">
              <img
                src={myPic}
                className="myPic mb-3 animated bounceInLeft"
                alt="Rubayth Haque"
              />
              <h1 className="animated bounceInLeft delay-1">Hi, I'm Rubayth</h1>
              <h2 className="animated bounceInLeft delay-2">
                Full Stack Web Developer
              </h2>
              <div className="row animated bounceInLeft delay-3">
                <div className="col-5">
                  <Link
                    className="mt-3 btn btn-primary btn-lg btn-block"
                    to="/portfolio"
                  >
                    View Work
                  </Link>
                </div>
                <div className="col-5">
                  <Link
                    className="mt-3 btn btn-outline-primary btn-lg btn-block"
                    to="/about"
                  >
                    About Me
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
