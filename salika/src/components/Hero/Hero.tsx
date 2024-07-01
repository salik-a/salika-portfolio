import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Alper</h1>
        <h2 className={styles.subTitle}>React-Native Developer</h2>
        <div className={styles.buttonsContainer}>
          <a
            href="../../assets/resume.pdf"
            className={styles.downloadBtn}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a href="#contact" className={styles.contactBtn}>
            Contact Info
          </a>
        </div>
        <div className={styles.innerContent}>
          <a href="https://www.linkedin.com/in/alper-salik/" target="_blank">
            <img
              className={styles.img}
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
          <a href="https://github.com/salik-a" target="_blank">
            <img
              className={styles.img}
              src={getImageUrl("contact/githubIcon.png")}
              alt="github icon"
            />
          </a>
        </div>
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
