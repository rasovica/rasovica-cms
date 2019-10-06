import * as React from "react";
import styled from "styled-components";
import {FoodMenu} from "styled-icons/boxicons-regular/FoodMenu";
import {Camera} from "styled-icons/boxicons-regular/Camera";

import { ExpandingIconLink } from "../expandingIconLink";

const Styled = styled.div`
  flex-grow: 0;

  display: flex;
  
  a {
    text-decoration: none;
    color: inherit;
    font-size: 1em;
    margin: 0 10px;
    font-family: business, sans-serif;
  }
`;

export const Menu = () => {
  return (
    <Styled>
      <ExpandingIconLink icon={FoodMenu} text={"Recipes"} to={"/recipes"} />
      <ExpandingIconLink icon={Camera} text={"Photography"} to={"/recipes"} />
      <ExpandingIconLink icon={FoodMenu} text={"Recipes"} to={"/recipes"} />
      <ExpandingIconLink icon={FoodMenu} text={"Recipes"} to={"/recipes"} />
    </Styled>
  )
}
