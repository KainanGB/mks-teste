import styled from "styled-components";
import * as pallete from "../../global/variables";

type Props = {
  src: string;
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
`;
export const NavItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Image = styled.img<Props>`
  margin-right: 0.5em;
`;
