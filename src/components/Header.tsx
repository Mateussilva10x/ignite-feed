import styles from "./Header.module.css";
import igniteLogo from "../assets/igniteLogo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt={igniteLogo} />
    </header>
  );
}

export default Header;
