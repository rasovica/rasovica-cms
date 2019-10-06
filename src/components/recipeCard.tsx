import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Styled = styled.div`

`;

export const RecipeCard = ({title, to}) => {

  return (
    <Link to={to}>
      <Styled>
        {title}
      </Styled>
    </Link>
  )
}
