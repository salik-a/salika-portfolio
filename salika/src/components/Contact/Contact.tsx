import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <p>Get in Touch</p>
        <h2>Contact Me</h2>
        <div className={styles.innerContent}>
          <li className={styles.link}>
            <img
              className={styles.img}
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email icon"
            />
            <a href="mailto:salikalper@gmail.com">salikalper@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              className={styles.img}
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/alper-salik/">
              linkedin.com/alper-salik
            </a>
          </li>
        </div>
        <li className={styles.link}>
          <img
            className={styles.img}
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github icon"
          />
          <a href="https://github.com/salik-a">github.com/salik-a</a>
        </li>
      </div>
    </footer>
  );
};
export default Contact;
