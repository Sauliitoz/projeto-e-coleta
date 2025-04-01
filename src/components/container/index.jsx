import React from "react";
import styled from "styled-components";
import Home from "../Home";
import Sobre from "../Sobre";
import Contato from "../Contato";

export default function Container() {
  return (
    <Section>
      <Home />
      <Sobre />
      <Contato />
    </Section>
  );
}

const Section = styled.section`
  background-color: #0b0b0b;
  width: 100%;
  min-height: 100vh;
`;
