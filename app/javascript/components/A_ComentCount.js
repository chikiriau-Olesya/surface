import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"

class A_ComentCount extends React.Component {
  render() {
    return (
      <div className="coment_count">
        <A_Heading className="post-title"
          headingStyle = 'heading--black'
          headingSize = 'heading--h3'>
          {"Голоса серферов"}
        </A_Heading>
        <A_Heading className="post-title"
          headingStyle = 'heading--gray'
          headingSize = 'heading--h3'>
          {this.props.coments.length}
        </A_Heading>

      </div>
    );
  }
}

export default A_ComentCount
