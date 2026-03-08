import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  const [isSkipFocused, setIsSkipFocused] = useState(false);

  return (
    <div>
      <a
        href="#main-content"
        onFocus={() => setIsSkipFocused(true)}
        onBlur={() => setIsSkipFocused(false)}
        style={{
          position: 'absolute',
          top: isSkipFocused ? '0' : '-50px',
          left: '0',
          padding: '8px 16px',
          backgroundColor: 'var(--primary-color)',
          color: 'var(--white)',
          zIndex: 1000,
          transition: 'top 0.2s ease-in-out',
          fontWeight: '500'
        }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex="-1" className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
