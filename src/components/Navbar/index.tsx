import * as S from "./Navbar.Styles";
import cart from "../../assets/cart.svg";
import { useState } from "react";

import { Cart } from "../Cart";

export const Navbar = () => {
  const [IsOpen, setIsOpen] = useState(false);

  const handleSideNavBar = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <>
      <S.Navbar>
        <S.Logo>
          MKS
          <span>Sistemas</span>
        </S.Logo>
        <S.NavItems onClick={() => handleSideNavBar()}>
          <S.NavItem>
            <S.Image src={cart} />0
          </S.NavItem>
        </S.NavItems>
      </S.Navbar>
      <Cart handleSideNavBar={handleSideNavBar} IsOpen={IsOpen} />
    </>
  );
};
