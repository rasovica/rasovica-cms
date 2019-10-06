import * as React from "react";
import { Link } from "gatsby";
import { useState } from "react"


export const ExpandingIconLink = ({icon, to, text}) => {
  const [showText, setShowText] = useState(false);

  return (
    <Link to={to} onMouseEnter={() => setShowText(!showText)} onMouseLeave={() => setShowText(!showText)}>
      { text }
    </Link>
  )
}
