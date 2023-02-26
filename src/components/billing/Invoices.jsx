import React from 'react'
import styles from './billing.module.css'
import {MdPictureAsPdf} from 'react-icons/md'

const Invoices = ({ invoices }) => {
    return (
        <>
            <div className={styles.invoices_header}>
                <h6 className={styles.invoices_title}>Invoices</h6>
                <button className={styles.invoices_btn}>View all</button>
            </div>
            <div>
                <ul className={styles.invoices.lists_wrapper}>
                    {
                        invoices.map((elem, idx) => (
                            <li className={styles.invoices_list} key={idx}>
                                <div className={styles.invoices_left}>
                                    <span className={styles.invoices_date}>
                                        {elem.date}
                                    </span>
                                    <span className={styles.invoices_code}>
                                        #{elem.code}
                                    </span>
                                </div>
                                <div className={styles.invoices_right}>
                                    <span className={styles.invoices_budget}>$ {elem.budget}</span>
                                    <div className={styles.invoices_pdf}>
                                        <span><MdPictureAsPdf /></span>
                                        <span className={styles.invoices_text}>PDF</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Invoices