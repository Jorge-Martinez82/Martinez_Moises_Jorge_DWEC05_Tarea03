import React, {useState} from 'react';
import data from '../data';

const Articles = () => {

    const [clase, setClase] = useState("nextSlide");

    setTimeout(() => {
        setClase("activeSlide");

        // Cambiar a lastSlide después de otros 2 segundos adicionales
    }, 2000);

    return (
        <>
            {data.map((escena) => (
                <article key={escena.id} className={clase}>
                    <img src={escena.src} alt={escena.img} className="person-img"/>
                    <h4>{escena.img}</h4>
                    <p className="title">{escena.categoria}</p>
                </article>
            ))}
        </>
    )
};

export default Articles;