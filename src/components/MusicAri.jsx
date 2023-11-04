import React from 'react'
import ImagePosition from '../assets/images/artwork-440x440-10-compressed.jpg';

const MusicAri = () => {
    return (
        <div id='music' className='container-musicAri'>

            <h1>Music</h1>

            <div className='container-imgAri'>
                <img className='image-musicAri' src={ImagePosition} />
            </div>

            <div className='container-parrafoAri'>
                <h1>Latest relasease</h1>
                <h2>34+35 (Remix) ft. Doja cat & Megan thee Stallion</h2>
                <a href='https://arianagrande.lnk.to/3435Remix' target='_blank' className='btn-principal'>Stream / Download</a>
            </div>

            <div className='btn-musicAri'>
                <a className='link' href='https://www.arianagrande.com/music/'>View all releases</a>
            </div>
        </div>
    )
}

export default MusicAri
