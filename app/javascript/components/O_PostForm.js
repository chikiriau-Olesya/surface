import React from "react"
import PropTypes from "prop-types"
import A_Input from './A_Input.js'
import A_H5 from './A_H5.js'
import A_Textarea from './A_Textarea.js'
import A_Btn from './A_Btn.js'
import A_Select from './A_Select.js'
import A_Heading from './A_Heading.js'

  class O_PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_id: props.post.category_id ? props.post.category_id : '',
      title: props.post.title ? props.post.title : '',
      content: props.post.content ? props.post.content: '',
      image: props.post.image ? props.post.image : '',
      topic: props.post.topic ? props.post.topic : '',
      author: props.post.author ? props.post.author : '',
      categories: props.categories ? props.categories : [],
      post_type_id: props.post.post_type_id ? props.post.post_type_id : '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleTopicChange = this.handleTopicChange.bind(this);
    this.handleAuthorChange = this.handleAuthorChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }
  handleCategoryChange(e) {
    this.setState({ category_id: e.target.value });
  }
  handleImageChange(e) {
    this.setState({ image: e.target.value });
  }
  handleTopicChange(e) {
    this.setState({ topic: e.target.value });
  }
  handleAuthorChange(e) {
    this.setState({ author: e.target.value });
  }

  render() {
    return (
      <div className="form-wrapper">
        <A_Heading
        headingStyle = 'heading--black'
        headingSize = 'heading--h3'>
        {"Новая публикация"}
        </A_Heading>

        <A_H5
        content = "Название">
        </A_H5>
        <input className="input"
          type = 'text'
          name="post[title]"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />

        <A_H5
        content = "Автор">
        </A_H5>
        <input className="input"
          type = 'text'
          name="post[author]"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />

        <A_H5
        content = "Текст публикации">
        </A_H5>
        <textarea
          type = 'text'
          name="post[content]"
          value={this.state.content}
          onChange={this.handleContentChange}
          />
        <textarea
          type = 'hidden'
          name="post[post_type_id]"
          value={this.state.post_type_id}
          />

          <A_H5
          content = "Категория">
          </A_H5>
        <A_Select
         title={"Категория"}
         name="post[category_id]"
         value={this.state.category}
         placeholder={"Категории"}
         handleChange={this.handleCategoryChange}
         options={this.state.categories}
       />

       <A_H5
       content = "Тема обсуждения">
       </A_H5>
       <input className="input"
         type = 'text'
         name="post[topic]"
         value={this.state.topic}
         onChange={this.handleTopicChange}
       />

        <A_Btn
          type ='submit'
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Создать"}
        </A_Btn>
      </div>

    );
  }
}

export default O_PostForm
