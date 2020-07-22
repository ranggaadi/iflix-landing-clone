import React from 'react'
import classes from './MovieCard.module.css'

const MovieCard = (props) => {
    let movieCardStyling = {}
    let containerStyling = {}
    
    if (props.isLarge) {
        movieCardStyling = {
            width: "31rem"
        }
        containerStyling = {
            borderRadius: "8px"
        }
    }
    return (
        <div className={classes.MovieCard} style={movieCardStyling}>
            <div className={classes.MovieCard__img_container} style={containerStyling}>
                <img src={props.imgSrc} className={classes.MovieCard__img} alt={props.title}/>
            </div>
            {!props.isLarge ? <div className={classes.MovieCard__title_container}>
                <p className={classes.MovieCard__title}>{props.title}</p>
            </div> : null}
        </div>
    )
}

export default MovieCard