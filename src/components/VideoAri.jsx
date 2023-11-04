import React from 'react'
import meganImage from '../assets/images/sddefault.jpg'

const VideoAri = () => {
    return (
        <section id='video' className='container-videoAri'>

            <div className='lt-videoAri btn-hover-box'>
                <h1>Videos</h1>
                <a href='https://www.youtube.com/watch?v=ssq6X6alZ3w&ab_channel=ArianaGrandeVevo' target='_blank'>watch</a>
            </div>

            <div className='description-video'>
                <h2>Latest Video</h2>
                <h3>Ariana Grande - 34+35 (Remix) ft. Doja Cat, Meghan Thee Stallion</h3>
            </div>

            <div className='btn-videoAri'>
                <a className='enlace-video' target='blank_' href='https://www.arianagrande.com/videos/?all'>View all releases</a>
            </div>

        </section>
    )
}

export default VideoAri
