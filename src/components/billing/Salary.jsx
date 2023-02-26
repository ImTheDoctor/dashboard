import React from 'react'
import styles from './billing.module.css'
import {AiFillBank} from 'react-icons/ai'

const Salary = () => {
  return (
    <>
      <div className={styles.icon_wrapper}>
        <AiFillBank />
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