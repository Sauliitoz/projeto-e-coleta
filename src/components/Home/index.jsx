import React from "react";
import styled from "styled-components";
import Logo from "../../assets/Logo1.png";

export default function Home() {
  return (
    <>
      <Section id="home" >
        <H1>Impactos Ambientais do Lixo Eletrônico e Legislação Vigente</H1>
        <LogoRecycle src={Logo} alt="Logo de reciclagem" />

        <H2>O que é lixo eletrônico?</H2>

        <P>
          O lixo eletrônico engloba qualquer equipamento que utilize energia
          elétrica para funcionar e que, por obsolescência ou defeito, é
          descartado. Isso inclui celulares, computadores, tablets, impressoras,
          televisores, baterias, eletrodomésticos e diversos outros
          dispositivos. O problema do lixo eletrônico é agravado pela rápida
          evolução tecnológica e pela obsolescência programada, fatores que
          impulsionam o descarte frequente de aparelhos ainda funcionais.
        </P>

        <Img
          src="https://s2-umsoplaneta.glbimg.com/Au3ZMTSFigpsno1SjQuIMgor1qg=/0x0:1920x1280/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_7d5b9b5029304d27b7ef8a7f28b4d70f/internal_photos/bs/2021/c/h/q83zunQDqSCTH5TGaUCQ/man-g5d518fa85-1920.jpg"
          alt="Homem empilhando uma televisão em um local com muitos televisores e placas de lixo eletronico"
        />

        <H2>Classificação do lixo eletrônico</H2>

        <Img
          src="https://vcx.solutions/wp-content/uploads/2021/12/4-categoria-de-lixos-eletronicos_Prancheta-1-1024x836.png"
          alt="Quatro categorias de lixo eletronicos: Linha verde: relacionados aos computadores, smartphones e derivados; Marrom: televisores e monitores de tubo, plasma, lcd, aparelho de som, filmadoras; Azul: Eletrodomésticos portáteis em geral, secador de cabelo, ferro eletrico, liquidificadores, cafeteiras e furadeiras; Branca: Eletrodomésticos de grande porte, Geladeiras, freezer, fogão, ar condicionado, microondas, secadoras...etc."
          width="800px"
        />

        <H2>Impactos ambientais e à saúde</H2>

        <Img
          src="http://nexjor-sites.upf.br/boaspraticas/wp-content/uploads/2019/10/info20.jpg"
          alt="Explicação do ciclo dos eletrônicos após a 'Morte' do item que vai para o lixão: Materiais criam o chorume, que corrói os eletrônicos liberando ions de metais, chegando ao solo e depois a agua, causando um efeito em cadeia no ecossistema tanto para os a fauna e flora, quanto para os humanos, causando irritações na pele e problemas neurológicos com o acúmulo "
          width="800px"
        />

        <P>
          O descarte inadequado do lixo eletrônico tem graves consequências
          ambientais e sanitárias devido à presença de metais pesados e
          substâncias tóxicas, como chumbo, mercúrio, cádmio, arsênio e berílio.
          Esses elementos podem contaminar o solo, a água e o ar, afetando tanto
          o meio ambiente quanto a saúde humana.
        </P>

        <Ul>
          <Li>
            Contaminação do solo e da água: Substâncias químicas nocivas
            liberadas pelos componentes eletrônicos atingem lençóis freáticos e
            cursos d’água, prejudicando a qualidade da água potável e afetando a
            segurança alimentar.
          </Li>
          <Li>
            Impactos na saúde humana: A exposição prolongada a metais pesados
            pode causar doenças neurológicas, respiratórias, distúrbios
            hormonais e até câncer. Trabalhadores que lidam com reciclagem
            inadequada de eletrônicos são os mais afetados.
          </Li>
          <Li>
            Poluição do ar: A incineração indevida dos resíduos libera gases
            tóxicos, aumentando os níveis de poluição atmosférica e contribuindo
            para problemas respiratórios.
          </Li>
        </Ul>
        <Img
          src="https://www.lorene.com.br/wp-content/uploads/2024/03/Maiores-geradores-de-lixo-eletronico-no-mundo.png"
          alt="Grafico mostrando o Brasil como o quinto maior gerador de lixo eletronico do mundo"
          width="1000px"
        />

        <P>
          O Brasil é o maior produtor de lixo eletrônico da América Latina e o
          quinto maior do mundo, gerando cerca de 1,5 milhão de toneladas de
          e-lixo por ano. No entanto, há um grande déficit em infraestrutura
          para coleta e reciclagem desses materiais.
        </P>

        <H2> Legislação vigente sobre lixo eletrônico</H2>

        <H4>
          A Lei 12.305/2010, que institui a Política Nacional de Resíduos
          Sólidos (PNRS), com foco na logística reversa e na destinação
          ambientalmente adequada dos resíduos.
        </H4>

        <P>A lei define conceitos importantes como:</P>

        <Ul>
          <Li>
            Logística reversa – Processo que obriga fabricantes, importadores,
            distribuidores e comerciantes a recolherem e darem a destinação
            correta aos produtos eletroeletrônicos após o uso pelo consumidor.
          </Li>
          <Li>
            Destinação final ambientalmente adequada – Reciclagem,
            reaproveitamento ou descarte seguro dos resíduos para minimizar
            impactos ambientais.
          </Li>
          <Li>
            Responsabilidade compartilhada – Todos os envolvidos no ciclo de
            vida do produto devem contribuir para reduzir o volume de lixo
            eletrônico.
          </Li>
        </Ul>

        <P>
          O Artigo 33 da Lei 12.305/2010  estabelece que
          fabricantes e comerciantes são obrigados a estruturar sistemas de
          logística reversa, garantindo que os produtos eletroeletrônicos
          descartados sejam reaproveitados ou reciclados corretamente.
        </P>
        <P>
          Os consumidores também possuem obrigações, como devolver os produtos
          obsoletos aos pontos de coleta específicos e não descartá-los no lixo
          comum.
        </P>

        <H2>Regulamentação estadual</H2>
        <P>
          Além da legislação federal, alguns estados possuem leis específicas
          para o descarte de lixo eletrônico.
        </P>
        <P>Em Minas Gerais:</P>
        <Ul>
          <Li>
           A Lei 18.031/2009 e a Lei 13.766/2000 estabelecem a
            política estadual de resíduos sólidos e incentivam a coleta
            seletiva.
          </Li>
        </Ul>
        <H5>
          Além disso, a Resolução nº 452/2012 do CONAMA exige que empresas
          apresentem planos de gerenciamento para minimizar os impactos
          ambientais dos eletroeletrônicos.
        </H5>

        <H2>Exemplo de aplicação da legislação</H2>
        <P>
          No Campus Universitário de Alfenas (UNIFENAS), há um modelo de gestão
          integrada de lixo eletrônico, realizado pelos setores de Tecnologia da
          Informação (TI) e Patrimônio. O processo segue etapas organizadas:
        </P>

        <Ol>
          <Li>Identificação e separação de equipamentos obsoletos.</Li>
          <Li>
            Baixa no sistema de controle de ativos para atualização do
            inventário institucional.
          </Li>
          <Li>Armazenamento temporário dos resíduos.</Li>
          <Li>
            Encaminhamento dos materiais para empresas especializadas na
            reciclagem e destinação adequada.
          </Li>
        </Ol>
        <P>
          Essa prática demonstra a viabilidade da logística reversa e pode
          servir de referência para outras instituições.
        </P>

        <H2>Conclusão</H2>

        <P>
          O estudo destaca que o lixo eletrônico é um problema crescente no
          Brasil, exigindo medidas eficazes para reduzir seu impacto ambiental e
          sanitário.
        </P>

        <P>
          A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) estabelece a
          logística reversa como um dos principais instrumentos para o descarte
          correto, mas sua implementação ainda enfrenta desafios, como falta de
          infraestrutura, resistência de empresas e baixa conscientização da
          população.
        </P>
        <P>Para superar esses problemas, é necessário:</P>
        <Ul>
          <Li> Maior investimento em infraestrutura de coleta e reciclagem;</Li>
          <Li>
            Incentivo à logística reversa por parte de fabricantes e
            distribuidores;
          </Li>
          <Li>
            Conscientização da população sobre a destinação correta do e-lixo;
          </Li>
          <Li>
            Fiscalização rigorosa para garantir o cumprimento da legislação.
          </Li>
        </Ul>

        <P>
          O futuro da gestão de resíduos eletrônicos no Brasil dependerá do
          comprometimento do governo, da indústria e da sociedade civil na
          adoção de práticas sustentáveis.
        </P>
      </Section>
    </>
  );
}
const P = styled.p`
  font-size: clamp(1rem, 4vw, 1.2rem);
  line-height: 1.5;
  text-align: justify;
  color: #2a4d17;
  margin: 15px 0;
`;
const Ul = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-bottom: 20px;
`;
const Li = styled.li`
  font-size: clamp(1rem, 3.5vw, 1.2rem);
  line-height: 1.6;
  margin-bottom: 10px;
  color: #222;
  display: flex;
  align-items: center;

  &::before {
    content: "✔";
    color: rgb(0, 0, 0);
    font-weight: bold;
    margin-right: 8px;
  }
