import React from "react";
import Main from "../Main";
import Navbar from "../Navbar";

import styles from "./styles.module.scss";

const Fullscreen = (props) => {
  const { component, secondComponent } = props;
  return (
    <div className={styles.fullscreen}>
      <div id={styles.globe}>{secondComponent}</div>
      <Navbar />
      {component}
    </div>
  );
};

export default Fullscreen;
