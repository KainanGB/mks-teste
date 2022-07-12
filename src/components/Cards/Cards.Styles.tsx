import styled from "styled-components";
import * as pallete from "../../global/variables";

type Props = {
  src: string;
  secondary?: boolean;
};

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  margin: 1em 0;
  gap: 1rem;
`;
export const Card = styled.div`
  background-color: ${pallete.primaryClrWhite};
  width: 14rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
`;
export const CardHeader = styled.div`
  height: 7rem;
`;
export const CardImage = styled.img<Props>`
  margin: ${(props) => (props.secondary ? "0 0.5rem" : "")};
  padding: ${(props) => (props.secondary ? "" : "0.5rem 0")};
  width: ${(props) => (props.secondary ? "auto" : "5rem")};
`;
export const CardBody = styled.div`
  padding: 0 1em;
  height: 11rem;
`;
export const CardTitle = styled.h3`
  font-weight: normal;
  padding-right: 0.1em;
`;
export const CardPrice = styled.h4`
  background-color: ${pallete.textColor};
  color: ${pallete.primaryClrWhite};
  padding: 0.35em;
  border-radius: 0.25em;
`;
export const CardDescription = styled.p`
  font-size: 13px;
  padding: 1em 0;
`;
export const CardBodyDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardFooter = styled.div`
  width: 100%;
`;
export const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  letter-spacing: 1px;
  width: 100%;
  padding: 0.5em;
  border: none;
  background-color: ${pallete.primaryClrBlue};

  cursor: pointer;
  transition: background 1s;
  :hover {
    background: rgba(15, 82, 186, 0.8);
  }
`;
