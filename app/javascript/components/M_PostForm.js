import React from "react"
import PropTypes from "prop-types"
import A_Input from './A_Input.js'
import A_Textarea from './A_Textarea.js'
import A_Btn from './A_Btn.js'
import A_Select from './A_Select.js'
import A_Heading from './A_Heading.js'

  class M_PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: props.post.category_id ? props.post.category_id : '',
      title: props.post.title ? props.post.title : '',
      name: props.post.name ? props.post.name : '',
      content: props.post.content,
      image: props.post.image.url,
      categories: props.categories ? props.categories : [],
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }
  handleImageChange(e) {
    this.setState({ image: e.target.value });
  }
  handleCategoryChange(e) {
    this.setState({ category_id: e.target.value });
  }
  handleSubmit(e) {
  alert('Публикация создана: ' + this.state );
}

  render() {
    return (
      <form className ="form-wrapper" method="post" action='/posts/'
      onSubmit={this.handleSubmit}>
        <A_Heading
        headingStyle = 'heading--black'
        headingSize = 'heading--h3'>
        {"Новая публикация"}
        </A_Heading>

        <A_Input
          textChild ={"Название публикации"}
          inputStyle="input--main"
          type = 'text'
          name="post[title]"
          value={this.state.title}
          onChange={this.handleTitleChange}
          />

        <A_Textarea
          textChild ={"Контент"}
          type = 'text'
          name="post[content]"
          value={this.state.content}
          onChange={this.handleContentChange}
          />


        <A_Input
          textChild ={"Изображение"}
          inputStyle="input--image"
          type="file"
          name="post[image]"
          value={this.state.image}
          onChange={this.handleImageChange}
        />
        <A_Input
          textChild ={"Теги"}
          inputStyle="input--main"
          type = 'text'
          name="post[title]"
          value={this.state.title}
          onChange={this.handleTitleChange}
          />

        <A_Select
          title={"Категория"}
          name="post[category_id]"
          value={this.state.category}
          placeholder={"Атмосфера"}
          handleChange={this.handleCategoryChange}
          options={this.state.categories}
        />

        <A_Btn
        type ='submit'
        buttonStyle = 'btn--main'
        buttonState = 'btn--primary'>
        {"Создать"}
        </A_Btn>
      </form>

    );
  }
}

export default M_PostForm
