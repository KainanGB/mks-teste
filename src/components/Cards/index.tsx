import { useState, useEffect } from "react";
import axios from "axios";

import watch from "../../assets/apple-watch.png";
import bag from "../../assets/bag.svg";

import * as S from "./Cards.Styles";

interface ProductsProps {
  id: number;
  photo: string;
  name: string;
  price: number;
  description: string;
}

export const Cards = () => {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const fetchProducts = async () => {
    const res = await axios.get(
      "https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
    );
    const data = await res.data.products;
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <S.Container>
      <S.Cards>
        {products.map((product) => {
          return (
            <S.Card key={product.id}>
              <S.CardHeader>
                <S.CardImage src={product.photo} />
              </S.CardHeader>

              <S.CardBody>
                <S.CardBodyDiv>
                  <S.CardTitle>{product.name}</S.CardTitle>
                  <S.CardPrice>R${product.price}</S.CardPrice>
                </S.CardBodyDiv>

                <S.CardDescription>{product.description}</S.CardDescription>
              </S.CardBody>

              <S.CardFooter>
                <S.CardButton>
                  <S.CardImage secondary src={bag} />
                  COMPRAR
                </S.CardButton>
              </S.CardFooter>
            </S.Card>
          );
        })}
      </S.Cards>
    </S.Container>
  );
};
