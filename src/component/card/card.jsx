import React from "react";
import './card.css'


const card = ({image,name,h1,p,color,border}) =>{
    return(
        <>
            <div className={`card__header`}>
                <div className="card__header-head">
                    <img src={image} alt={name} style={{ border: border?'3px solid hsl(263, 70%, 71%)':''}} />
                    <div className="card__header-head-name">
                        <p id="name" style={{ color: color === 'white' ? 'hsl(0, 0%, 100%)' : '' }}>{name}</p>
                        <p className={` tag ${color}`} style={{ color: color === 'white' ? 'hsl(0, 0%, 100%, 0.5)' : '' }}>Verified Graduate</p>
                    </div>
                </div>
                
                <h2 style={{ color: color === 'white' ? 'hsl(0, 0%, 100%)' : '' }}>{h1}</h2>
                <p className={`paragraph ${color}`} style={{ color: color === 'white' ? 'hsl(0, 0%, 100%, 0.7)' : '' }}>{p}</p>
            </div>
        </>
    )
}

export default card;