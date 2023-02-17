import React from 'react'
import { projects } from '../../data/tables'
import styles from './tables.module.css'

const Projects = () => {
    return (
        <div>
            <div>
                <h6>Projects table</h6>
            </div>
            <div>
                <table role="table">
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
                                <tr key={idx} role="row">
                                    <td>
                                        <div>
                                            <div>
                                                <img src={projects.imgUrl} alt="logo" />
                                                <span>{projects.projectName}</span>
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
        </div>
    )
}

export default Projects