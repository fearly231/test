import React from 'react';
import ArticlePosition from './ArticlePosition.jsx';
import './ContentPart.css'

const ContentPart = (props) => {
    return (
        <article>
            <div className="article-title">
                <div className="article-name">{props.title}</div>
                <div className="line"/>
            </div>
            {props.data.map(position=>
                <ArticlePosition data={position} title={props.title}/>
            )}
        </article>
    )
}

export default ContentPart
