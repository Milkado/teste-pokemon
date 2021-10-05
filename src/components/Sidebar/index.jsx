import React from "react";

import Button from "components/Button";

import iconPlus from "assets/images/plus.png";

import * as S from "./styled";

const Sidebar = ({ pokemons = [], modalOpen }) => (
  <S.SideBarWrapper>
    {console.log('aqui')}
    {console.log(pokemons)}

    {pokemons?.map((pokemon, index) =>(
        <S.SideBarList>
          <S.SideBarItem pokemon={true} onClick={() => modalOpen(index)}>
            <img src={pokemon.sprites.front_default} alt="?" />
          </S.SideBarItem>
      </S.SideBarList>
    ))}
    {pokemons.length === 6 ? null : <S.SideBarList>
          <S.SideBarItem>
              ?
          </S.SideBarItem>
      </S.SideBarList>}
    {pokemons.length === 6 ? null : <Button icon={iconPlus} />}

  </S.SideBarWrapper>
);

export default Sidebar;
