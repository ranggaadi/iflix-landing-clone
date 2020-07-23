import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlay, faFilm} from "@fortawesome/free-solid-svg-icons";
import classes from './Carouseltem.module.css'

const CarouselItem = (props) => {
    return (
        <div className={classes.CarouselItem}>
            <div className={classes.Image_container}>
                <img src={props.imgSrc} className={classes.Image} alt="carousel-img"/>
            </div>
            <div className={classes.Shadow}></div>
            <div className={classes.Overlay}>
                <button className={classes.PlayBtn}>
                    <FontAwesomeIcon icon={faPlay} className={classes.PlayIcon}/>
                    Play
                </button>
                {props.trailer ? <button className={classes.TrailerBtn}><FontAwesomeIcon icon={faFilm} className={classes.TrailerIcon}/></button> : null}
            </div>
        </div>
    )
}

export default CarouselItem