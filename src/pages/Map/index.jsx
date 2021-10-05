import React, { useState, useEffect } from "react";

import * as S from "./styled";
import ashBase from "assets/images/ashFront.png";
import searchTooltip from "assets/images/searchTooltip.png";
import ashRight from "assets/images/ashRightLeg.png";
import ashLeft from "assets/images/ashLeftLeg.png";
import searching from "assets/images/searchingTooltip.png";

import Button from "components/Button";
import PokemonInfo from "components/PokemonInfo";

import api from "service/api";
import Sidebar from "components/Sidebar";
import { setIn } from "formik";

function MapPage(){
  const [pokemons, setPokemon] = useState([]);
  const [modalInfo, setModalInfo] = useState(false);
  const [modalNewPokemon, setModalNewPokemon] = useState(false);
  const [newPokemon, setNewPokemon] = useState(false);
  const [poke, setPoke] = useState();
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const images = [
    ashLeft,
    ashRight
  ]
  const localData = JSON.parse(localStorage.getItem('pokemons'));

  const setIndex = (index) => {
    if (index === 1) {
      setCurrentIndex(0);
    }
    if (index === 0) {
      setCurrentIndex(1);
    }
  }
  const randomPokemon = async() => {
    setLoading(true)

    setTimeout(
      () => setLoading(false), 2000
    )

    if (pokemons.length <= 5) {
      let number = Math.floor(Math.random() * (807 - 1) + 1);

      await api.get(`/pokemon/${number}`).then(
          response => setPokemon(prevPokemons => [...prevPokemons, response.data])
      );

      setNewPokemon(true)
      setModalNewPokemon(true)
    } else {
      console.log('Máximo de pokemons atingido')
    }
  }

  localStorage.setItem('pokemons', JSON.stringify(pokemons))

  useState(() => {
    if(localData) {
      setPokemon(localData);
    }
  })


  const openModal = (pokemon) => {
    setModalInfo(true);
    setPoke(pokemon);
  }

  const closeModal = () => {
    setModalInfo(false);
    setModalNewPokemon(false)
  }

  const liberarPoke = () => {
    pokemons.splice(poke, 1);
    localStorage.setItem('pokemons', JSON.stringify(pokemons))
    setModalInfo(false);
  }

  const editAction = () => {
    setEdit(!edit)
  }

  const editName = (name) => {

    let items = [...pokemons];

    let item = {...items[poke]}

    item.name = name;

    items[poke] = item

    setPokemon(items)

    localStorage.setItem('pokemons', JSON.stringify(pokemons))

    setEdit(!edit)
  }


  return(
    <S.MapWrapper className="map">

    <Sidebar pokemons={pokemons} modalOpen={openModal} />

      <S.AshDiv>
        {loading ? (
          <>
            <S.TooltipSearching src={searching} alt="loading" />
            <S.Image src={images[currentIndex]} />
          </>
        ) : (
          <>
          <S.Tooltip src={searchTooltip} className="tooltip-search" alt="search" />
          <S.ButtonAsh onClick={randomPokemon}>
            <S.Image src={ashBase} />
          </S.ButtonAsh>
          </>
        )}

      </S.AshDiv>

      {modalNewPokemon && newPokemon ? (
        <PokemonInfo pokemon={pokemons[pokemons.length - 1]} newPokemon={newPokemon} closeAction={closeModal}  />
      ): null}

      {modalInfo ? (
        <PokemonInfo pokemon={pokemons[poke]} closeAction={closeModal} liberarAction={liberarPoke} edit={edit} editAction={editAction} editName={editName} />
      ): null}
    </S.MapWrapper>
    )
  }
;

export default MapPage;
