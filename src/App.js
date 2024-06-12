import "./App.css";
import SkillsItem from "./components/skillsItem/Skillsitem";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import facebookIcon from "./Assests/et_facebook.png";
import githubIcon from "./Assests/akar-icons_github-outline-fill.png";
import linkedinIcon from "./Assests/et_linkedin.png";
import * as Icons from "react-icons/si";
import profile from "./Assests/profile.jpg";

const Skills = [
  {
    Icon: Icons.SiC,
    name: "C",
    text: "Skilled in using C for low-level programming, including creating a shell and a ray tracing engine.",
  },
  {
    Icon: Icons.SiJava,
    name: "Java",
    text: "Experienced in Java for building scalable and maintainable applications.",
  },
  {
    Icon: Icons.SiCplusplus,
    name: "C++",
    text: "Proficient in C++ for systems programming and performance-critical applications, including non-blocking HTTP server development.",
  },
  {
    Icon: Icons.SiMysql,
    name: "MySQL",
    text: "Proficient in using MySQL for managing relational databases, ensuring data integrity and query optimization.",
  },
  {
    Icon: Icons.SiGnubash,
    name: "Bash",
    text: "Skilled in writing Bash scripts for automation and system administration tasks.",
  },
  {
    Icon: Icons.SiJavascript,
    name: "JavaScript",
    text: "Experienced in writing and debugging JavaScript code for both frontend and backend development.",
  },
  {
    Icon: Icons.SiTypescript,
    name: "TypeScript",
    text: "Proficient in using TypeScript for adding static types to JavaScript, enhancing code quality and maintainability.",
  },
  {
    Icon: Icons.SiPython,
    name: "Python",
    text: "Proficient in Python for scripting, automation, and building web applications with Django.",
  },
  {
    Icon: Icons.SiCss3,
    name: "CSS3",
    text: "Skilled in styling web pages using modern CSS3 techniques, ensuring responsive and visually appealing designs.",
  },
  {
    Icon: Icons.SiHtml5,
    name: "HTML5",
    text: "Experienced in writing semantic HTML5 for structuring web content, ensuring accessibility and SEO.",
  },
  {
    Icon: Icons.SiReact,
    name: "React",
    text: "Skilled in developing dynamic and responsive user interfaces with React, including state management and component-based architecture.",
  },
  {
    Icon: Icons.SiNextDotJs,
    name: "Next.js",
    text: "Experienced in building server-side rendered and static web applications using Next.js, improving SEO and performance.",
  },
  {
    Icon: Icons.SiDjango,
    name: "Django",
    text: "Proficient in using Django for backend development, creating robust and scalable web applications.",
  },
  {
    Icon: Icons.SiPostgresql,
    name: "PostgreSQL",
    text: "Skilled in using PostgreSQL for managing databases, ensuring data integrity and performance optimization.",
  },
  {
    Icon: Icons.SiDocker,
    name: "Docker",
    text: "Experienced in containerizing applications with Docker, facilitating consistent development and deployment environments.",
  },


];

