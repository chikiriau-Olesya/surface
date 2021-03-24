import React from "react"
import PropTypes from "prop-types"

const A_SchoolIFacility = ({
label,
img
}) => {
    return (
      <div className="A_SchoolIFacility">
        <img src={img}/>
        <div>{label}</div>
      </div>
    );
}

export default  A_SchoolIFacility
