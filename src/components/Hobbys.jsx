import React from 'react'
import './Hobbys.css'

const Hobbys = (props) => {
    return (
        <article>
            <div className="article-title">
                <div className="article-name">{props.title}</div>
                <div className="line"/>
            </div>
            <div className="informations-right">
            {props.data.map((position,index,array)=>{
                return position + (index===array.length-1 ? "." : ", ");
            })}
            </div>
        </article>
    )
}

export default Hobbys
