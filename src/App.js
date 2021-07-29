import "./App.css";
import SkillsItem from "./components/skillsItem/Skillsitem";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import facebookIcon from "./Assests/et_facebook.png";
import githubIcon from "./Assests/akar-icons_github-outline-fill.png";
import linkedinIcon from "./Assests/et_linkedin.png";
import * as Iconsi from "react-icons/si";

import ecommers from "./Assests/Projects/ecommers.png";
import moviesSite from "./Assests/Projects/moviesSite.png";
import instaClone from "./Assests/Projects/instaClone.png";
import platform from "./Assests/Projects/platform.png";
import Portfolio from "./Assests/Projects/Portfolio.png";
import Profile from "./Assests/Projects/Profile.png";

const Skills = [
  {
    Icon: Iconsi.SiJavascript,
    name: "Vanila js",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
  {
    Icon: Iconsi.SiReact,
    name: "React js",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
  {
    Icon: Iconsi.SiAndroidstudio,
    name: "Android",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
  {
    Icon: Iconsi.SiCss3,
    name: "Css3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },

  {
    Icon: Iconsi.SiHtml5,
    name: "Html5",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
  {
    Icon: Iconsi.SiCsharp,
    name: "C#",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
  {
    Icon: Iconsi.SiNodeDotJs,
    name: "Node js ",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
  {
    Icon: Iconsi.SiMicrosoftsqlserver,
    name: "Sql server",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
  {
    Icon: Iconsi.SiMysql,
    name: "MySql",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed in animi inventore? Quae sequi maiores ut culpa voluptatum aut earum?",
  },
];

const projects = [
  {
    img: platform,
    name: "platform managment ",
    text: `Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
    ultrices quisque velit. Diam ipsum fermentum, tempor, varius congue
    iaculis aliquet quis. Ut diam aliquet magna maecenas felis. Nunc,
    auctor posuere elit ultrices `,
    categories: ["CSs", "html", "Javascript", "React js", "Nodejs", "Mysql"],
    githubUrl: "https://github.com/jrayoub/PlatformX",
    Url: "https://jrayoub.github.io/PlatformX",
  },
  {
    img: Profile,
    name: "Personal portfolio Website",
    text: `Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
    ultrices quisque velit. Diam ipsum fermentum, tempor, varius congue
    iaculis aliquet quis. Ut diam aliquet magna maecenas felis. Nunc,
    auctor posuere elit ultrices `,
    categories: ["Css", "Html", "React js"],
    githubUrl: "https://github.com/jrayoub/portfolio",
    Url: "https://jrayoub.github.io/portfolio",
  },
  {
    img: moviesSite,
    name: "movies web Site",
    text: `Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
    ultrices quisque velit. Diam ipsum fermentum, tempor, varius congue
    iaculis aliquet quis. Ut diam aliquet magna maecenas felis. Nunc,
    auctor posuere elit ultrices `,
    categories: ["css", "Php", "mysql", "vanila Js", "Html"],
    githubUrl: "https://github.com/jrayoub/Movies_website",
    Url: "http://youdm.lovestoblog.com/Movies-Web-App/",
  },
  {
    img: ecommers,
    name: "Ecommers Website",
    text: `Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
    ultrices quisque velit. Diam ipsum fermentum, tempor, varius congue
    iaculis aliquet quis. Ut diam aliquet magna maecenas felis. Nunc,
    auctor posuere elit ultrices `,
    categories: ["react js", "Css3", "html"],
    githubUrl: "https://github.com/jrayoub/E-commers-shope-reactjs",
    Url: "https://jrayoub.github.io/E-commers-shope-reactjs/",
  },
  {
    img: instaClone,
    name: "Isntagram Clone",
    text: `Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
    ultrices quisque velit. Diam ipsum fermentum, tempor, varius congue
    iaculis aliquet quis. Ut diam aliquet magna maecenas felis. Nunc,
    auctor posuere elit ultrices `,
    categories: ["Css3", "React js", "Html"],
    githubUrl: "https://github.com/jrayoub/Instagram-clone-reactjs",
    Url: "https://jrayoub.github.io/Instagram-clone-reactjs",
  },
  {
    img: Portfolio,
    name: "Agency Portfolio website",
    text: `Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
    ultrices quisque velit. Diam ipsum fermentum, tempor, varius congue
    iaculis aliquet quis. Ut diam aliquet magna maecenas felis. Nunc,
    auctor posuere elit ultrices `,
    categories: ["html5", "Css3", "vanila Js"],
    githubUrl: "https://github.com/jrayoub/Clickvalue2",
    Url: "http://youdm.lovestoblog.com/Clickvalue2/",
  },
];
function App() {
  console.log(projects[1].img.Portfolio);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <p>Portfolio</p>
            <div className="line"></div>
          </li>
          <li>
            <a href="#about">
              <p>About me</p>
              <div className="line"></div>
            </a>
          </li>
          <li>
            <a href="#Skills">
              <p>Skills</p>
              <div className="line"></div>
            </a>
          </li>

          <li>
            <a href="#Projects">
              <p>My Projects</p>
              <div className="line"></div>
            </a>
          </li>
        </ul>
      </nav>

      <div className="container">
        <section id="about" className="introductionSection">
          <div className="intr-img-Container">
            <p className="intro-show">
              Avilable for work at{" "}
              <span>{`${new Date(
                new Date().getMonth().toString()
              ).toLocaleString("en-us", {
                month: "short",
              })} ${new Date().getDate().toString()}`}</span>
            </p>
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
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
              I am a Full-Stack Developer & Designer.
              <br /> I like to work and Create projects on both the Frontend and
              the Backend.
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
        <section id="Skills" className="skills">
          <div className="skills-info">
            <h1 className="skillshead">Skills</h1>
            <p className="into-skills-paragraph">
              Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
              ultrices quisque velit. Diam ipsum fermentum, tempor, varius
              congue iaculis aliquet quis.
            </p>
          </div>

          <div className="skills-content">
            <ul>
              {Skills.map((item, index) => (
                <li key={index}>
                  <SkillsItem
                    ComponentIcon={item.Icon}
                    name={item.name}
                    text={item.text}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section id="Projects" className="Projects">
          <div className="skills-info">
            <h1 className="skillshead">My Projects</h1>
            <p className="into-skills-paragraph">
              Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
              ultrices quisque velit. Diam ipsum fermentum, tempor, varius
              congue iaculis aliquet quis.
            </p>
          </div>
          <div className="Project-content">
            <ul>
              {projects.map((item, index) => (
                <li key={index}>
                  <ProjectItem
                    image={item.img}
                    name={item.name}
                    text={item.text}
                    categories={item.categories}
                    githuburl={item.githubUrl}
                    url={item.Url}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
