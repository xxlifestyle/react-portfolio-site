import React from 'react'
import styles from './Portfolio.module.css'
import Project from "./Project/Project";

const Portfolio = (props)=>{

    let projectElements = props.portfolioPage.projectData.map((project) => (
        <Project name={project.name} link={project.link} img={project.img} />
    ));
    return(
        <div>
            <h1 className={styles.title}>My Portfolio</h1>
            <div className={styles.content}>
                {projectElements}
            </div>
        </div>
    )
};

export default Portfolio