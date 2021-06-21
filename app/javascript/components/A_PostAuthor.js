import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"


class A_PostAuthor extends React.Component {
  render() {

      return (
        <div className="post-author">
        <A_H4 className = 'heading--black'
          content = {this.props.post.author}>
        </A_H4>
       </div>
      );
    }
}

export default A_PostAuthor
