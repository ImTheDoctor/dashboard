import React from 'react'
import { BsFillHeartFill } from 'react-icons/bs'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer_info}>&copy; 2023, made with <BsFillHeartFill /> by <a href="#">Creative Tim</a> for a better web</span>
      <nav className={styles.footer_navigation}>
        <ul className={styles.footer_menu_wrapper}>
          <li className={styles.footer_menu_list}>
            <a href="#" className={styles.footer_menu_link}>Creative Tim</a>
          </li>
          <li className={styles.footer_menu_list}>
            <a href="#" className={styles.footer_menu_link}>About us</a>
          </li>
          <li className={styles.footer_menu_list}>
            <a href="#" className={styles.footer_menu_link}>Blog</a>
          </li>
          <li className={styles.footer_menu_list}>
            <a href="#" className={styles.footer_menu_link}>License</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer