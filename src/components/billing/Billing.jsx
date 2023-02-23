import React from 'react'
import styles from './billing.module.css'
import { billingInfo, invoices } from '../../data/billing'
import Invoices from './Invoices'
import CardDetails from './CardDetails'
import Salary from './Salary'
import PaymentMethod from './PaymentMethod'
import PaymentService from './PaymentService'
import BillingInfo from './BillingInfo'
import Transaction from './Transaction'

const Billing = () => {
  return (
    <section className={styles.billing_wrapper}>
      <div className={styles.top_section}>
        <div className={styles.payment_details_wrapper}>
          <div className={styles.detail_top}>
            <div className={styles.cart_wrapper}>
              <CardDetails />
            </div>
            <div className={styles.salary_box}>
              <Salary />
            </div>
            <div className={styles.payment_service_box}>
              <PaymentService />
            </div>
          </div>
          <div className={styles.payment_method}>
            <PaymentMethod />
          </div>
        </div>
        <div className={styles.invoices}>
          <Invoices invoices={invoices} />
        </div>
      </div>



      <div className={styles.bottom_section}>
        <div className={styles.billing_info_wrapper}>
          <BillingInfo billingInfo={billingInfo}/>
        </div>
        <div className={styles.transaction_wrapper}>
          <Transaction />
        </div>
      </div>
    </section>
  )
}

export default Billing