import * as React from "react";
import styled, {createGlobalStyle} from "styled-components";
import { Menu } from "./menu";
import { Location } from "./location";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'business';
    src: url('/fonts/Business-As-Usual.ttf') format('truetype');
  }
  
  @font-face {
    font-family: 'dudu';
    src: url('/fonts/Dudu_Calligraphy.ttf') format('truetype');
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: business, sans-serif;
  }
  
  div, p {
    font-family: dudu, sans-serif;
  }
  
  body {
    background-color: #e0ddc7;
  }
`;

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  
  .layout {
    display: flex;
    overflow: hidden;
    
    font-size: 2em;
  }
  
  .menu-item {
     font-family: business, sans-serif;
  }
`;

export const Layout = ({children}) => {
  return (
    <Styled>
      <GlobalStyle/>
      <div className="layout">
        <Location/>
        <Menu/>
      </div>
      { children }
    </Styled>
  )
}
