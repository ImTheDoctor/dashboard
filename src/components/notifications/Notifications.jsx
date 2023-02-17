import React from 'react'
import Alerts from './Alerts'
import NotificationList from './NotificationList'
import styles from './notifications.module.css'

const Notifications = () => {
  return (
    <section className={styles.notifications_wrapper}>
      <div className={`container ${styles.alerts}`}><Alerts /></div>
      <div className={`container  ${styles.notes}`}><NotificationList /></div>
    </section>
  )
}

export default Notifications