import React from "react"
import PropTypes from "prop-types"
import A_Input from './A_Input.js'
import A_Textarea from './A_Textarea.js'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'
import A_H5 from './A_H5.js'

class O_QuestionForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        content: props.question.content ? props.question.content : '',
      };
      this.handleContentChange = this.handleContentChange.bind(this);
    }

    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }

    render() {

      return (
        <div className="form-wrapper">
          <A_H3 content = "Новая заявка"/>

          <textarea
            type = 'hidden'
            name="user[username]"
            value={this.props.user.name}
            />

          <A_H5
            content = "Немного о вас">
          </A_H5>
          <textarea
            type = 'text'
            name="post[content]"
            value={this.state.content}
            onChange={this.handleContentChange}
          />

          <A_Btn
            type ='submit'
            buttonStyle = 'btn--main'
            buttonState = 'btn--primary'>
            {"Отправить заявку"}
          </A_Btn>
        </div>
      );
    }
  }

export default O_QuestionForm
