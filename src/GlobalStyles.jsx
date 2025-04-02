import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    body{
      font-family: 'Roboto', sans-serif;
      overflow-x: hidden;
      padding: 100px 20px;
      
    }
    
    
`;
export default GlobalStyles;
