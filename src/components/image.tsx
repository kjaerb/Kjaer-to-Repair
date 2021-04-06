import React from 'react';

interface ImageURL {
    src: string;
    alt: string;
}

const Img = (props:ImageURL) => {
    return (
        <img src={props.src} alt={props.alt}/>
    );
}

export default Img;