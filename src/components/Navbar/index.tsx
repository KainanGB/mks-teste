import * as S from "./Navbar.Styles";
import cart from "../../assets/cart.svg";

export const Navbar = () => {
  return (
    <S.Navbar>
      <S.Logo>
        MKS
        <span>Sistemas</span>
      </S.Logo>
      <S.NavItems>
        <S.NavItem>
          <S.Image src={cart} />0
        </S.NavItem>
      </S.NavItems>
    </S.Navbar>
  );
};
