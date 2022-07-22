import Card from "./Card";
import React, { useState } from "react";
import style from "./Cards.module.css";

export default function Cards({allPokemon, setDatosDeJuego, datosDeJuego}){

    const [pokeDatos, setPokeDatos] = useState({
        pokemon: [],
        card: [],
    })


    function HandleChange ({posicion, id}) {
        if(datosDeJuego.intentos !== 0 && datosDeJuego.puntos !== 6){

            if(allPokemon[posicion].front === "cardB"){
            }

            if(pokeDatos.card.length === 0){//Está vacio? true
                allPokemon[posicion].front = "cardB"
                setPokeDatos({...pokeDatos, card: [...pokeDatos.card, posicion]})
            }

            if(pokeDatos.card.length === 1){
                allPokemon[posicion].front = "cardB"
                if(allPokemon[pokeDatos.card[0]].id === id){
                    setPokeDatos({...pokeDatos, card: []})
                    setDatosDeJuego({...datosDeJuego, puntos: (datosDeJuego.puntos+1)})
                    
                    if(datosDeJuego.puntos === 5){
                     alert("Ganaste el Juego")
                    }

                }else{
                    setPokeDatos({
                        ...pokeDatos, 
                        card: [...pokeDatos.card, posicion], 
                    })
                    setDatosDeJuego({
                        ...datosDeJuego,
                        intentos: (datosDeJuego.intentos - 1)
                    })
                }
            }

            if(pokeDatos.card.length === 2){
                allPokemon[posicion].front = "cardB"
                allPokemon[pokeDatos.card[0]].front = "cardA"
                allPokemon[pokeDatos.card[1]].front = "cardA"
                setPokeDatos({...pokeDatos, card:[posicion]})
            }
        } else {
            if(datosDeJuego.puntos === 6) alert("Ganaste")
            if(datosDeJuego.intentos === 0) alert("fin del juego")
        }
    }

    let i = 0
    const resultado = allPokemon.map(elemento => {
        return (
                <Card 
                    key = {i++}
                    posicion = {i}
                    name = {elemento.name} 
                    image = {elemento.image}
                    id = {elemento.id} 
                    handleChange = {HandleChange}
                    front = {elemento.front}
                    />
    )})

    return (
        <div className={style.componenteCards}>
            <h3>{datosDeJuego.intentos} INTENTOS RESTANTES</h3>
            <h3>PUNTOS GANADOS {datosDeJuego.puntos}</h3>
            <div className={style.cards}>
                {resultado}
            </div>
        </div>
    )
}