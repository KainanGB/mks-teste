import * as S from "./Cart.Styles";

import img from "../../assets/apple-watch.png";

interface Props {
  handleSideNavBar: () => void;
  IsOpen: boolean;
}

export const Cart: React.FC<Props> = ({ handleSideNavBar, IsOpen }) => {
  return (
    <S.AsideDiv toggle={IsOpen}>
      <S.SideNav>
        <S.SidedDiv>
          <S.SideTitle>Carrinho de Compras</S.SideTitle>
          <S.SideCloseButton onClick={() => handleSideNavBar()}>
            X
          </S.SideCloseButton>
        </S.SidedDiv>

        <S.Cards>
          <S.Card>
            <S.CardImage src={img}></S.CardImage>
            <S.CardTitle>Apple Watch Series 4 GPS</S.CardTitle>
            <S.Divider>
              <S.CardMinusBtn> - </S.CardMinusBtn>
              <S.CardQuantity>1</S.CardQuantity>
              <S.CardPlusBtn> + </S.CardPlusBtn>
            </S.Divider>
            <S.CardPrice>R$399</S.CardPrice>
          </S.Card>
        </S.Cards>
        <S.AsideTotal>
          <S.AsideTitle>Total:</S.AsideTitle>
          <S.AsideTitle>R$798</S.AsideTitle>
        </S.AsideTotal>
      </S.SideNav>
      <S.AsideCheckOutBtn>
        <S.AsideTitle secondary>Finalizar Compra</S.AsideTitle>
      </S.AsideCheckOutBtn>
    </S.AsideDiv>
  );
};
