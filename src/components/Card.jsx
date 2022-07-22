import React from "react";
import style from "./Card.module.css";

export default function Card (prop) {
    return (
        <div>
            <div className={style.contenedor}>
                {prop.front === 'cardA' ? 
                    <button className={style.cardA} 
                        onClick={() => prop.handleChange(prop)}>
                        <img src={"https://tcg.pokemon.com/assets/img/global/tcg-card-back.jpg"} alt="Card Back"/>
                    </button> :

                    <button className={style.cardB} 
                        onClick={() => prop.handleChange(prop)}>
                        <span>{prop.name}</span>                   
                        <img src={prop.image} alt="imagen pokemon"/>
                    </button>
                }
            </div>
        </div>
    )
}