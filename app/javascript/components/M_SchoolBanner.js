import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"
import A_H1 from "./A_H1.js"
import Bc from "images/schoolMain-bc.svg"

class M_SchoolBanner extends React.Component {
  render() {
    var sectionStyle = {
      backgroundImage: `url(${Bc})`
    };
    return (
      <div style={sectionStyle} className="M_SchoolBanner">
        <A_H1
        color="A_H1--white"
        content = "Серфшколы в России">
         </A_H1>
      </div>
    );
  }
}

export default M_SchoolBanner
