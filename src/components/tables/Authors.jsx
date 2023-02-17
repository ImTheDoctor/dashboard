import React from 'react'
import { authors } from '../../data/tables'
import styles from './tables.module.css'

const Authors = () => {
    return (
        <>
            <div>
                <h6>Authors table</h6>
            </div>
            <div className={styles.author_box_wrapper}>
                <table role="table" className={styles.table}>
                    <thead role="rowgroup">
                        <tr role="row">
                            <th role="columnheader">Author</th>
                            <th role="columnheader">Function</th>
                            <th role="columnheader">Status</th>
                            <th role="columnheader">Employed</th>
                            <th role="columnheader">Action</th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup">
                        {
                            authors && authors.map((author, idx) => (
                                <tr key={idx} role="row" className={styles.row}>
                                    <td>
                                        <div>
                                            <div className={styles.author_group}>
                                                <div className={styles.imgWrapper}>
                                                    <img src={author.imgUrl} alt="avatar" />
                                                </div>
                                                <div className={styles.authorInfo}>
                                                    <span className={styles.fullname}>{author.fullname}</span>
                                                    <span className={styles.email}>{author.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{author.role}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{author.status}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{author.date}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button type="button" >Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Authors