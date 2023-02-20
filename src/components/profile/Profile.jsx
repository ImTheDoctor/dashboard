import React from 'react'
import styles from './profile.module.css'
import ProfileDetail from './ProfileDetail'
import ProfileInfo from './ProfileInfo'
import Settings from './Settings'
import { applicationSettings, accountSettings, profileInfo } from '../../data/profile'

const Profile = () => {
  return (
    <section>
      <div className={styles.hero}></div>
      <div className={styles.profile_container}>
        <ProfileInfo profileInfo={profileInfo} />
        <div className={styles.settings_wrapper}>
          <div>
            <Settings applicationSettings={applicationSettings} accountSettings={accountSettings} />
          </div>
          <div className={styles.information}>
            <ProfileDetail profileInfo={profileInfo} />
          </div>
          <div className={styles.conversation}>
            <h6 className={styles.title}>Conversations</h6>
          </div>
        </div>
        <div>
          <h6>Projects</h6>
          <span>Architects design houses</span>
        </div>
      </div>
    </section>
  )
}

export default Profile