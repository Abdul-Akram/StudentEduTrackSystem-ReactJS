import React from 'react';
import "./Card.css"
const Cards = ({ logo, text, count, color }) => {
    return (
        <div className='card' style={{ backgroundColor: color }}>
            <div className="card-con ">
                <i className={logo}></i>
                <p>{count}</p>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default Cards;
