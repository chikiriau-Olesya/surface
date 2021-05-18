import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"
import A_Input from "./A_Input.js"
import A_Btn from "./A_Btn.js"
import A_Avatar from "./A_Btn.js"

class M_ComentForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        content: ''
}
    ;
      this.handleContentChange = this.handleContentChange.bind(this);
    }

    handleContentChange(e) {
      this.setState({ content: e.target.value });
    }

    componentDidMount(e) {
        this.setState({
          token: document.querySelector('meta[name="csrf-token"]').content
        })
    }

  render () {
    return (
      <form
      id={'child-comment-'+this.props.parent_id}
      action={'/posts/'+this.props.post_id+'/coments' + "?authenticity_token="+encodeURIComponent(this.state.token)}
      method='post'
      >
        <div className="comment-form">
          <A_Avatar user={this.props.user} />
          <A_Input
            type="text"
            name="comment[body]"
            placeholder="Напишите комментарий"
            value={this.state.content}
            onChange={this.handleContentChange}
          />
          <A_Btn
            type ='submit'
            buttonStyle = 'btn--main'
            buttonState = 'btn--primary'>
            {"Отправить"}
          </A_Btn>
        </div>
      </form>
    );
  }
}

export default M_ComentForm
