import React from 'react'
import styles from './profile.module.css'

const Projects = ({projects}) => {
    return (
        <>
            <h6 className={styles.title}>Projects</h6>
            <span className={styles.subTitle}>Architects design houses</span>
            <div className={styles.project_box_wrapper}>
                {
                    projects.map((elem,idx)=>(
                        <div key={idx} className={styles.project_box}>
                            <div className={styles.project_img_wrapper}>
                                <img src={elem.imgUrl} alt="img" />
                            </div>
                            <div className={styles.project_info}>
                                <h6 className={styles.project_title}>{elem.title}</h6>
                                <span className={styles.project_text}>{elem.text}</span>
                            </div>
                            <div className={styles.project_link_wrapper}>
                                <a href="#">View Project</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Projects