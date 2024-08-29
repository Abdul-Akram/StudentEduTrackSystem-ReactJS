import React from 'react'

const Items = ({ icon, title }) => {
    return (
        <div>
            <i>{icon}</i>
            <h2>{title}</h2>
        </div>
    )
}

export default Items