import React from 'react'
import styles from './billing.module.css'

const PaymentService = () => {
    return (
        <>
            <div className={styles.icon_wrapper}>
                icon
            </div>
            <div className={styles.payment_service_info}>
                <h6 className={styles.payment_service_name}>Paypal</h6>
                <span className={styles.payment_service_text}>Freelance Payment</span>
                <h5 className={styles.payment_service_budget}>$455.00</h5>
            </div>
        </>
    )
}

export default PaymentService