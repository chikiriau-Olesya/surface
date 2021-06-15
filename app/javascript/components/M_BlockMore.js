import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import A_H3 from "./A_H3.js"
import A_Textblock from "./A_Textblock.js"
import A_Btn from "./A_Btn.js"
import 'stylesheets/M_BlockMore.scss'

class M_BlockMore extends React.Component {
  render() {
    return (
      <div className="bottom-layer">
        <div className="top-layer">
          <div className="top-layer-text">
            <A_H3 color= 'A_H3--white'
              content = "Все о видах серфинга">
            </A_H3>
            <A_Textblock
            className="more-text"
            textStyle = 'text--white'
            textSize = 'text--descript'>
              {"Мы поможем вам разобраться в основных видах серфинга и найти подходящий для вас по духу и нагрузке тип серфинг "}
            </A_Textblock>
          </div>
          <A_Btn
          className="more-btn"
          type ='text'
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Подробнее"}
          </A_Btn>
        </div>
      </div>
    );
  }
}

export default M_BlockMore
