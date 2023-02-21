import React from 'react'
import styles from './profile.module.css'

const Conversation = ({ conversation }) => {
    return (
        <>
            <h6 className={styles.title}>Conversations</h6>
            <div className={styles.conversation_wrapper}>
                {
                    conversation.map((elem, idx) => (
                        <div key={idx} className={styles.conversation_list}>
                            <div className={styles.left_side}>
                                <div className={styles.conversation_img_wrapper}>
                                    <img src={elem.imgUrl} alt="pic" />
                                </div>
                                <div className={styles.conversation_message_wrapper}>
                                    <span className={styles.name}>{elem.name}</span>
                                    <span className={styles.message}>{elem.message}</span>
                                </div>
                            </div>

                            <div className={styles.reply_link}>
                                <a href="#">Reply</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Conversation