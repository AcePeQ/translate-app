import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/logo.svg" alt="translate app logo" />
    </header>
  );
}

export default Header;
