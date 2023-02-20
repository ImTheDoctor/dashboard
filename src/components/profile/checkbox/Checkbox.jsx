import React from 'react'
import styles from '../checkbox/checkbox.module.css'

const Checkbox = ({isChecked}) => {

    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={isChecked} />
            <span className={`${styles.slider} ${styles.round}`}></span>
        </label>
    )
}

export default Checkbox