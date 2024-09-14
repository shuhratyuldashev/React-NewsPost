import { useEffect, useState } from "react";
import React from 'react';

interface ImgProps {
    src: string;
    alt: string;
}

const Img_Post: React.FC<ImgProps> = ({ src, alt }) => {
    const [imgLoad, setImgLoad] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setImgLoad(true);
        };

        img.onerror = () => {
            setImgLoad(false);
        };
    }, [src]);

    return (
        <img src={src} alt={alt} />
    );
};

export default Img_Post;