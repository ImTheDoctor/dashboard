import React from 'react'
import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'
import { MdDashboard, MdTableView, MdOutlineNotifications, MdLogin } from 'react-icons/md';
import { IoMdPaper, IoMdClipboard } from 'react-icons/io'
import { IoPersonSharp } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <aside className={styles.aside}>
      <Link to={'/'} className={styles.img_wrapper}>
        <img src="/src/assets/index.png" alt="logo" />
        <div>
          <h6>Material Dashboard 2</h6>
        </div>
      </Link>

      <nav className={styles.menu_navigation}>
        <ul className={styles.menu_list_wrapper}>
          <li className={styles.menu_list}>
            <Link className={styles.menu_link} to={'/'}><MdDashboard className={styles.menu_icons}/>Dashboard</Link>
          </li>
          <li className={styles.menu_list}>
            <Link className={styles.menu_link} to={'/tables'}><MdTableView className={styles.menu_icons}/>Tables</Link>
          </li>
          <li className={styles.menu_list}>
            <Link className={styles.menu_link} to={'/billing'}><IoMdPaper className={styles.menu_icons}/>Billing</Link>
          </li>
          <li className={styles.menu_list}>
            <Link className={styles.menu_link} to={'/notifications'}><MdOutlineNotifications className={styles.menu_icons}/>Notifications</Link>
          </li>
          <li className={styles.menu_list}>
            <Link className={styles.menu_link} to={'/profile'}><IoPersonSharp className={styles.menu_icons}/>Profile</Link>
          </li>
          <li className={styles.menu_list}>
            <Link className={styles.menu_link} to={'/login'}><MdLogin className={styles.menu_icons}/>Sign in</Link>
          </li>
          <li className={styles.menu_list}>
            <Link className={styles.menu_link} to={'/register'}><IoMdClipboard className={styles.menu_icons}/>Sign up</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar