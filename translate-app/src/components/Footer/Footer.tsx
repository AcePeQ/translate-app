import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.author_info}>
      Coded by <a href="#">Maciej Nojszewski (AcePeQ)</a> | Challenge by{" "}
      <a href="https://www.devchallenges.io?ref=challenge" target="_blank">
        devChallenges.io
      </a>
      .
    </footer>
  );
}

export default Footer;
