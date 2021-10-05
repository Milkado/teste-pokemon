import React from "react";
import * as S from "./styled"

import pokeball from "assets/images/pokeball.png"
import close from "assets/images/close.png";
import editIcon from "assets/images/editIcon.png";
import checkIcon from "assets/images/checkIcon.png";
import shield from "assets/images/shield.png";
import sword from "assets/images/sword.png";
import speed from "assets/images/speed.png";
import Button from "components/Button";

import { Form, Formik } from "formik";

export default function PokemonInfo({
  pokemon,
  newPokemon,
  closeAction,
  liberarAction,
  edit,
  editName,
  editAction
}) {
  const convert = (value) => {
    let data = value / 10;

    return data;
  }

  const arrayTypes =
   [ {
      "id": 1,
      "type": "fighting",
      "name": "lutador",
      "color": "#852816"
    },
    {
      "id": 2,
      "type": "flying",
      "name": "voador",
      "color": "#8FA4FF"
    },
    {
      "id": 3,
      "type": "poison",
      "name": "venenoso",
      "color": "#924990"
    },
   {
      "id": 4,
      "type": "ground",
      "name": "terra",
      "color": "#C5A455"
    },
    {
      "id": 5,
      "type": "rock",
      "name": "pedra",
      "color": "#5E491C"
    },
    {
      "id": 6,
      "type": "bug",
      "name": "inseto",
      "color": "#87950C"
    },
    {
      "id": 7,
      "type": "ghost",
      "name": "fantasma",
      "color": "#6969AF"
    },
   {
      "id": 8,
      "type": "steel",
      "name": "metálico",
      "color": "#7F8488"
    },
    {
      "id": 9,
      "type": "fire",
      "name": "fogo",
      "color": "#CF1C03"
    },
    {
      "id": 10,
      "type": "water",
      "name": "água",
      "color": "#3B9BF1"
    },
    {
      "id": 11,
      "type": "grass",
      "name": "planta",
      "color": "#67AF32"
    },
    {
      "id": 12,
      "type": "electric",
      "name": "elétrico",
      "color": "#E08D00"
    },
    {
      "id": 13,
      "type": "ice",
      "name": "gelo",
      "color": "#84EDF8"
    },
    {
      "id": 14,
      "type": "dragon",
      "name": "dragão",
      "color": "#7361D1"
    },
    {
      "id": 14,
      "type": "dark",
      "name": "noturno",
      "color": "#413831"
    },
    {
      "id": 15,
      "type": "fairy",
      "name": "fada",
      "color": "#E29FE6"
    },
    {
      "id": 16,
      "type": "normal",
      "name": "normal",
      "color": "#C4C0B4"
    },
    {
      "id": 17,
      "type": "psychic",
      "name": "psiquico",
      "color": "#E24484"
    }
  ];

  console.log(pokemon);
  return (
    <S.WrapperDiv>
      <S.MainDiv>
        <S.CloseButton onClick={closeAction}>
          <img src={close} alt="X" />
        </S.CloseButton>
        <S.RoundSprite>
          <img src={pokemon.sprites.front_default} alt="sprite"/>
        </S.RoundSprite>
        <S.InfoDiv>
          <S.ColumnDiv>

        {edit ? (
                <Formik
                  initialValues={{ name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}}
                  validate={values => {
                    const errors = {};
                    if (!values.name) {
                      errors.name = 'Required';
                    }
                    return errors;
                  }}
                  onSubmit={(values => {
                    setTimeout(() => {
                      editName(values.name)
                    }, 400)
                  })}

                >
                  {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         /* and other goodies */
       }) => (
          <form onSubmit={handleSubmit}>
            <S.RowDiv>
              <input
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && errors.name}


                <S.ButtonForm type="submit">
                  <img src={checkIcon} alt="confirm" />
                </S.ButtonForm>
                <S.ButtonForm type="button" onClick={editAction}>
                  <img className="img-close" src={close} alt="X" />
                </S.ButtonForm>
              </S.RowDiv>
         </form>
       )}

        </Formik>) :
              (
              <S.RowDiv>
                <p style={{ marginTop: 70, fontSize: 15, fontWeight: "bold", textTransform: "uppercase" }}>{pokemon.name}</p>
                  {!newPokemon && (
                    <S.Edit onClick={editAction}>
                      <img style={{ marginTop: 70, marginLeft: 10 }} src={editIcon} alt="edit"  />
                    </S.Edit>
                  )}

              </S.RowDiv>
              )
        }



            <S.RowDiv>
              <S.ColumnDiv>
                <p style={{ fontSize: 14 }}>HP</p>
                <p>{pokemon.stats[0].base_stat}/{pokemon.stats[0].base_stat}</p>
              </S.ColumnDiv>
              <S.Teste />
              <S.ColumnDiv>
                <p style={{ fontSize: 14 }}>Altura</p>
                <p>{convert(pokemon.height)}m</p>
              </S.ColumnDiv>
              <S.Teste />
              <S.ColumnDiv>
                <p style={{ fontSize: 14 }}>Peso</p>
                <p>{convert(pokemon.weight)}kg</p>
              </S.ColumnDiv>
            </S.RowDiv>

            <h2><span>TIPO</span></h2>

            <S.RowDiv>
            {pokemon.types.map((type) => {
              let localized = arrayTypes.find(function(typePokemon, index) {
                if(typePokemon.type === type.type.name) {
                  return true;
                }
              })
              return (
                <S.Type color={localized.color}>
                  <p>{localized.name.toUpperCase()}</p>
                </S.Type>
              )
            })}
              </S.RowDiv>

              <br />
              <h2><span>HABILIDADES</span></h2>

              <S.RowDiv>
                {pokemon.abilities.map((ability, index) =>
                  <p
                  style={{ marginRight: 10, textTransform: "uppercase", fontSize: 15 }}>
                    {ability.ability.name.replace('-', ' ')}{(index === index + 1) ? null : ','}
                  </p>
                )}
              </S.RowDiv>

              <br />

              {!newPokemon ? (
                  <>
                  <h2><span>ESTATÍSTICAS</span></h2>

                    <S.ColumnDiv>
                      <S.RowDiv className="row-stat">
                        <S.RowDiv>
                            <img src={shield} alt="shield" />
                            <p className="stat">DEFESA</p>
                        </S.RowDiv>
                          <p className="stat">{pokemon.stats[2].base_stat}</p>
                      </S.RowDiv>
                      <S.RowDiv className="row-stat">
                        <S.RowDiv>
                           <img src={shield} alt="shield" />
                          <p className="stat">ATAQUE</p>
                        </S.RowDiv>
                          <p className="stat">{pokemon.stats[1].base_stat}</p>

                      </S.RowDiv>
                      <S.RowDiv className="row-stat">
                        <S.RowDiv>
                           <img src={shield} alt="shield" />
                          <p className="stat">DEFESA ESPECIAL</p>
                        </S.RowDiv>
                          <p className="stat">{pokemon.stats[4].base_stat}</p>
                      </S.RowDiv>
                      <S.RowDiv className="row-stat">
                        <S.RowDiv>
                           <img src={shield} alt="shield" />
                          <p className="stat">ATAQUE ESPECIAL</p>
                        </S.RowDiv>
                          <p className="stat">{pokemon.stats[3].base_stat}</p>
                      </S.RowDiv>
                      <S.RowDiv className="row-stat">
                        <S.RowDiv>
                           <img src={shield} alt="shield" />
                          <p className="stat">VELOCIDADE</p>
                        </S.RowDiv>
                          <p className="stat">{pokemon.stats[5].base_stat}</p>
                      </S.RowDiv>
                    </S.ColumnDiv>
                  </>
              ) : null}
              {newPokemon ? (
                <img src={pokeball} alt="pokeball" />
              ) :
                <Button onClick={liberarAction} text="LIBERAR POKEMON" />
              }


          </S.ColumnDiv>
        </S.InfoDiv>
      </S.MainDiv>
    </S.WrapperDiv>
  )
}
