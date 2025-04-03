import React from "react";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Home />
      <Sobre />
      <Contato />
    </>
  );
}
