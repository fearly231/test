import React from 'react'
import './SidebarTitle.css'

const SidebarTitle = (props) => {
    return (
        <div className="sidebar-title">
            {props.title}
        </div>
    )
}

export default SidebarTitle
