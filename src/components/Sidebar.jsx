import React from 'react';
import './Sidebar.css';
import Avatar from './Avatar.jsx';

const Sidebar = (props) => {
    return (
        <section className="sidebar">
            <div className="wrapper">
                {props.firstPage ? <Avatar/> : ""}
                {props.children}
            </div>
        </section>
    )
}

export default Sidebar;
