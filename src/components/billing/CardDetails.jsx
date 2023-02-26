import React from 'react'
import styles from './billing.module.css'
import { AiOutlineWifi } from 'react-icons/ai'

const CardDetails = () => {
    return (
        <>
            <div className={styles.card_sign_wrapper}>
                <AiOutlineWifi />
            </div>
            <h5 className={styles.card_number}>5555 5555 5555 5555</h5>
            <div className={styles.card_bottom}>
                <div className={styles.card_info}>
                    <div className={styles.person_info}>
                        <span className={styles.card_holder}>Card Holder</span>
                        <h6 className={styles.person_name}>Jack Peterson</h6>
                    </div>
                    <div className={styles.expire_info}>
                        <span className={styles.expire_text}>Expires</span>
                        <h6 className={styles.expire_date}>11/22</h6>
                    </div>
                </div>
                <div className={styles.card_icon_wrapper}>
                    <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default CardDetails