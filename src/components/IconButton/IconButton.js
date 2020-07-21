import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./IconButton.module.css";

const IconButton = (props) => <FontAwesomeIcon icon={props.icon} className={classes.IconButton}/>

export default IconButton
