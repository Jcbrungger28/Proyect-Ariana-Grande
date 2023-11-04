import React from 'react'
import { faInstagram, faFacebookF, faYoutube, faApple, faSpotify, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FooterAri = () => {
    return (
        <footer className='footer-Ari'>
            <div className='icons-social icons-footer'>
                <a href='https://www.instagram.com/arianagrande/' target='blank_'><FontAwesomeIcon icon={faInstagram} style={{ color: "#fff" }} /></a>
                <a href='https://www.facebook.com/arianagrande' target='blank_'><FontAwesomeIcon icon={faFacebookF} style={{ color: "fff" }} /></a>
                <a href='https://music.apple.com/us/artist/ariana-grande/412778295' target='blank_'><FontAwesomeIcon icon={faApple} style={{ color: "fff" }} /></a>
                <a href='https://open.spotify.com/intl-es/artist/66CXWjxzNUsdJxJ2JdwvnR' target='blank_'><FontAwesomeIcon icon={faSpotify} style={{ color: "#fff" }} /></a>
                <a href='https://www.youtube.com/channel/UC9CoOnJkIBMdeijd9qYoT_g' target='blank_'><FontAwesomeIcon icon={faYoutube} style={{ color: "#fff" }} /></a>
                <a href='https://www.tiktok.com/@arianagrande?lang=en' target='blank_'><FontAwesomeIcon icon={faTiktok} style={{ color: "#fff" }} /></a>
            </div>
            <div className='enlaces-footer'>
                <a href='https://www.republicrecords.com/'>© Republic Records</a>
                <a href='https://privacy.umusic.com/terms/'>Terms</a>
                <a href='https://privacy.umusic.com/'>Privacy</a>
                <a>cookie choices</a>
                <p>IF YOU ARE USING A SCREEN READER AND ARE HAVING PROBLEMS USING THIS WEBSITE, PLEASE CALL 866-682-4413 FOR ASSISTANCE.</p>
            </div>
        </footer>
    )
}

export default FooterAri
