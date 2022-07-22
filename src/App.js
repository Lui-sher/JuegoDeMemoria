import Card from "./components/Card";
import Cards from "./components/Cards"
import style from "./components/App.module.css";
import React, { useState } from "react";


export default function App() {
  
  const [datos, SetDatos] = useState([])
  const [datosDeJuego, SetDatosDeJuego] = useState({
      puntos: 0,
      intentos: 8,
  })
  const allPokemon = []
  const arrayRandom = []
  
  for(let i = 0; i < 6; i++){
    arrayRandom.push( Math.floor((Math.random() * (898)) + 1) )
  }

  
  async function CargarPokemon(){

    for(let i = 0; i < arrayRandom.length; i++){

      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${arrayRandom[i]}`);
      let pokemonInfo = await response.json();

      allPokemon.push({
        name: pokemonInfo.name,
        id: pokemonInfo.id,
        image: pokemonInfo.sprites.other.home.front_default,
        front: "cardA"
      })
      allPokemon.push({
        name: pokemonInfo.name,
        id: pokemonInfo.id,
        image: pokemonInfo.sprites.other.home.front_default,
        front: "cardA"
      })
    }
  
    allPokemon.sort(()=> Math.random() - 0.5)

    SetDatosDeJuego({
      puntos:0,
      intentos: 8,
    })

    SetDatos(allPokemon)
  }

  return (
    <div className={style.global}>
          <h3>JUEGO DE MEMORIA</h3>
          <hr className={style.barraH}/>
          <div className={style.general}>
              <div className={style.cardComponent}>
                  <h3> Carta de Muestra </h3>
                  <div className={style.contenedorCard}>
                      <Card
                      front = {"cardA"}
                      handleChange = {()=>alert("Esta Card es de prueba")}
                      />
                    
                      <Card 
                        name={"ARCEUS"}
                        image={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/493.png"}
                        handleChange = {()=>alert("Esta Card es de prueba")}
                        front ={"cardB"}
                      />

                  </div>
                  <button className={style.boton} onClick={()=>{CargarPokemon()}}>Iniciar Juego</button>
              </div>
              <hr className={style.barraV}/>
              <div className={style.cardsComponent}>
                  <div className={style.cardsContenedor}>
                      <div className={style.contenedorCard}>
                          <Cards allPokemon={datos} setDatosDeJuego={SetDatosDeJuego} datosDeJuego={datosDeJuego}/>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  );
}
