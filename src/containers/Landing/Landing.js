import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MovieCategory from '../MovieCategory/MovieCategory'
import MovieCollection from '../MovieCollection/MovieCollection'
import SpecialCollection from '../SpecialCollection/SpecialCollection'
import classes from './Landing.module.css'

const Landing = (props) => {
     const recommended = [
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "The World Of Married"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5db29f20e4b03bc8d43964eb-1582787060554_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Kisah Tanah Jawa: Merapi"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Calon Bini"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5e7ac586e4b0261ea6b22157-1585110224096_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "When The Weather Is Fine"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5c9b1a38e4b0d897abeae03d-1553668730414_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "iflix Quizzles Kids - Upin & Ipin Ready....Go!"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "The World Of Married"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5db29f20e4b03bc8d43964eb-1582787060554_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Kisah Tanah Jawa: Merapi"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Calon Bini"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5e7ac586e4b0261ea6b22157-1585110224096_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "When The Weather Is Fine"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5c9b1a38e4b0d897abeae03d-1553668730414_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "iflix Quizzles Kids - Upin & Ipin Ready....Go!"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "The World Of Married"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5db29f20e4b03bc8d43964eb-1582787060554_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Kisah Tanah Jawa: Merapi"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Calon Bini"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5e7ac586e4b0261ea6b22157-1585110224096_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "When The Weather Is Fine"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5c9b1a38e4b0d897abeae03d-1553668730414_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "iflix Quizzles Kids - Upin & Ipin Ready....Go!"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "The World Of Married"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5db29f20e4b03bc8d43964eb-1582787060554_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Kisah Tanah Jawa: Merapi"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Calon Bini"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5e7ac586e4b0261ea6b22157-1585110224096_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "When The Weather Is Fine"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5c9b1a38e4b0d897abeae03d-1553668730414_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "iflix Quizzles Kids - Upin & Ipin Ready....Go!"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "The World Of Married"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5db29f20e4b03bc8d43964eb-1582787060554_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Kisah Tanah Jawa: Merapi"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "Calon Bini"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5e7ac586e4b0261ea6b22157-1585110224096_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "When The Weather Is Fine"
        },
        {
            imgSrc: "https://iflix-images.akamaized.net/5c9b1a38e4b0d897abeae03d-1553668730414_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
            title: "iflix Quizzles Kids - Upin & Ipin Ready....Go!"
        }
    ]

    const special = {
        specialCategory: "L.A. Indie Movie",
        backgroundImg: "https://iflix-images.akamaized.net/5f128ed0e4b0fa7d6677d6b9_l_row-background?transform=true&v=1&resize[1]=1000",
        img: "https://iflix-images.akamaized.net/5f128ed0e4b0fa7d6677d6b9_l_logo_s_1500x0_t_png?resize[0]=500&png=&transform=true&v=1",
        movies: [
            {
                imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "The World Of Married"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5db29f20e4b03bc8d43964eb-1582787060554_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "Kisah Tanah Jawa: Merapi"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "Calon Bini"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5e7ac586e4b0261ea6b22157-1585110224096_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "When The Weather Is Fine"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5c9b1a38e4b0d897abeae03d-1553668730414_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "iflix Quizzles Kids - Upin & Ipin Ready....Go!"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "The World Of Married"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5db29f20e4b03bc8d43964eb-1582787060554_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "Kisah Tanah Jawa: Merapi"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5d1dbc15e4b070ca09ce6d9a-1581926728413_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "Calon Bini"
            },
            {
                imgSrc: "https://iflix-images.akamaized.net/5e7ac586e4b0261ea6b22157-1585110224096_s_300x450?transform=true&v=1&resize[0]=208&resize[1]=312",
                title: "When The Weather Is Fine"
            }
        ]
    }

    return (
        <div className={classes.Landing}>
            <Navbar imageSrc="https://iflix-images.akamaized.net/web/logos/visitor-light.svg?v=1#svgView(preserveAspectRatio(xMidYMid meet)"/>
            <MovieCategory />
            <MovieCollection collectionName="Recommended For You" movies={recommended}/>
            <SpecialCollection movies={special.movies} imgSrc={special.img} bgImg={special.backgroundImg} categoryName={special.specialCategory}/>
        </div>
    )
}

export default Landing