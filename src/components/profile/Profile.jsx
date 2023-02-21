import React from 'react'
import styles from './profile.module.css'
import ProfileDetail from './ProfileDetail'
import ProfileInfo from './ProfileInfo'
import Settings from './Settings'
import { applicationSettings, accountSettings, profileInfo, conversation, projects } from '../../data/profile'
import Conversation from './Conversation'
import Projects from './Projects'

const Profile = () => {
  return (
    <section>
      <div className={styles.hero}></div>
      <div className={styles.profile_container}>
        <ProfileInfo profileInfo={profileInfo} />
        <div className={styles.settings_wrapper}>
          <div className={styles.setting}>
            <Settings applicationSettings={applicationSettings} accountSettings={accountSettings} />
          </div>
          <div className={styles.information}>
            <ProfileDetail profileInfo={profileInfo} />
          </div>
          <div className={styles.conversation}>
            <Conversation conversation={conversation} />
          </div>
        </div>
        <div className={styles.projects}>
          <Projects projects={projects}/>
        </div>
      </div>
    </section>
  )
}

export default Profile