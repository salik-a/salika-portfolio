import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <li className={styles.aboutItem}>
          <p>
            I'm a passionate React Native Developer specializing in
            cross-platform mobile applications. I work with React Native,
            TypeScript, Redux, Expo, and Firebase to create seamless user
            experiences. When I'm not coding, I'm exploring new technologies and
            best practices to stay at the forefront of mobile development. Let's
            build something amazing together!
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
