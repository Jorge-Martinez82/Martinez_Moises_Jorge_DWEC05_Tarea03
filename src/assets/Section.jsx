import Articles from "./Articles.jsx"; // importamos el componente Articles

// en este caso simplemente renderizamos el componente Article
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