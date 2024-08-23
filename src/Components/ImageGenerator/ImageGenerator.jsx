import React from 'react'
import './ImageGenerator.css'
import default_img from '../Assets/default-img.jpg'

const ImageGenerator = () => {
    return (
        <div className='ai-image-generator'>
            <div className="header">Ai image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image"><img src={default_img} alt="" /></div>
            </div>
            <div className="search-box">
                <input type="text"  className='search-input' placeholder='Describe what you want to see'/>
                <div className="generate-btn">Generate</div>
            </div>
        </div>
    )
}

export default ImageGenerator
