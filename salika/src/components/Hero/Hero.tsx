import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
  const onLinkClick = () => {
    const pdfUrl = getImageUrl("resume.pdf");
    // const pdfUrl = "../../assets/resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    // document.body.removeChild(link);
  };
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
            href="#"
            rel="noopener noreferrer"
            onClick={onLinkClick}
            className={styles.downloadBtn}
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
          <a href="mailto:salikalper@gmail.com" target="_blank">
            <img
              className={styles.img}
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
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
