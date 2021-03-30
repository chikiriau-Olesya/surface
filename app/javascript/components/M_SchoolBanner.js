import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"
import A_H1 from "./A_H1.js"


class M_SchoolBanner extends React.Component {
  render() {
    return (
      <div className="M_SchoolBanner">
        <A_H1
        content = "Серфшколы в России">
         </A_H1>
        <A_Textblock
        textStyle = 'text--black'
        textSize = 'text--body'
        children = "Отправляемся навстречу волнам чила и гармонии">
        </A_Textblock>

      </div>
    );
  }
}

export default M_SchoolBanner
