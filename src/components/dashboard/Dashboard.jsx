import React from 'react'
import styles from './dashboard.module.css'
import { appInfo, projects } from '../../data/dashboard'
import AppInfo from './AppInfo'
import Charts from './Charts'
import Projects from './Projects'

const Dashboard = () => {
  return (
    <section className={styles.dashboard_wrapper}>
      <div className={styles.app_info_wrapper}>
        <AppInfo appInfo={appInfo} />
      </div>
      <div className={styles.charts_wrapper}>
        <Charts />
      </div>
      <div className={styles.projects_wrapper}>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Dashboard