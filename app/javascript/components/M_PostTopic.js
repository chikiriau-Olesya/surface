import React from "react"
import PropTypes from "prop-types"
import A_H5 from "./A_H5.js"


class M_PostTopic extends React.Component {
  render() {

      return (
        <div className="post-topic">
        <A_H5 className = 'heading--black'
          content = {this.props.post.topic}>
        </A_H5>
       </div>
      );
    }
}

export default M_PostTopic
