import React from "react"
import PropTypes from "prop-types"

const A_SchoolSurf = ({
  surftype,
  textpart
}) => {

  return (
    <a className = "A_SchoolSurf" href={`/schools?surftype=${surftype}`}>
      {textpart}
    </a>
  );
}


export default A_SchoolSurf
