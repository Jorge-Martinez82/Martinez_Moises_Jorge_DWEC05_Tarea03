import Article from "./Article.jsx";
import data from "../data.js";
import {useState} from "react";


const Section = () => {

    const [escena, setEscena] = useState(data[0]);
    return (
        <>
            <main>
                <section>
                    <div className="title">
                        <h2>slider DWEC</h2>
                        <div className="underline"></div>
                    </div>
                        <Article
                            key={escena.id} // Es importante proporcionar una clave única para cada componente en un bucle
                            img={escena.img}
                            src={escena.src}
                            categoria={escena.categoria}
                            clase="activeSlide"
                        />
                </section>
            </main>
        </>
    )
}

export default Section;