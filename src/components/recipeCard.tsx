import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Styled = styled.div`
  position: relative;
  height: 300px;
  width: 400px;
  
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url("/images/polaroid.png");
  overflow: hidden;
  
  img {
    position: absolute;

    top: 0;
    left: 30px;
    width: 200px;
    height: 250px;

    object-fit: contain;
    z-index: -1;
  }
  
  p {
    position: absolute;
    
    bottom: 0;
    left: 30px;
    
    padding-left: 5px;
    
    font-family: dudu, sans-serif;
    color: black;
    text-decoration: none;
    font-size: 2em;
  }
`;

export const RecipeCard = ({title, to, image}) => {

  return (
    <Link to={to}>
      <Styled>
        <img alt={title} src={image} />
        <p>{title}</p>
      </Styled>
    </Link>
  )
}
