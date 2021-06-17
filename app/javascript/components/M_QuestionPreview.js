import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"
import A_Avatar from "./A_Avatar.js"
import 'stylesheets/M_QuestionPreview.scss'


class M_QuestionPreview extends React.Component {
  render() {

    return (
      <div className="que-preview">
      <A_Avatar user = {this.props.user}
        avatarStyle = 'avatar--default'
      />
      <A_H4
        content = {this.props.user.username}>
      </A_H4>
      <p>{this.props.question.content}</p>
      // <img src={this.props.user.image.small_thumb.url}/>
      </div>
    );
  }
}


export default M_QuestionPreview
