import React from 'react'
import NavItem from '../NavItem/NavItem'
import IconButton from "../IconButton/IconButton"
import { faHome, faPuzzlePiece, faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import classes from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Navbar__img_container}>
                <img src={props.imageSrc} className={classes.Navbar__img} alt="iflix"/>
            </div>
            <div className={classes.Navbar__item}>
                <NavItem name="home" icon={faHome} />
                <NavItem name="kids" icon={faPuzzlePiece} />
            </div>
            <div className={classes.Navbar__iconBtn}>
                <IconButton icon={faSearch}/>
                <IconButton icon={faUserCircle}/>
            </div>
        </div>
    )
}

export default Navbar;