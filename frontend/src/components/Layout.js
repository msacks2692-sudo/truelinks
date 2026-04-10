import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  const handleSkipClick = (e) => {
    e.preventDefault();
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  };

  return (
    <div>
      <a
        href="#main-content"
        className={styles.skipLink}
        onClick={handleSkipClick}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1" style={{ outline: 'none' }} className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
