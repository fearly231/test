import React from 'react';
import avatar from '../img/avatar.jpg';
import './Avatar.css';

const Avatar = () => {
    return (
        <div className="avatarWrapper">
            <img src={avatar} alt="Michał Skorus" className="avatar" />
        </div>
    )
}

export default Avatar
