import React from 'react';
import './SidebarOption.css';

function SidebarOption({title, Icon}) {
    return (
        <div className="sidebarOption">
            {/* if icon is present then render it*/}
            {Icon && <Icon className="sidebarOption_icon"/>}

            {/* if icon is present then display as <h4> otherwise display as <p> */}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption
