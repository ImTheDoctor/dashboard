import React from 'react'
import styles from './dashboard.module.css'
import { appInfo, projects, completed, daily, views } from '../../data/dashboard'
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
        <Charts data={views}/>
        <Charts data={daily}/>
        <Charts data={completed}/>
      </div>
      <div className={styles.projects_wrapper}>
        <Projects projects={projects} />
      </div>
    </section>
  )
}

export default Dashboard