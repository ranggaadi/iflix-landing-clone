import React, {useState, useEffect} from 'react';
import classes from './MovieCategory.module.css';
import IconButton from '../../components/IconButton/IconButton'
import { faAngleDown} from "@fortawesome/free-solid-svg-icons"
import cx from 'classnames'


const MovieCategory = () => {
    const [isScrolled, setScrolled] = useState(false);

    const handleScrolled = () => {
        setScrolled(window.scrollY > 50.95)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrolled)
    })

    const categories = [
        'home',
        'tv',
        'movies',
        'kisah tanah jawa',
        'k-flix',
        'indonesian',
        'hollywood',
        'international',
        'comedy',
        'drama',
        'romance',
        'horror',
        'action',
        'anime',
        'entertainment',
        'documentary',
        'crime',
        'only on iflix',
        'new on iflix',
        'sports',
        'snacks'
    ]

    return (
        <div className={isScrolled ? cx(classes.MovieCategory, classes.Scrolled) : classes.MovieCategory}>
            <div className={classes.MovieCategory__container}>
                {categories.map((cat, idx) => {
                    return <p key={idx} className={classes.MovieCategory__category}>{cat}</p>
                })}        
            </div>
            <div className={classes.MovieCategory__icon}>
                <IconButton icon={faAngleDown}/>
            </div>
        </div>
    )
}

export default MovieCategory