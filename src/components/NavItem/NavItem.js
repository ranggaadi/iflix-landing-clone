import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./NavItem.module.css"

const NavItem = (props) => {
    return (
        <div className={classes.NavItem}>
            <FontAwesomeIcon icon={props.icon} className={classes.NavItem__icon}/>
            <p className={classes.NavItem__p}>{props.name}</p>
        </div>
    )
}

export default NavItem;