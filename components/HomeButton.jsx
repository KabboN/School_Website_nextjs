import Router from "next/router";
import styles from "../styles/HomeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const handleNavigateToHome = () => {
  Router.push("/");
};

const HomeButton = () => (
  <div className={styles.container}>
    <button className={styles.button} onClick={handleNavigateToHome}>
      <FontAwesomeIcon icon={faHome} className="mr-2" />
      <span>Go to Home</span>
    </button>
  </div>
);

export default HomeButton;
