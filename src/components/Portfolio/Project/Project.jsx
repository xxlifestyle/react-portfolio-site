import React from "react";
import styles from "./Project.module.css";

const Project = (props) =>{
    return(

    <div className={styles.content_item}>
        <h2>{props.name}</h2>
        <img className={styles.content_item__img} src={props.img} />
        <a className={styles.github_button} href={props.link}>Github</a>
    </div>
)
}
export default Project