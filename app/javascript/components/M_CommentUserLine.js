import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"

class M_CommentUserLine extends React.Component {
  render() {
    return (
      <div className="coment_user_line">
        <A_avatar user={this.props.user} />
        <A_Heading className="post-title"
          headingStyle = 'heading--black'
          headingSize = 'heading--h3'>
          {this.props.user.username}
        </A_Heading>
        <A_Textblock
        textStyle = 'text--gray'
        textSize = 'text--descript'>
          {this.props.coment.created_at}
        </A_Textblock>

      </div>
    );
  }
}

export default M_CommentUserLine
