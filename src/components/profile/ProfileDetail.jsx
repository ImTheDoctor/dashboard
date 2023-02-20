import React from 'react'
import styles from './profile.module.css'

const ProfileDetail = ({ profileInfo }) => {
  return (
    <>
      <h6 className={styles.title}>Profile Information</h6>
      <p className={styles.summary}>{profileInfo.summary}</p>
      <ul className={styles.address}>
        <li className={styles.address_lists}><span>Full Name:</span><span>{profileInfo.fullname}</span></li>
        <li className={styles.address_lists}><span>Mobile:</span><span>{profileInfo.mobile}</span></li>
        <li className={styles.address_lists}><span>Email:</span><span>{profileInfo.email}</span></li>
        <li className={styles.address_lists}><span>Location:</span><span>{profileInfo.location}</span></li>
        <li className={styles.address_lists}><span>Social:</span>
          {
            profileInfo.social.map((social, index) => (
              <a key={index} href={social.url}>
                <div className={styles.social_links}>
                  <img src={social.icon} alt="img" />
                </div>
              </a>
            ))
          }
        </li>
      </ul>
    </>
  )
}

export default ProfileDetail