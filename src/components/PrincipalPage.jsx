import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube, faApple, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';
import imagenLogo from '../assets/images/AG-logo-black.png'
import styled from 'styled-components';
import BurgerButton from './BurgerButton';


const NavBar = () => {
    const [click, setClick] = useState(false);
    const handleClicked = () => {
        //Cuando esta en true pasa a false y viseversa 
        setClick(!click)
    }

    return (
        <header>
            <div className='navbar-ari'>
                <NavContainer className='red-social'>
                    <ul className={`lista-link ${click ? 'active' : ''}`}>
                        <li>
                            <a className='link' href='#music'>MUSIC</a>
                        </li>
                        <li>
                            <a className='link' href='#video'>VIDEOS</a>
                        </li>
                        <li>
                            <a className='link' target='blank_' href='https://shop.arianagrande.com/'>SHOP</a>
                        </li>
                        <li>
                            <a className='link' href='#subscribe'>SUBSCRIBE</a>
                        </li>
                    </ul>
                    <div className='imgPrincipal '>
                        <a href='#inicio'><img src={imagenLogo} className='imageLogo' /></a>
                    </div>
                    <div className={`icons-social ${click ? 'active' : ''}`}>
                        <a href='https://www.instagram.com/arianagrande/' target='blank_'><FontAwesomeIcon icon={faInstagram} style={{ color: "#000" }} /></a>
                        <a href='https://www.facebook.com/arianagrande' target='blank_'><FontAwesomeIcon icon={faFacebookF} style={{ color: "#000" }} /></a>
                        <a href='https://music.apple.com/us/artist/ariana-grande/412778295' target='blank_'><FontAwesomeIcon icon={faApple} style={{ color: "#000" }} /></a>
                        <a href='https://open.spotify.com/intl-es/artist/66CXWjxzNUsdJxJ2JdwvnR' target='blank_'><FontAwesomeIcon icon={faSpotify} style={{ color: "#000" }} /></a>
                        <a href='https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g' target='blank_'><FontAwesomeIcon icon={faYoutube} style={{ color: "#000" }} /></a>
                        <a href='https://www.tiktok.com/@arianagrande?lang=en' target='blank_'><FontAwesomeIcon icon={faTiktok} style={{ color: "#000" }} /></a>
                    </div>
                    <div className='burger'>
                        <BurgerButton clicked={click} handleClicked={handleClicked} />
                    </div>
                </NavContainer>
            </div>
        </header >

    )
}

export default NavBar;

const NavContainer = styled.nav`

@media(max-width: 768px){
                        width: 625px;
                    height: 60px;
                    overflow: auto;
                    // background: transparent;

                    ul{
                        margin-top: 50px;
                        display: none;
                    }
                    li{
                        margin-bottom: 10px;
                        margin-left: 15px;
                        background-color: transparents;
                        height: 55px;
                        padding-right: -30px;
                        padding-left: -30px;
                        border: 2px solid white;
                        border-radius: 50px;
                    }
                    .link{
                        width: 200px;
                        height: 60px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: black;
                        text-decoration: none;
                        padding-left: 10px;
                    }
                    .icons-social{
                        display: none;
                        background: transpararent;
                        border: 2px solid white;
                        border-radius: 50px;
                        }
                    .icons-social a{
                       margin-right: 5px;
                       margin-top: -15px;
    }
                    .imageLogo{
                        margin-left: 40px;
                        margin-top: -10px;
    }
                    .icons-social.active {
                        width: 50%;
                        height: 58px;
                    display: flex;
                    position: absolute;
                    margin-left: auto;
                    margin-right: 150px;
                    margin-top: 20px;
                    top: 50%;
                    left: 0;
                    right: 0;
                    text-align: center
                    a{
                        display: block;
                       font-size: 2rem;
    }
}

                    .lista-link.active{
                        width: 260px;
                        padding: 30px;
                        display: block;
                        margin-left: auto;
                        position: absolute;
                        margin-right: auto;
                        top: 30%;
                        left: 0;
                        right: 0;
                       text-align: center;
}

}

                    display: flex;
                    width: 200px
                    flex-wrap: wrap;
                    justify-content: space-between;
                    align-content: center;
                    overflow: auto;

                    @media(min-width: 768px){
                        .burger{
                            margin-right: 30px;
                            padding-top: 10px
                    }
}

                    .burger{
                        @media(min-width: 768px){
                        display: none;
    }
}

                    .icons-social a{
                        display: flex;
                    justify-content: flex-end;
                    padding-right: 15px;
                    margin-left: 10px;
                    padding-top: 30px;
                    padding-bottom: 10px;
}

                    `
