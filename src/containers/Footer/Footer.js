import React from 'react'
import classes from './Footer.module.css'
import { faFacebookSquare, faInstagram, faYoutube, faTwitter, faFacebookMessenger } from "@fortawesome/free-brands-svg-icons"
import IconButton from '../../components/IconButton/IconButton'
import cx from 'classnames'

const Footer = () => {
    return (
        <footer className={classes.Footer}> 
            <div className={classes.Inner__container}>
                <div className={classes.Logo__container}>
                    <img src="https://iflix-images.akamaized.net/web/logos/logo-tagline.svg"/>
                </div>
                <div className={classes.Footer__flex}>
                    <div className={classes.Footer__content}>
                        <p>More IFLIX</p>
                        <p>Blog</p>
                        <p>Media</p>
                        <p>About Us</p>
                        <p>Career</p>
                    </div> 
                    <div className={classes.Footer__content}>
                        <p>Support</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                    </div>
                    <div className={classes.Footer__content}>
                        <p>Friends</p>
                        <p>Partners</p>  
                    </div>
                    <div className={classes.Footer__content}>
                        <p>Get Your APP</p>
                        <p>Android</p>
                        <p>iOS</p>
                    </div>
                </div>
                <div className={classes.Footer__social}>
                    <div className={cx(classes.Footer__orb, classes.Footer__instagram)}>
                        <div className={classes.Footer__icon}>
                            <IconButton icon={faInstagram}/>
                        </div>
                    </div>
                    <div className={cx(classes.Footer__orb, classes.Footer__twitter)}>
                        <div className={classes.Footer__icon}>
                            <IconButton icon={faTwitter}/>
                        </div>
                    </div>
                    <div className={cx(classes.Footer__orb, classes.Footer__facebook)}>
                        <div className={classes.Footer__icon}>
                            <IconButton icon={faFacebookSquare}/>
                        </div>
                    </div>
                    <div className={cx(classes.Footer__orb, classes.Footer__messenger)}>
                        <div className={classes.Footer__icon}>
                            <IconButton icon={faFacebookMessenger}/>
                        </div>
                    </div>
                    <div className={cx(classes.Footer__orb, classes.Footer__yt)}>
                        <div className={classes.Footer__icon}>
                            <IconButton icon={faYoutube}/>
                        </div>
                    </div>
                </div>
                <div className={classes.Footer__copy}>
                    <p>No copyright bruv just cloning here :3</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer