import React from "react"
import PropTypes from "prop-types"

const A_SchoolCity = ({
  city,
  textpart
}) => {

  return (
    <a className = "A_SchoolCity" href={`/schools?city=${city}`}>
      {textpart}
    </a>
  );
}


export default A_SchoolCity
