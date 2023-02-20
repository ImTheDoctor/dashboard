import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { FaEnvelope } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import styles from './profile.module.css'

const ProfileInfo = ({profileInfo}) => {
    return (
        <div className={styles.profileInfo_wrapper}>
            <div className={styles.info_box_wrapper}>
                <div className={styles.img_wrapper}>
                    <img src={profileInfo.profPic} alt="profile" />
                </div>
                <div className={styles.info_wrapper}>
                    <h3>Richard Davis</h3>
                    <h6>CEO / Co-Founder</h6>
                </div>
            </div>
            <div className={styles.action_buttons_wrapper}>
                <button>
                    <AiFillHome />
                    <span>App</span>
                </button>
                <button>
                    <FaEnvelope />
                    <span>Message</span>
                </button>
                <button>
                    <FiSettings />
                    <span>Settings</span>
                </button>
            </div>
        </div>
    )
}

export default ProfileInfo