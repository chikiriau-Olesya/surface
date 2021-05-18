import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"
import A_Heading from "./A_Heading.js"
import A_Avatar from "./A_Avatar.js"

class M_CommentUserLine extends React.Component {
  render() {
    return (
      <div className="coment_user_line">
        <A_Avatar user={this.props.user} />
        <A_Textblock coment ={this.props.coment}
        textStyle = 'text--gray'
        textSize = 'text--descript'>
          {this.props.coment.created_at}
        </A_Textblock>
      </div>
    );
  }
}

export default M_CommentUserLine
