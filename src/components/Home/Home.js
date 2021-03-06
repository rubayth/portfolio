import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  componentDidMount(){
    document.body.style = 'background: black;';
  }
  componentWillUnmount(){
    document.body.style = 'background: #02040f;';
  }
  render() {
    
    return (
      <section className="home">
        <video
          autoPlay="autoplay"
          playsInline
          loop
          muted
          className="d-none d-md-block"
          ref="vidRef"
          id="myVideo"
        >
          <source src="https://assets.rubayth.com/portfolio/Particles.mp4" type="video/mp4" />
        </video>
        <div className="container mt-2">
          <div className="row full-height align-items-center justify-content-start">
            <div className="col-12 col-md-6">
              <img
                src="https://assets.rubayth.com/portfolio/my-pic.jpg"
                className="mb-3 animated bounceInLeft"
                alt="Rubayth Haque"
              />
              <h1 className="animated bounceInLeft delay-1">Hi, I'm Rubayth</h1>
              <h2 className="animated bounceInLeft delay-2">
                Software Engineer
              </h2>
              <div className="row animated bounceInLeft delay-3 justify-content-center justify-content-md-start">
                <div className="col-sm-6 col-lg-5 col-12">
                  <Link
                    className="mt-3 btn btn-primary btn-lg btn-block"
                    to="/portfolio"
                  >
                    View Work
                  </Link>
                </div>
                <div className="col-sm-6 col-lg-5 col-12">
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
