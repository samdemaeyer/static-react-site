import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './Routes/Index';
import About from './Routes/About';
import Post from './Routes/Post';
import Contact from './Routes/Contact';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
              <Link to="/" className="navbar-brand">Start Bootstrap</Link>
              <button className="navbar-toggler navbar-toggler-right" onClick={this.toggle}>
                Menu
                <i className="fa fa-bars"></i>
              </button>
              <div className={`collapse navbar-collapse ${this.state.isOpen ? 'show' : ''}`} id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li>
                  <li className="nav-item">
                    <Link to="about" className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="post" className="nav-link">Sample Post</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="contact" className="nav-link">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/post/" component={Post} />
          <Route path="/contact/" component={Contact} />
          <hr />
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <ul className="list-inline text-center">
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <span className="fa-stack fa-lg">
                          <i className="fa fa-circle fa-stack-2x"></i>
                          <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p className="copyright text-muted">Copyright &copy; Your Website 2018</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}
