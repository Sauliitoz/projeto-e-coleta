import React from "react";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Section id="sobre">
        <H3>Trabalho apresentado como parte das Atividades de Extensão III</H3>

        <P>
          O trabalho aborda os impactos ambientais causados pelo lixo
          eletrônico, também chamado de resíduos de equipamentos
          eletroeletrônicos (REEE), além da legislação vigente que regulamenta
          seu descarte. O aumento da produção e descarte inadequado desses
          materiais representa um desafio ambiental e sanitário significativo,
          exigindo soluções eficazes para minimizar seus efeitos nocivos.
        </P>
      </Section>
    </>
  );
}
const H3 = styled.h3`
  
  margin-top: 20px;
`;
const P = styled.p`
  
  margin-top: 20px;
`;

const Section = styled.section`
background-color:#69c026;
  color: #0b0b0b;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
