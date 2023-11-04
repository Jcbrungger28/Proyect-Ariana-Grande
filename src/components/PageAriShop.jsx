import React from 'react'
import remixcd from '../assets/images/34_35remixcd1.png';
import imagenposition from '../assets/images/image-4-1.png';
import imageAG from '../assets/images/AGP1.png'

const PageAriShop = () => {
    return (
        <div id='shop' className='container-pageShop'>
            <div className='bg-image'>
                <div className='div-store'>
                    <h2 className='store-pageShop'>Store</h2>
                </div>
                <div className='images-container'>
                    <div className='first-article'>
                        <div className='btn-hover-box'>
                            <img className='image-cd' src={remixcd} />
                            <a href='https://shop.arianagrande.com/collections/positions-rewind/products/positions-deluxe-cd' target='_blank'>Buy now</a>
                        </div>
                        <h2>34+25 Remix cd single</h2>
                        <h3>$50.00</h3>
                    </div>
                    <div className='second-article'>
                        <div className='btn-hover-box'>
                            <img className='image-box' src={imagenposition} />
                            <a href='https://shop.arianagrande.com/collections/music/products/positions-deluxe-cd-box' target='_blank'>Buy now</a>
                        </div>
                        <h2>Position Deluxe Cd box</h2>
                        <h3>$50.00</h3>
                    </div>
                    <div className='three-article'>
                        <div className='btn-hover-box'>
                            <img className='image-shirt' src={imageAG} />
                            <a href='https://shop.arianagrande.com/collections/positions-rewind' target='_blank'>Buy now</a>
                        </div>
                        <h2>Position Photo t-shirt II</h2>
                        <h3>$35.00</h3>
                        <button target='_blank' href='' />
                    </div>
                </div>
                <div className='btn-shop'>
                    <a target='_blank' href='https://shop.arianagrande.com/'>Shop all</a>
                </div>
            </div>
        </div>
    )
}

export default PageAriShop
