import React from 'react'
import { alerts } from '../../data/notifications'
import styles from './notifications.module.css'

const Alerts = () => {
    return (
        <>
        <h2 className={styles.title}>Alerts</h2>
            {
                alerts.map((alerts, idx) => (
                    <div key={idx} className={styles.alert_box} style={{backgroundImage: alerts.color}}>
                        <div>
                            {alerts.text}
                        </div>
                        <p>x</p>
                    </div>
                ))
            }
        </>
    )
}

export default Alerts