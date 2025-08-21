import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navLink}>
        <h2>TrueLinks</h2>
      </Link>
      <ul className={styles.navList}>
        <li><NavLink to="/" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Login</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Register</NavLink></li>
        <li><NavLink to="/profile" className={({ isActive }) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Profile</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
