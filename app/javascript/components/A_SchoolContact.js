import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_SchoolContact.scss'

const A_SchoolContact = ({
label,
img,
link
}) => {
    return (
      <a href={link + label} target="_blank" className="A_SchoolContact">
        <img src={img} className="A_SchoolContact-img"/>
        <span> {label}</span>
      </a>
    );
}

export default  A_SchoolContact
