import React from 'react';
import { node } from 'prop-types';

import styles from './styles.module.css';

const Wrapper = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

Wrapper.propTypes = {
  children: node,
};

export default Wrapper;
