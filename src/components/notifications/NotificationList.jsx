import React from 'react'
import { notes } from '../../data/notifications'

const NotificationList = () => {

    return (
        <>
            <h2>Notifications</h2>
            <p>Notifications on this page use Toasts from Bootstrap. Read more details here.</p>
            <div>
                {
                    notes && notes.map((note, idx) => (
                        <div key={idx}
                        >
                            {note.text}
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default NotificationList