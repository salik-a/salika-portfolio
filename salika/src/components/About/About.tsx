import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <li className={styles.aboutItem}>
          <p>
            I am a software developer who graduated from the Department of
            Electrical and Electronics Engineering, advanced own career in the
            field of software, and currently works as a React-Native Developer.
            I am someone who likes to constantly improve myself and makes the
            necessary effort to do my job well. Reach out if you'd like to learn
            more!
          </p>
        </li>
        <img
          src={getImageUrl("about/avatar.png")}
          alt="My github profil picture"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};

export default About;
