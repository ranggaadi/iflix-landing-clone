import React from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import classes from './SpecialCollection.module.css'

const SpecialCollection = (props) => {

    let bgStyle = {}
    if (props.bgImg) {
        bgStyle = {
            background: `linear-gradient(240deg, rgba(42, 42, 46, 0.15) 8%, rgba(42, 42, 46, 0) 50%) repeat scroll 0% 0%, rgba(0, 0, 0, 0) url(${props.bgImg}) no-repeat scroll center center / cover`
        }
    } 

    return (
        <div className={classes.SpecialCollection} style={bgStyle}>
            <p className={classes.SpecialCollection__seeAll}>See All</p>
            <div className={classes.SpecialCollection__scrollMenu}>
                    <div className={classes.SpecialCollection__img_container}>
                        <img className={classes.SpecialCollection__img} src={props.imgSrc} alt={props.categoryName}/>
                    </div>
                    {props.movies.map((movie, idx) => {
                        return <MovieCard key={idx} imgSrc={movie.imgSrc} title={movie.title}/>
                    })}
            </div>
        </div>
    )
}

export default SpecialCollection