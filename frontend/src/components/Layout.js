import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  const mainRef = useRef(null);

  const handleSkip = (e) => {
    e.preventDefault();
    if (mainRef.current) {
      mainRef.current.focus();
    }
  };

  return (
    <div>
      <a
        href="#main-content"
        onClick={handleSkip}
        className={styles.skipLink}
      >
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        ref={mainRef}
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
