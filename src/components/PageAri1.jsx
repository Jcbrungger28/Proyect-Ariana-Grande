import React from 'react'
import ytImage from '../assets/images/ytabc.jpg';
import ytImageText from '../assets/images/textlockAri.png'

const PageAri1 = () => {
    return (
        <div id='inicio' className='container-principal'>
            <div className='images'>
                <div className='div-images'>
                    <h2>
                        <img className='image-yt-text' src={ytImageText} />
                    </h2>
                    <div className='btn-principal-div'>
                        <a href='https://arianagrande.lnk.to/yourstruly10yr' target='_blank' className='btn-principal'>Stream / Download</a>
                    </div>
                </div>
                <img className='image-yt-album' src={ytImage} />
            </div>
        </div>
    )
}

export default PageAri1
