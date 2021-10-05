import styled from "styled-components";

export const WrapperDiv = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  background-color: rgba(0,0,0,0.35);
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: 'Open Sans', sans-serif;
  }

  input {
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    border-radius: 5px;
    font-size: 20px;
    height: 30px;
    width: 150px;
  }

  form {
    margin-top: 70px;
  }

  h2 {
    width: 80%;
    text-align: center;
    border-bottom: 1px solid #8F9BB3;
    line-height: 0.1em;
    margin: 10px 0 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;

 }

 h2 span {
      font-weight: bold;
     background:#fff;
     padding:0 10px;
 }

 .stat {
   font-size: 14px;
 }

 .row-stat {
    justify-content: space-between;
    align-items: center;
    width: 300px;
 }

`
export const MainDiv = styled.div`
  border-radius: 10px;
  background: linear-gradient(to right, rgba(0,214,143,1), rgba(0,214,143,0.48));
  z-index: 10;
  width: 400px;
  position: absolute;
  height: auto;
`

export const RoundSprite = styled.div`
  border-radius: 70px;
  height: 140px;
  width: 140px;
  border: solid 5px;
  border-color: rgba(0,214,143,1);
  transform: translate(94%,50%);

  img {
    height: 125px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  z-index: 5;
`

export const InfoDiv = styled.div`
  border-radius: 10px;
  background: white;
  min-height: 400px;
  height: auto;
  padding-bottom: 20px;
`

export const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  hr {
    color: lightgrey;
    margin-top: 8px;
    margin-bottom: 10px;
    border-top: 1px #8F9BB3;
    width: 200px;
  }
`

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  p {

    font-weight: bold;
    font-size: 20px;
  }

  .vertical-line {
    border-left: 1px solid #8F9BB3;
    margin-right: 5px;
  }
`

export const Type = styled.div`
  background-color: ${props => props.color};
  height: 30px;
  width: 90px;
  border-radius: 20px;
  margin-right: 10px;

  p {
    color: white;
    font-weight: bold;
    font-size: 13px;
    text-align: center;
    line-height: 30px;
  }
`

export const CloseButton = styled.button`
  background: white;
  border: solid #8F9BB3;
  height: 50px;
  width: 50px;
  border-radius: 25px;
  margin-top: 5px;
  margin-right: 5px;
  float: right;
  cursor: pointer;

  img {
    height: 20px;
  }
`

export const ButtonForm = styled.button`
  background: #E4E9F2;
  border: solid 1px #C5CEE0;
  margin-left: 5px;
  border-radius: 5px;
  cursor: pointer;

  height: 30px;
  width: 30px;

  .img-close {
    height: 14px;
    width: 14px;
  }
`

export const Edit = styled.button`
  background: transparent;
  cursor: pointer;
  border: none;
`

export const Teste = styled.span`
  position: relative;
  width: 1px;
  height: 48px;
  margin: 5px;
  background: #8F9BB3;
`;
