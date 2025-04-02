import React from "react";
import styled from "styled-components";

export default function Sobre() {
  return (
    <>
      <Section id="sobre">
        <H3>Trabalho apresentado como parte das Atividades de Extensão III</H3>
        <H6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quae id possimus doloribus expedita numquam enim in aliquid consequuntur eligendi, exercitationem ratione quaerat minus, tenetur dicta consequatur voluptatibus, aperiam rem.</H6>

        <P>
          O trabalho aborda os impactos ambientais causados pelo lixo
          eletrônico, também chamado de resíduos de equipamentos
          eletroeletrônicos (REEE), além da legislação vigente que regulamenta
          seu descarte. O aumento da produção e descarte inadequado desses
          materiais representa um desafio ambiental e sanitário significativo,
          exigindo soluções eficazes para minimizar seus efeitos nocivos.
        </P>
        <label htmlFor="">
          Projeto:{" "}
          <a
            href="https://docs.google.com/document/d/1aoDpYfLTyA9kytxcOIQ5njIzlymgeJsI/edit?usp=drive_link&ouid=118011317962876723648&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
          >Clique aqui!</a>
        </label>
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
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H6 = styled.h6`
  margin-top: 20px;
`;
