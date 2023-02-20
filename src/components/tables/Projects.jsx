import React from 'react'
import { projects } from '../../data/tables'
import styles from './tables.module.css'

const Projects = () => {
    return (
        <>
            <div className={styles.title_wrapper}>
                <h6 className={styles.title}>Projects table</h6>
            </div>
            <div>
                <table role="table" className={styles.table}>
                    <thead role="rowgroup">
                        <tr role="row">
                            <th role="columnheader">Project</th>
                            <th role="columnheader">Budget</th>
                            <th role="columnheader">Status</th>
                            <th role="columnheader">Completion</th>
                            <th role="columnheader">Action</th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup">
                        {
                            projects && projects.map((projects, idx) => (
                                <tr key={idx} role="row" className={styles.row}>
                                    <td>
                                        <div>
                                            <div className={styles.author_group}>
                                                <div className={styles.imgWrapper}>
                                                    <img src={projects.imgUrl} alt="logo" />
                                                </div>
                                                <div className={styles.authorInfo}>
                                                    <span className={styles.fullname}>{projects.projectName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>$ {projects.budget}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{projects.status}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{projects.progress} %</span>
                                            <progress id="file" max="100" value={projects.progress}> {projects.progress} </progress>
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

export default Projects