import React from "react"
import PropTypes from "prop-types"
import A_H1 from "./A_H1.js"
import A_H2 from "./A_H2.js"
import A_Textblock from './A_Textblock.js'

class M_Surftype extends React.Component {
  render() {
    return (
      <div className="M_Surftype">
        <A_H1 color="A_H1--black"
          content = "Виды серфинга">
        </A_H1>
        <div className="M_Surftype--wrapper">
          {this.props.surftypes.map(surftype => (
            <div key = {surftype.id} className="M_Surftype--block">
              <A_H2 color="A_H2--white"
                content = {`${surftype.name}`}>
              </A_H2>
              <A_Textblock className="cat-text"
              textStyle = 'text--white'
              textSize = 'text--s-descript'>
                {`${surftype.description}`}
              </A_Textblock>
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default  M_Surftype
