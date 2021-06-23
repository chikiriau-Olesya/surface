import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import A_H3 from "./A_H3.js"
import A_Textblock from "./A_Textblock.js"
import A_Link from "./A_Link.js"
import 'stylesheets/M_BlockMore.scss'
import Bc from "images/M_BlockMore.png"

class M_BlockMore extends React.Component {
  render() {
    var sectionStyle = {
      backgroundImage: `url(${Bc})`
    };
    return (
      <div style={sectionStyle} className="M_BlockMore">
          <div className="M_BlockMore--text">
            <A_H3 color= 'A_H3--white'
              content = "Все о видах серфинга">
            </A_H3>
            <A_Textblock
            className="more-text"
            textStyle = 'text--white'
            textSize = 'text--body'>
              {"Мы поможем вам разобраться в основных видах серфинга и найти подходящий для вас по духу и нагрузке тип серфинг "}
            </A_Textblock>
          </div>
          <A_Link
            linkStyle ='link--white'
            name = 'Подробнее'
            address = {'/surftypes'} >
          </A_Link>
      </div>
    );
  }
}

export default M_BlockMore