`;
const Ol = styled.ol`
  list-style: decimal;
  padding-left: 20px;
  margin-bottom: 20px;
  list-style-position: inside;
`;
const H1 = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  color: #111;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  margin: 30px 0 30px 0;
  word-wrap: break-word;
`;
const H2 = styled.h2`
  font-size: clamp(1.5rem, 4.5vw, 2.5rem);
  color: #222;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  text-align: center;
  margin-bottom: 18px;
  max-width: 100%;
  width: 100%;
  margin: 30px 0 30px 0;
`;

const H4 = styled.h4`
  font-size: clamp(1.2rem, 3.5vw, 1.8rem);
  color: #444;
  letter-spacing: 0.5px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 14px;
  word-wrap: break-word;
  margin: 30px 0 30px 0;
`;
const H5 = styled.h5`
font-size: clamp(1rem, 3.5vw, 1.8rem);
  color: #444;
  letter-spacing: 0.5px;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin-bottom: 14px;
  word-wrap: break-word;
  margin: 30px 0 30px 0;
`;

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

const LogoRecycle = styled.img`
  width: 80%;
  max-width: 300px;
  display: block;
`;

const Img = styled.img`
  width: 100%;
  max-width: 800px;
  min-width: 250px;
  height: auto;
  display: block;
`;
