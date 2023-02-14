import React from 'react'
import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'

const Sidebar = () => {
  return (
    <aside>
      <Link to={'/'} className={styles.img_wrapper}>
        <img src="/src/assets/index.png" alt="logo" />
        <div>
          <h6>Material Dashboard 2</h6>
        </div>
      </Link>
aaa
      <nav>
        <ul>
          <li>
            <Link to={'/'}>Dashboard</Link>
          </li>
          <li>
            <Link to={'/tables'}>Tables</Link>
          </li>
          <li>
            <Link to={'/billing'}>Billing</Link>
          </li>
          <li>
            <Link to={'/notifications'}>Notifications</Link>
          </li>
          <li>
            <Link to={'/profile'}>Profile</Link>
          </li>
          <li>
            <Link to={'/login'}>Sign in</Link>
          </li>
          <li>
            <Link to={'/register'}>Sign up</Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar