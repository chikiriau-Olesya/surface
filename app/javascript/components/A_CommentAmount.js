import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"


class A_CommentAmount extends React.Component {
  render() {

      return (
        <div className="comm-number">
        <A_H3 className = 'heading--black'
          content = "Голоса серферов">
        </A_H3>
       </div>
      );
    }
}

export default A_CommentAmount