const projects = [
  {
    img: "https://github.com/ayoub-aitouna/AyoubAitouna/blob/main/public/trancendent.png?raw=true",
    name: "Ft Transcendence",
    text: `Developed a 3D online Ping-Pong game platform using Next.js and Django REST Framework, enhancing
    user experience and SEO with SSR capabilities. Implemented real-time multiplayer and tournament systems, along with a fair matchmaking ranking system. Integrated a live chat feature and a rewarding achievement system to boost user engagement. Utilized Docker for application deployment and PostgreSQL for robust data management.`,
    categories: [
      "TypeScript",
      "Next.js",
      "Django",
      "Django Channels",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/ayoub-aitouna/ft_transcendence",
    Url: "https://github.com/ayoub-aitouna/ft_transcendence",
  },
  {
    img: "https://raw.githubusercontent.com/ayoub-aitouna/miniRT42/main/rendred_scenes/torus.png",
    name: "miniRT",
    text: `Developed miniRT, a ray tracer in C, implementing complex mathematical and physics formulas to produce high-quality
    graphics. Ensured robustness by adhering to strict coding norms, preventing unexpected quits, and managing memory effectively. Utilized miniLibX for graphics programming.`,
    categories: ["C", "Ray Tracing", "miniLibX"],
    githubUrl: "https://github.com/ayoub-aitouna/miniRT42",
    Url: null,
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*age3Dgxl8sz6LZgDIwOSNQ.png",
    name: "WebServ",
    text: `Developed a high-performance, non-blocking HTTP server compliant with the HTTP 1.1 protocol. Implemented advanced
    HTTP, HTTPS features, including support for GET, POST and DELETE methods, 301/302 redirects, directory listing, and CGI script execution in Python and PHP.`,
    categories: ["C++", "HTTP", "HTTP 1.1"],
    githubUrl: "https://github.com/ayoub-aitouna/WebServ",
    Url: null,
  },
  {
    img: "https://cestoliv.com/projects/imgs/42/inception.webp",
    name: "Inception",
    text: `Running an advanced Docker system administration project, orchestrating custom Docker images for NGINX, WordPress,
    and MariaDB.`,
    categories: ["Docker"],
    githubUrl: "https://github.com/ayoub-aitouna/Inception",
    Url: null,
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:4800/format:webp/0*NsEzq9V2YGD6ocBH",
    name: "Minishell",
    text: `Creation of a shell in C with simulation of the essential functionalities of bash, including process management, analysis of user commands, and manipulation of file descriptors. Implemented custom signal handling for interrupts and output signals, and integrated built-in commands with environment variable handling.`,
    categories: ["C", "Shell", "Bash"],
    githubUrl: "https://github.com/ayoub-aitouna/miniRT42",
    Url: null,
  },
  {
    img: "https://media.licdn.com/dms/image/D4E22AQH3-7FDadCjow/feedshare-shrink_1280/0/1705644395620?e=1721260800&v=beta&t=yrgcQNujhglFOtplJeZzfkwyoQR06U9MZwUdwVj2Fz0",
    name: "Basic Kernel Development",
    text: `Crafted a basic kernel from scratch, inspired by the "Writing a Simple Operating System from Scratch" book. Implemented key components like the Global Descriptor Table (GDT), laying the foundation for future enhancements. Currently working on integrating an Interrupt Service Routine (ISR) to enable the kernel to respond to hardware and software-generated interrupts.`,
    categories: ["C", "Assembly", "Kernel Development"],
    githubUrl: "https://github.com/ayoub-aitouna/minikernel",
    Url: null,
  },
  {
    img: "https://github.com/ayoub-aitouna/e_commerce_dashboard/blob/devel/demo/home_page.png?raw=true",
    name: "E-Commerce Dashboard",
    text: `Developed a full-stack e-commerce dashboard with user authentication, product management, and sales analytics. Utilized Horizon UI for a responsive interface and Docker for deployment.`,
    categories: ["Express.js", "Sequelize", "React"],
    githubUrl: "https://github.com/ayoub-aitouna/e_commerce_dashboard",
    Url: "https://control.ipshort.com/",
  },
];

function App() {
  console.log(projects[1].img.Portfolio);
  return (
    <div className='App'>
      <nav>
        <ul>
          <li>
            <p>Portfolio</p>
            <div className='line'></div>
          </li>
          <li>
            <a href='#about'>
              <p>About me</p>
              <div className='line'></div>
            </a>
          </li>
          <li>
            <a href='#Skills'>
              <p>Skills</p>
              <div className='line'></div>
            </a>
          </li>

          <li>
            <a href='#Projects'>
              <p>My Projects</p>
              <div className='line'></div>
            </a>
          </li>
          <li>
            <a href='#contact'>
              <p>Contact</p>
              <div class='line'></div>
            </a>
          </li>
        </ul>
      </nav>

      <div className='container'>
        <section id='about' className='introductionSection'>
          <div className='intr-img-Container'>
            <p className='intro-show'>
              Avilable for work at{" "}
              <span>{`${new Date(new Date().getMonth() + 1).toLocaleString(
                "en-us",
                {
                  month: "short",
                }
              )} ${new Date().getDate().toString()}`}</span>
            </p>
            <img src={profile} className='intro-img' alt='Ayoub-Profile' />
          </div>
          <div className='intro-info'>
            <div className='into-fullname'>
              <h1>Hey, I'm Ayoub</h1>
            </div>
            <div className='into-scndline'>
              <div className='into-line'></div>
              <p className='into-explaining'>Software Developer</p>
            </div>
            <p className='into-paragraph'>
              I am currently studying Digital Technology Architecture. I have a
              strong passion for technology and a solid understanding of
              multiple programming languages. I enjoy tackling complex problems
              and always aim for the highest standards in my work, with
              meticulous attention to detail.
            </p>
            <button className='calltoaction'>Contact now</button>
          </div>
          <div className='social'>
            <a href='https://www.linkedin.com/in/ayoub-aitouna/'>
              <div className='socila-icon-container'>
                <img
                  src={linkedinIcon}
                  alt='facebook-icon'
                  className='social-icons'
                />
              </div>
            </a>
            <a href='https://github.com/ayoub-aitouna'>
              <div className='socila-icon-container'>
                <img
                  src={githubIcon}
                  alt='facebook-icon'
                  className='social-icons'
                />
              </div>
            </a>
          </div>
        </section>

        <section id='Projects' className='Projects'>
          <div className='skills-info'>
            <h1 className='skillshead'>My Projects</h1>
            <p className='into-skills-paragraph'>
              Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
              ultrices quisque velit. Diam ipsum fermentum, tempor, varius
              congue iaculis aliquet quis.
            </p>
          </div>
          <div className='Project-content'>
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

        <section id='Skills' className='skills'>
          <div className='skills-info'>
            <h1 className='skillshead'>Skills</h1>
            <p className='into-skills-paragraph'>
              Ut diam aliquet magna maecenas felis. Nunc, auctor posuere elit
              ultrices quisque velit. Diam ipsum fermentum, tempor, varius
              congue iaculis aliquet quis.
            </p>
          </div>

          <div className='skills-content'>
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

        <section id='contact' class='contact'>
          <div class='skills-info'>
            <h1 class='skillshead'>Get in Touch</h1>
            <p class='into-skills-paragraph'>
              I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
            </p>
            <div class='contact-ftom-contaner'>
              <form>
                <input
                  type='hidden'
                  name='subject'
                  value='Contact For Some dtails about work '
                />
                <input
                  name='name'
                  type='text'
                  class='fullname'
                  placeholder='full name'
                />
                <input
                  name='email'
                  type='email'
                  class='Email'
                  placeholder='Example@E-mail.com'
                  data-temp-mail-org='0'
                />
                <textarea
                  name='message'
                  rows='24'
                  cols='50'
                  class='contact-form-message'
                  placeholder='Your message'></textarea>
                <input type='submit' value='Contact now' />
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
