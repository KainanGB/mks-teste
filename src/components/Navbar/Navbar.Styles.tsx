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

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${pallete.primaryClrBlue};
  color: ${pallete.primaryClrWhite};

  padding: 0.5em 4em;
`;
export const Logo = styled.h1`
  letter-spacing: 2px;
  span {
    font-size: 12px;
    font-weight: normal;
  }
`;
export const NavItems = styled.ul`
  background-color: ${pallete.primaryClrWhite};
  padding: 0.5em 1em;
  border-radius: 5px;
  list-style: none;
  color: black;

  cursor: pointer;

  transition: background 1s;
  :hover {
    background: ${pallete.backgroundColor};
  }
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Image = styled.img<ImgProps>`
  margin-right: 0.5em;
`;
