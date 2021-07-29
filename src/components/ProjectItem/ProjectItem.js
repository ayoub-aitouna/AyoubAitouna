import React from "react";
import style from "./Projectitem.module.css";

function ProjectItem({ image, name, text, categories, githuburl, url }) {
  return (
    <div className={style.wrrapper}>
      <div className={style.img_container}>
        <img src={image} alt="Project img" />
      </div>

      <div className={style.info}>
        <h1>{name}</h1>
        <p>{text}</p>
        <ul className={style.categoryul}>
          {categories.map((item, index) => (
            <li key={index} className={style.categoryitem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={style.buttons}>
        <a
          className={style.link}
          href={githuburl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="button" value="code on github" />
        </a>

        <a
          className={style.link}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <input type="button" value="View live" />
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
