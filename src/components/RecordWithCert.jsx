import React from 'react'
import './RecordWithCert.css'
import cert from '../img/assets/odznakaszara.png'

const RecordWithCert = (props) => {
    return (
        <div className="record-pi">
            <img src={cert} alt="icon" className="order"/>
            <div className="record-cert">{props.data.certificate}</div>
        </div>
    )
}

export default RecordWithCert
