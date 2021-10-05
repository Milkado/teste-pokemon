import React from "react";

import * as S from "./styled";
import logo from "assets/images/pokemonLogo.png";
import Button from "components/Button";
import { useHistory } from "react-router-dom";

function HomePage(){
  const history = useHistory();

  const routeChange = () =>{
    let path = `map`;
    history.push(path);
  }
  return (
    <S.HomeWrapper>
      <S.ColumnDiv>
        <S.Logo src={logo} />
        <Button text="START" onClick={routeChange} />
      </S.ColumnDiv>
  </S.HomeWrapper>
  )
};

export default HomePage;
