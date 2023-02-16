import React from 'react'
import styles from './header.module.css'
import { AiFillHome, AiFillBell } from 'react-icons/ai'
import { IoPersonCircle, IoSettingsSharp } from 'react-icons/io5'

const Header = () => {
  return (
    <header className={styles.header}>
      {/**
      *TODO Make Breadcrumbs dynamically with component**/}
      <div className={styles.breadcrumbs_wrapper}>
        <AiFillHome /> / Dashboard
        <p>Dashboard</p>
      </div>
      <div className={styles.infoBar}>
        <form className={styles.infoBar_form}>
          <input type="text" className={styles.infoBar_form_input} required />
          <label className={styles.infoBar_form_label}>Your email address</label>
        </form>
        <div className={styles.infoBar_settings}>
          <IoPersonCircle />
          <IoSettingsSharp />
          <AiFillBell />
        </div>
      </div>
    </header>
  )
}

export default Header