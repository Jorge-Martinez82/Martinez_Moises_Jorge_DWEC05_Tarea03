import Articles from "./Articles.jsx";
import {useState} from "react";


const Section = () => {

    return (
        <>
            <main>
                <section>
                    <div className="title">
                        <h2>slider DWEC</h2>
                        <div className="underline"></div>
                    </div>
                    <div className="section-center">
                        <Articles />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Section;