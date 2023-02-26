import React from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import styles from './billing.module.css'

const PaymentMethod = () => {
    return (
        <>
            <div className={styles.payment_method_header}>
                <h6 className={styles.payment_method_header_text}>Payment Method</h6>
                <button className={styles.payment_card_add}>+ Add New Card</button>
            </div>
            <div className={styles.payment_method_content}>
                <div className={styles.mastercard_wrapper}>
                    <div className={styles.card_logo_wrapper}>
                        <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/mastercard.27fca3e7637a9458fb64.png" alt="mastercard" />
                    </div>
                    <h6 className={styles.card_number_mask}>**** **** **** 7852</h6>
                    <div>
                        <MdModeEditOutline />
                    </div>
                </div>
                <div className={styles.visa_wrapper}>
                    <div className={styles.card_logo_wrapper}>
                        <img src="https://demos.creative-tim.com/material-dashboard-react/static/media/visa.71c0d5e9e2aaee42e4c3.png" alt="visa" />
                    </div>
                    <h6 className={styles.card_number_mask}>**** **** **** 8475</h6>
                    <div>
                        <MdModeEditOutline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentMethod