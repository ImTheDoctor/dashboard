import React from 'react'
import { notes } from '../../data/notifications'
import styles from './notifications.module.css'

const NotificationList = () => {

    return (
        <>
            <h2 className={styles.title}>Notifications</h2>
            <span className={styles.text}>Notifications on this page use Toasts from Bootstrap. Read more details here.</span>
            <div className={styles.note_box_wrapper}>
                {
                    notes && notes.map((note, idx) => (
                        <button key={idx}
                            className={styles.notes_list}
                            style={{ backgroundImage: note.color }}
                        >
                            {note.text}
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default NotificationList