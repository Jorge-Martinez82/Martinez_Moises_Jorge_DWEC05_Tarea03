import React from 'react';

const Article = (props) => {
    return (
        <article className={props.clase}>
            <img src={props.src} alt={props.img} className="person-img" />
                <h4>{props.img}</h4>
                <p className="title">{props.categoria}</p>
        </article>
)};

export default Article;