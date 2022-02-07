import React from 'react';
import styles from './SearchBar.module.css';


function SearchBarFlight({ children }) {
  return (
    <div className={styles.principalContainer}>
      {children}
    </div>
  );
}

export default SearchBarFlight;
