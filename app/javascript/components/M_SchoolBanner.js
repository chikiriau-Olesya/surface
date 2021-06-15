import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"
import A_H1 from "./A_H1.js"


class M_SchoolBanner extends React.Component {
  render() {
    return (
      <div className="M_SchoolBanner">
        <A_H1
        color="A_H1--white"
        content = "Серфшколы в России">
         </A_H1>
      </div>
    );
  }
}

export default M_SchoolBanner
