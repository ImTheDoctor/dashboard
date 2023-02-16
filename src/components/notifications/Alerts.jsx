import React from 'react'
import { alerts } from '../../data/notifications'

const Alerts = () => {
    return (
        <>
            {
                alerts.map((alerts, idx) => (
                    <div key={idx}>{alerts.topic}</div>
                ))
            }
        </>
    )
}

export default Alerts