import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div>
      <a href="#main-content" className={styles.skipLink}>
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className={styles.mainContent} tabIndex="-1">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
