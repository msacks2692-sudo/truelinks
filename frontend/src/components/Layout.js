import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  const mainContentRef = useRef(null);

  const handleSkipToContent = () => {
    if (mainContentRef.current) {
      mainContentRef.current.focus();
    }
  };

  return (
    <div>
      <a
        href="#main-content"
        onClick={handleSkipToContent}
        className={styles.skipLink}
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        ref={mainContentRef}
        tabIndex={-1}
        style={{ outline: 'none' }}
        className={styles.mainContent}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
