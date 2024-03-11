import React, { useState } from 'react'; // importamos el hook useState
import data from '../data'; // importamos data.js

const Articles = () => {
    // crearemos 2 hooks useState, uno sera un array de longitud igual a los articulos de data
    // que contendra una clase para cada articulo (inicialmente todas seran next) y el otro lo
    // utilizare para gestionar los indices del array
    const [clases, setClases] = useState(Array(data.length).fill("nextSlide"));
    const [indiceActual, setIndiceActual] = useState(0);

    // funcion que recibe un index y ejecuta un setTimeout para cambiar la clase a active
    const toActiveSlide = (index) => {
        setTimeout(() => {
            // llamara a setClases para cambiar el estado y el nuevo sera una copia del actual (para no mutarlo)
            // en la copia cambiaremos la clase cuyo indice pasamos a active y devolveremos el array como valor para setClases
            setClases(clases => {
                const copiaClases = [...clases]
                copiaClases[index] = "activeSlide";
                return copiaClases;
            });
            toLastSlide(index); // llamaremos la metodo que cambia la clase a last
        }, 1000);
    };

    // funcion que recibe un index y ejecuta un setTimeout para cambiar la clase a last
    const toLastSlide = (index) => {
        setTimeout(() => {
            // llamara a setClases para cambiar el estado y el nuevo sera una copia del actual (para no mutarlo)
            // en la copia cambiaremos la clase cuyo indice pasamos a last y devolveremos el array como valor para setClases
            setClases(prevClasses => {
                const arrayClases = [...prevClasses]
                arrayClases[index] = "lastSlide";
                return arrayClases;
            });
            // comprobamos si estamos al final de la lista de articles y si no
            if (index < data.length - 1) {
                setIndiceActual(indiceActual + 1); // cambiamos el estado del hook indice
                toActiveSlide(index + 1); // volvemos a la funcion active con el siguiente index
            }
        }, 1000);
    };

    // si el indice es 0 iniciamos la secuencia
    if (indiceActual === 0){
        toActiveSlide(indiceActual);
    }


    return (
        <>
            {data.map((escena, index) => (
                // renderizamos todos los articles con sus datos, la clase se cogera del array del useState
                <article key={escena.id} className={clases[index]}>
                    <img src={escena.src} alt={escena.img} className="person-img" />
                    <h4>{escena.img}</h4>
                    <p className="title">{escena.categoria}</p>
                </article>
            ))}
        </>
    );
};

export default Articles;
