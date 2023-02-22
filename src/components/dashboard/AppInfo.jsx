import React from 'react'
import styles from './dashboard.module.css'

const AppInfo = ({ appInfo }) => {
    return (
        <>
            {
                appInfo && appInfo.map((elem, idx) => (
                    <div key={idx} className={styles.app_info_box}>
                        <div className={styles.app_info_bar}>
                            <div className={styles.icon_box}>
                                <img src={elem.icon} alt="ico" />
                            </div>
                            <div className={styles.app_info}>
                                <span className={styles.title}>{elem.title}</span>
                                <h4 className={styles.int}>{elem.int>10000?(elem.int/1000).toFixed(0)+"K":elem.int}</h4>
                            </div>
                        </div>
                        <div className={styles.progress}>
                            <span>{elem.progressText}</span>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default AppInfo
// (elem.int / 1000).toFixed(0)