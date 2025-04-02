import React from "react";
import styled from "styled-components";

export default function Contato() {
  return (
    <Section>
      <H3 id="contato">Projeto Criado por:</H3>
      <Div>
        <Ul>
          <Li>
            <A href="#" target="_blank">
              <Img
                src="#"
                alt="Foto do Perfil de Alex Barbosa Proque "
              />
              Alex Barbosa Proque
            </A>
          </Li>
          <Li>
            <A href="#" target="_blank">
              <Img
                src="#"
                alt="Foto do Perfil de Felipe Jhonatan Martins "
              />
              Felipe Jhonatan Martins
            </A>
          </Li>
          <Li>
            <A href="#" target="_blank">
              <Img
                src="#"
                alt="Foto do Perfil de Henrique Rodrigues Lelis "
              />
              Henrique Rodrigues Lelis
            </A>
          </Li>
          <Li>
            <A href="#" target="_blank">
              <Img
                src="#"
                alt="Foto do Perfil de João Victor Emerenciano Lins "
              />
              João Victor Emerenciano Lins
            </A>
          </Li>
          <Li>
            <A href="https://www.linkedin.com/in/sauloats" target="_blank">
              <Img
                src="https://media.licdn.com/dms/image/v2/D4D35AQFZuXQXE8ttww/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1727995558085?e=1744070400&v=beta&t=SH78mPZ89E3tHI1wp7R3XZ6k2OUwHy0n0_wqBuWkHcM"
                alt="Foto do Perfil de Saulo Teixeira "
              />
              Saulo Teixeira
            </A>
          </Li>
        </Ul>
      </Div>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;
const H3 = styled.h1`
  font-size: 1.2rem;
  color: #000;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 50px;
  flex-wrap: wrap; /* Adiciona capacidade de quebra de linha */

  @media (max-width: 600px) {
    
    justify-content: center; 
    gap: 20px; 
  }
`;

const Li = styled.li`
  list-style: none;
`;

const A = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 5px;
`;
