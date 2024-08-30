import React from 'react'
import './Item.css'

const Items = ({ icon, title, unique }) => {
    return (
        <div className={`per-item i${unique}`} >
            <i className={icon}></i>
            <h2>{title}</h2>
        </div>
    )
}

export default Items