import React from 'react'
import './RecordWithIcon.css';

const RecordWithIcon = (props) => {
    return (
        <div className="record-pi">
            <img src={props.path} alt="icon" className="icon"/>
            <div className="record-data">{props.data}</div>
        </div>
    )
}

export default RecordWithIcon
