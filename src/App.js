import "./App.css";

import facebookIcon from "./Assests/et_facebook.png";
import githubIcon from "./Assests/akar-icons_github-outline-fill.png";
import linkedinIcon from "./Assests/et_linkedin.png";
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <p>Portfolio</p>
            <div className="line"></div>
          </li>
          <li>
            <p>About me</p>
            <div className="line"></div>
          </li>
          <li>
            <p>Skills</p>
            <div className="line"></div>
          </li>
          <li>
            <p>Education</p>
            <div className="line"></div>
          </li>
          <li>
            <p>My work</p>
            <div className="line"></div>
          </li>
        </ul>
      </nav>
      <section className="introductionSection">
        <div className="intr-img-Container">
          <img
            src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=bfc3d05aa60acb5ef0e58c1ac5eb6463"
            alt="Ayoub-Profile"
          />
        </div>
        <div className="intro-info">
          <div className="into-fullname">
            <h1>Hey, Im Ayoub</h1>
          </div>
          <div className="into-scndline">
            <div className="into-line"></div>
            <p className="into-explaining">Front end Developer</p>
          </div>
          <p className="into-paragtaph">
            Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
            ultrices quisque velit. Diam ipsum fermentum, tempor, varius congue
            iaculis aliquet quis.
          </p>
          <button className="calltoaction">Contact now</button>
        </div>
        <div className="social">
          <div className="socila-icon-container">
            <img
              src={linkedinIcon}
              alt="facebook-icon"
              className="social-icons"
            />
          </div>
          <div className="socila-icon-container">
            <img
              src={facebookIcon}
              alt="facebook-icon"
              className="social-icons"
            />
          </div>
          <div className="socila-icon-container">
            <img
              src={githubIcon}
              alt="facebook-icon"
              className="social-icons"
            />
          </div>
        </div>
      </section>
      <section className="skills"></section>
    </div>
  );
}

export default App;
