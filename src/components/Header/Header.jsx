import React from "react";
import styles from './Header.module.css'
import {NavLink} from "react-router-dom";


const Header = (props) => {
    return(
    <div>
        <ul className={styles.header_items}>
            <img
                src="https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"
                height={35} width={40} alt="logo"/>
            <NavLink to="/aboutme"><li>About me</li></NavLink>
            <NavLink to="/portfolio"><li>Portfolio</li></NavLink>
            <NavLink to="/contacts"><li>Contacts</li></NavLink>
        </ul>
    </div>
    )
}

export default Header