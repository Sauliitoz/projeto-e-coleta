import React from "react";
import styled from "styled-components";

export default function Contato() {
  return (
    <Section>
      <H3 id="contato">Criado por:</H3>

      <H2>Alex Barbosa Proque</H2>

      <H2>Felipe Jhonatan Martins</H2>

      <H2>Henrique Rodrigues Lelis</H2>

      <H2>João Victor Emerenciano Lins</H2>

      <H2>Saulo Teixeira</H2>
    </Section>
  );
}

const Section = styled.section`
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #69c026;
  box-shadow: 20px 30px 30px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const H3 = styled.h3`
  font-size: clamp(1.5rem, 4.5vw, 2.5rem);
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  text-align: center;
  margin-bottom: 18px;
  max-width: 100%;
  width: 100%;
  margin: 30px 0;
`;

const H2 = styled.h2`
  font-size: clamp(0.8rem, 4.5vw, 1.5rem);
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  text-align: center;
  margin-bottom: 18px;
  max-width: 100%;
  width: 100%;
  margin: 30px 0;
`;
