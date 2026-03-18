import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className={styles.mainContent} style={{ outline: 'none' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
