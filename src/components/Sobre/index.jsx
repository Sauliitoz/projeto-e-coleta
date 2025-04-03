import React from "react";
import styled from "styled-components";
import CartilhaFrente from "../../assets/Cartilha_frente.png";
import CartilhaCostas from "../../assets/Cartilha_costas.png";
import CaixaDescarte from "../../assets/caixa_descarte.jpg";
import Folheto from "../../assets/folheto.jpg";

export default function Sobre() {
  return (
    <>
      <Section id="sobre">
        <H3>Trabalho apresentado como parte das Atividades de Extensão III</H3>
        <H6>Analise e Desenvolvimento de Sistemas</H6>

        <P>
          O trabalho aborda os impactos ambientais causados pelo lixo
          eletrônico, também chamado de resíduos de equipamentos
          eletroeletrônicos (REEE), além da legislação vigente que regulamenta
          seu descarte. O aumento da produção e descarte inadequado desses
          materiais representa um desafio ambiental e sanitário significativo,
          exigindo soluções eficazes para minimizar seus efeitos nocivos.
        </P>

        <Titulo>Visualize os Materiais</Titulo>

        <CartilhaContainer>
          <CartilhaItem>
            <Img src={CartilhaFrente} alt="Cartilha Frente" />
            <Img src={CartilhaCostas} alt="Cartilha Costas" />
          </CartilhaItem>
          <A
            href="https://www.pacdora.com/pt/share?filter_url=ps50gfmq86"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visualizar Cartilha
          </A>
        </CartilhaContainer>

        <Item>
          <Img src={CaixaDescarte} alt="Caixa de Descarte" />
          <A
            href="https://www.pacdora.com/pt/share?filter_url=psk9qa9ncs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visualizar Caixa de Descarte
          </A>
        </Item>
        <Item>
          <ImgFolheto src={Folheto} alt="Caixa de Descarte" />
          <A
            href="https://drive.google.com/file/d/1i-4eK58lJl0LmGXEM12-lO2NIdjXoHCx/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Folheto
          </A>
        </Item>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #69c026;
  box-shadow: 20px 30px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 30px auto;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #111;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin-bottom: 20px;
`;

const H6 = styled.h6`
  font-size: clamp(1.2rem, 3.5vw, 1.8rem);
  color: #444;
  letter-spacing: 0.5px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 14px;
`;

const P = styled.p`
  font-size: clamp(1rem, 4vw, 1.2rem);
  line-height: 1.5;
  text-align: justify;
  color: #2a4d17;
  margin-bottom: 20px;
  max-width: 800px;
`;

const Titulo = styled.h4`
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: #0a3704;
  margin-top: 40px;
  margin-bottom: 20px;
  text-align: center;
`;

const CartilhaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CartilhaItem = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const A = styled.a`
  font-size: clamp(1rem, 3.5vw, 1.2rem);
  color: #333;
  text-decoration: underline;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  display: block;
  background-color: #b1e595;
  padding: 5px 10px;
  border-radius: 10px;
  

  &:hover {
    color: #000;
  }
`;

const Img = styled.img`
  min-width: 250px;
  max-width: 500px;
  width: 100%;
  display: flex;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
`;
const ImgFolheto = styled.img`
  width: 100%;
  max-width: 700px;
  min-width: 250px;
  height: auto;
  display: block;
`;
