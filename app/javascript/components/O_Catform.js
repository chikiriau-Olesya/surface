import React from "react"
import PropTypes from "prop-types"
import A_Input from './A_Input.js'
import A_Textarea from './A_Textarea.js'
import A_Btn from './A_Btn.js'
import A_Select from './A_Select.js'
import A_Heading from './A_Heading.js'

class O_Catform extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        name: props.category.name ? props.category.name : '',
        description: props.category.description ? props.category.description : '',
        post_type_id: props.category.post_type_id ? props.category.post_type_id : ''
      };
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
      this.handlePostTypeChange = this.handlePostTypeChange.bind(this);

    }
    handleNameChange(e) {
      this.setState({ name: e.target.value });
    }
    handleDescriptionChange(e) {
      this.setState({ description: e.target.value });
    }
    handlePostTypeChange(e) {
      this.setState({ post_type_id: e.target.value });
    }

    render() {
      return (
        <div className="form-wrapper">
          <A_Heading
          headingStyle = 'heading--black'
          headingSize = 'heading--h3'>
          {"Новая категория"}
          </A_Heading>

          <A_Input
            textChild ={"Название категории"}
            inputStyle="input--main"
            type = 'text'
            name="user[username]"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <textarea
            type = 'text'
            name="category[description]"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            />

          <label>Display in Navbar?</label>
          <input
            defaultChecked={this.props.category.display_in_navbar ? this.props.category.display_in_navbar : false}
            ref={this.input}
            type="checkbox"
            name="category[display_in_navbar]"
          />
          <A_Btn
          type ='submit'
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Создать категорию"}
        </A_Btn>
        </div>
      );
    }
  }

export default O_Catform
