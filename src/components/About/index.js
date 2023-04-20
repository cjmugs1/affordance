import React from 'react';

import selfie from '../../assets/images/selfie.jpg';

function AboutComponent () {

    return (
        <div className="about">
            <img src={selfie} style={{width:300, height:"auto"}}></img>
            <h1> Des-eloper..Dev-igner ? </h1>
            <p> I am a product designer and web-developer based in Fort Collins, CO. </p>
        </div>
    )
}

export default AboutComponent;