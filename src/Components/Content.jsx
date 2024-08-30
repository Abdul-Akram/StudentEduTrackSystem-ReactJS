import React from 'react';
import Cards from '../attributes/Cards';
import { data } from '../Sources/Source';
import { Items as listitems } from '../Sources/Source2';
import Items from '../attributes/Items';
import "./Content.css"
const Content = () => {
    return (
        <div>
            <div className="top-header">
                {data.map((item, index) => (
                    <Cards
                        key={index}
                        logo={item.logo}
                        text={item.text}
                        count={item.count}
                        color={item.color}
                    />
                ))}
            </div>
            <div className="h2" style={{ textAlign: "center", fontSize: "1.5rem", padding: "2rem 0 0 0" }}>Menu</div>
            <div className="menu">
                {listitems.map((item, index) => (
                    <Items
                        key={index}
                        unique={item.id}
                        icon={item.icon}
                        title={item.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Content;
