import React from 'react'
import './RecordWithSkill.css';
import ProgressBar from './ProgressBar';

const RecordWithSkill = (props) => {
    var section = props.title;
    var dataName = "";

    if(section==="UMIEJĘTNOŚCI"){
        dataName = "skill";
    } else if (section === "CERTYFIKATY"){
        dataName = "certificate";
    } else {
        dataName = "language";
    }

    return (
        <div className="record">
            <div className="left-align-record">{props.data[dataName]}</div>
            {props.data.progressBar ? <ProgressBar data={props.data.progressBar}/> : ""}
        </div>
    )
}

export default RecordWithSkill
