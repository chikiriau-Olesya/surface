import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_Textblock from "./A_Textblock.js"
import A_Btn from "./A_Btn.js"

class M_AuthorQuestion extends React.Component {
  render() {
    return (
      <div className="M_AuthorQuestion">
        <div className="M_AuthorQuestion-wrapper">
          <div className="M_AuthorQuestion-textblock">
            <A_H3
              color = "A_H3--grey"
              content = "У вас есть история и вы хотите стать частью комьюнити?">
            </A_H3>

            <A_Textblock
              textStyle = 'text--grey'
              textSize = 'text--body'>
                {"Станьте автором Surface. Вместе мы развиваем общество русского серфинга в массах, а все истории людей создают уникальное полотно колоритной серфкультуры"}
            </A_Textblock>
          </div>
          <div className="M_AuthorQuestion-more">
            <A_Btn buttonStyle = ''>
              <a href="/questions/new" className="">
                {"Стать автором"}
              </a>
            </A_Btn>
          </div>
        </div>
      </div>
    );
  }
}

export default M_AuthorQuestion
