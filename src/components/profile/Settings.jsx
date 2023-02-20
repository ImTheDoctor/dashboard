import React from 'react'
import Checkbox from './checkbox/Checkbox'
import styles from './profile.module.css'

const Settings = ({ applicationSettings, accountSettings }) => {
    return (
        <>
            <h6 className={styles.title}>Platform Settings</h6>
            <div className={styles.setting_box}>
                <span className={styles.subTitle}>Account</span>
                <div className={styles.settings}>
                    {
                        accountSettings.map((acc, idx) => (
                            <div key={idx}>
                                <Checkbox isChecked={acc.isChecked} />
                                <span>{acc.message}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <span className={styles.subTitle}>Application</span>
                <div className={styles.settings}>
                    {
                        applicationSettings.map((acc, idx) => (
                            <div key={idx}>
                                <Checkbox isChecked={acc.isChecked} />
                                <span>{acc.message}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Settings