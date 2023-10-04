import React from 'react'
import './Title.css'

const Title = (props) => {
    return (
        <div className="title">
           <div className="name">{props.data.name}</div>
           <div className="subtitle">{props.data.position}</div>
        </div>
    )
}

export default Title
