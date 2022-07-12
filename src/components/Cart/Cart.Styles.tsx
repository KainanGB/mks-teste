import styled from "styled-components";
import * as pallete from "../../global/variables";

type ImgProps = {
  src: string;
};

type ToggleProps = {
  toggle: boolean;
};
type Instances = {
  secondary?: boolean;
};

export const AsideDiv = styled.aside<ToggleProps>`
  display: ${(props) => (props.toggle ? "flex" : "none")};

  flex-direction: column;
  position: absolute;
  width: 25rem;
  right: 0;
  height: 100%;
  background-color: ${pallete.primaryClrBlue};
`;
export const SideNav = styled.nav`
  flex-direction: column;
  display: flex;
  padding: 2em 3em;
  padding-bottom: 0;
  height: 100%;
`;
export const SidedDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SideTitle = styled.h1`
  font-size: 1.6875rem;
  color: ${pallete.primaryClrWhite};
`;
export const AsideTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  color: ${pallete.primaryClrWhite};
`;
export const AsideTitle = styled.h1<Instances>``;

export const SideCloseButton = styled.button`
  background: black;
  border-radius: 100%;
  border: none;
  padding: 0.75em;
  width: 2.3rem;
  cursor: pointer;
`;
export const AsideCheckOutBtn = styled.button`
  background-color: black;
  padding: 1em;
  width: 100%;
  cursor: pointer;
`;

export const Cards = styled.div`
  flex: 1;
  height: 100%;
  margin-top: 2em;
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5em 1em;
  border-radius: 10px;
  background-color: ${pallete.primaryClrWhite};

  button {
    color: ${pallete.textColor};
    margin: 0 0.2em;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.2em;
  }
`;
export const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${pallete.borderColor};
  border-radius: 3px;
  margin-right: 0.5rem;

  width: 5rem;
`;

export const RemoveFromCartBtn = styled.button``;
export const CardImage = styled.img<ImgProps>`
  width: 3.5rem;
`;
export const CardTitle = styled.p`
  font-size: 13px;
  margin: 0 0.5em;
`;
export const CardPrice = styled.h3``;

export const CardPlusBtn = styled.button``;
export const CardMinusBtn = styled.button``;
export const CardQuantity = styled.small``;
