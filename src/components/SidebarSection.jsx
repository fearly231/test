import React from 'react'
import SidebarTitle from './SidebarTitle.jsx'

const SidebarSection = (props) => {
    return (
        <div style={{ marginBottom: 5 }}>
            <SidebarTitle title={props.title} />
            {props.children}
        </div>
    )
}

export default SidebarSection
