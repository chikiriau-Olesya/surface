import React from "react"
import PropTypes from "prop-types"

const A_SchoolSurf = ({
  imageSrc,
  surftype,
  text
}) => {

  return (
    <a className = "A_SchoolSurf" href={`/schools?surftype=${surftype}`}>
      <div>
        {imageSrc}
      </div>
      {text}
    </a>
  );
}


export default A_SchoolSurf
