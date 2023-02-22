import React from 'react'
import styles from './dashboard.module.css'

const Projects = ({ projects }) => {
    return (
        <>
            <h6 className={styles.title}>Projects</h6>
            <div>
                <table role="table" className={styles.table}>
                    <thead role="rowgroup">
                        <tr role="row">
                            <th role="columnheader">Companies</th>
                            <th role="columnheader">Budget</th>
                            <th role="columnheader">Completion</th>
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
                                                    <img src={projects.logo} alt="logo" />
                                                </div>
                                                <div className={styles.companies_wrapper}>
                                                    <span className={styles.companies}>{projects.companies}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className={styles.budget}>$ {projects.budget}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <progress id="file" max="100" value={projects.completion} />
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