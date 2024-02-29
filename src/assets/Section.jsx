import Article from "./Article.jsx";
import data from "../data.js";
import {useState} from "react";


const Section = () => {

    let [clase, setClase] = useState("activeSlide");

    function clases() {
        setClase( "nextSlide");
    }

    setInterval(clases, 2000)
    return (
        <>
            <main>
                <section>
                    <div className="title">
                        <h2>slider DWEC</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="section-center">
                        {data.map(escena => (
                            <Article
                                key={escena.id} // Es importante proporcionar una clave única para cada componente en un bucle
                                img={escena.img}
                                src={escena.src}
                                categoria={escena.categoria}
                                clase={clase}
                            />
                        ))}
                    </div>

                </section>
            </main>
        </>
    )
}

export default Section;