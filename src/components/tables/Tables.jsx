import React from 'react'
import Authors from './Authors'
import Projects from './Projects'
import styles from './tables.module.css'

const Tables = () => {
  return (
    <section className={styles.tables_wrapper}>
      <div className={styles.tables_authors}>
        <Authors />
      </div>
      <div className={styles.tables_projects}>
        <Projects />
      </div>
    </section>
  )
}

export default Tables