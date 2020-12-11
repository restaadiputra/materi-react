import React from "react";

import styles from './style.module.css';

function Wrapper({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Wrapper;
