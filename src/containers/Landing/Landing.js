import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MovieCategory from '../MovieCategory/MovieCategory'

const Landing = (props) => {
    return (
        <div>
            <Navbar imageSrc="https://iflix-images.akamaized.net/web/logos/visitor-light.svg?v=1#svgView(preserveAspectRatio(xMidYMid meet)"/>
            <MovieCategory />
        </div>
    )
}

export default Landing