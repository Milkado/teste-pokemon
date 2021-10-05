import styled from "styled-components";

export const HomeWrapper = styled.div`
    background: linear-gradient(to right, rgba(0,214,143,1), rgba(0,214,143,0.48));
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
      width: 120px;
    }
`

export const Logo = styled.img`
  height: 100px;
  object-fit: contain;
  margin-bottom: 30px;
`

export const ButtonWrapper = styled.div`
  width: 70%;
`
