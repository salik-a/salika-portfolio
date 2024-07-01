import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";
export type TProjectCard = {
  project: {
    title: string;
    imageSrc: string;
    description: string;
    skills: [string];
    sources: [string];
    code: string;
    source: string;
  };
};

export const ProjectCard: React.FC<TProjectCard> = ({
  project: { title, imageSrc, description, skills, code, sources },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {code && (
          <a href={code} target="_blank" className={styles.link}>
            Github
          </a>
        )}
        {sources.map((source, id) => {
          return (
            <a key={id} target="_blank" href={source} className={styles.link}>
              {id === 0 ? "Play Store" : "App Store"}
            </a>
          );
        })}
      </div>
    </div>
  );
};
