import React, { useState } from 'react';
import data from '../data';

const Articles = () => {
    const [classes, setClasses] = useState(data.map(() => "nextSlide"));
    const [currentIndex, setCurrentIndex] = useState(0);

    const toActiveSlide = (index) => {
        setTimeout(() => {
            setClasses(prevClasses => {
                const newClasses = [...prevClasses]
                newClasses[index] = "activeSlide";
                return newClasses;
            });
            toLastSlide(index);
        }, 2000);
    };


    const toLastSlide = (index) => {
        setTimeout(() => {
            setClasses(prevClasses => {
                const newClasses = [...prevClasses]
                newClasses[index] = "lastSlide";
                return newClasses;
            });
            if (index < data.length - 1) {
                setCurrentIndex(prevIndex => prevIndex + 1);
                toActiveSlide(index + 1);
            }
        }, 2000);
    };

    if (currentIndex === 0){
        toActiveSlide(currentIndex);
    }


    return (
        <>
            {data.map((escena, index) => (
                <article key={escena.id} className={classes[index]}>
                    <img src={escena.src} alt={escena.img} className="person-img" />
                    <h4>{escena.img}</h4>
                    <p className="title">{escena.categoria}</p>
                </article>
            ))}
        </>
    );
};

export default Articles;
