import React from 'react'
import styles from './billing.module.css'

const Salary = () => {
  return (
    <>
      <div className={styles.icon_wrapper}>
        icon
      </div>
      <div className={styles.salary_info}>
        <h6 className={styles.salary_name}>Salary</h6>
        <span className={styles.salary_text}>Belong Interactive</span>
        <h5 className={styles.salary_budget}>+$2000</h5>
      </div>
    </>
  )
}

export default Salary