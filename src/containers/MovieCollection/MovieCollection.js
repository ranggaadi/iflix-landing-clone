import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import classes from './MovieCollection.module.css'

const MovieCollection = (props) => {
    return (
        <div className={classes.MovieCollection}>
            <h2 className={classes.MovieCollection__collectionName}>{props.collectionName}</h2>
            <div className={classes.MovieCollection__scrollMenu}>
                {props.movies.map((movie, idx) => {
                    return <MovieCard key={idx} imgSrc={movie.imgSrc} title={movie.title}/>
                })}
            </div>
        </div>
    )
}

export default MovieCollection