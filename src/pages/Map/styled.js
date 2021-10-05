import styled from "styled-components";

import img from "assets/images/pageBackground.png";

export const MapWrapper = styled.div`
  position: relative;
  background-image: url(${img});
  background-color: #5dae12;
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`

`

export const Tooltip = styled.img`
  display: none;
  bottom: 0;
  left: 0;
  right: 0;
`

export const TooltipSearching = styled.img`
  display: block;
  bottom: 0;
  left: 0;
  right: 0;
`

export const AshDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    ${Tooltip} {
      display: inline-block;
    }
  }
`

export const ButtonAsh = styled.button`
  background: transparent;
  border: 0;
`




