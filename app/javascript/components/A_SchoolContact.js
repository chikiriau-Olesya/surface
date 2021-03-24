import React from "react"
import PropTypes from "prop-types"

const A_SchoolContact = ({
label,
img,
link
}) => {
    return (
      <div className="A_SchoolContact">
        <img src={img}/>
        <a href={link + label} target="_blank">{label}</a>
      </div>
    );
}

export default  A_SchoolContact
