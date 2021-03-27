import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"

class M_CommentReplyBtn extends React.Component {
  render() {
    return (
      <div className="coment_reply_btn">
        <A_Btn
          type ='submit'
          buttonStyle = 'btn--secondary'
          buttonState = 'btn--primary'>
          {"Ответить"}
        </A_Btn>
        <A_Textblock
        textStyle = 'text--gray'
        textSize = 'text--descript'>
          {this.props.coments.length}
        </A_Textblock>

      </div>
    );
  }
}

export default M_CommentReplyBtn
