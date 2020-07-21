import React from 'react'
import classes from './MovieCard.module.css'

const MovieCard = (props) => {
    return (
        <div className={classes.MovieCard}>
            <div className={classes.MovieCard__img_container}>
                <img src={props.imgSrc} className={classes.MovieCard__img} alt={props.title}/>
            </div>
            <div className={classes.MovieCard__title_container}>
                <p className={classes.MovieCard__title}>{props.title}</p>
            </div>
        </div>
    )
}

export default MovieCard