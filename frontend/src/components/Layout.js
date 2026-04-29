import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  const mainContentRef = useRef(null);

  const handleSkipToContent = (e) => {
    e.preventDefault();
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  };

  return (
    <div>
      <a
        href="#main-content"
        className={styles.skipLink}
        onClick={handleSkipToContent}
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        className={styles.mainContent}
        ref={mainContentRef}
        tabIndex={-1}
        style={{ outline: 'none' }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
