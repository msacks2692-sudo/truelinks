import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  const mainRef = useRef(null);

  const handleSkipLinkClick = (e) => {
    e.preventDefault();
    if (mainRef.current) {
      mainRef.current.focus();
    }
  };

  return (
    <div>
      <a href="#main-content" className={styles.skipLink} onClick={handleSkipLinkClick}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" ref={mainRef} tabIndex={-1} className={styles.mainContent} style={{ outline: 'none' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
