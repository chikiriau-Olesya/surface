import React from "react"
import PropTypes from "prop-types"
import A_Input from './A_Input.js'
import A_Textarea from './A_Textarea.js'
import A_Btn from './A_Btn.js'
import A_Heading from './A_Heading.js'
import A_Textblock from './A_Textblock.js'

  class M_UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.post.image.url,
      username: props.user.username ? props.user.username : '',
      bio: props.user.bio,
      instagram: props.user.inst,
      facebook: props.user.fb,
      telegram: props.user.tg,
    };

    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleInstagramChange = this.handleInstagramChange.bind(this);
    this.handleFacebookChange = this.handleFacebookChange.bind(this);
    this.handleTelegramChange = this.handleTelegramChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleImageChange(e) {
    this.setState({ image: e.target.value });
  }
  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }
  handleBioChange(e) {
    this.setState({ bio: e.target.value });
  }
  handleInstagramChange(e) {
    this.setState({ instagram: e.target.value });
  }
  handleFacebookChange(e) {
    this.setState({ facebook: e.target.value });
  }
  handleTelegramChange(e) {
    this.setState({ telegram: e.target.value });
  }

  handleSubmit(e) {
  alert('Публикация создана: ' + this.state );
}

  render() {
    return (
      <div className ="form-total">
        <form className ="form-wrapper" onSubmit={this.handleSubmit}>
        <div className="head-text">
          <A_Heading
          headingStyle = 'heading--black'
          headingSize = 'heading--h3'>
          {"Редактировать профиль"}
          </A_Heading>
          <A_Textblock
          className="more-text"
          textStyle = 'text--gray'
          textSize = 'text--s-descript'>
            {"Эту информацию  вы можете увидеть в вашем профиле"}
          </A_Textblock>
        </div>

          <img src={this.props.user.image.small_thumb.url}/>
          <A_Input
              textChild ={"Изображение"}
              inputStyle="input--image"
              type="file"
              name="user[image]"
              value={this.state.image.url}
              onChange={this.handleImageChange}
            />
          <A_Input
            textChild ={"Имя пользователя"}
            inputStyle="input--main"
            type = 'text'
            name="post[title]"
            value={this.state.username}
            onChange={this.handleUsernameChange}
            />

          <A_Textarea
            textChild ={"Сведения о вашем профиле"}
            type = 'text'
            name="post[content]"
            value={this.state.bio}
            onChange={this.handleBioChange}
            />

          <div className="head-text">
            <A_Heading
            headingStyle = 'heading--black'
            headingSize = 'heading--article-preview'>
            {"Контакты"}
            </A_Heading>
            <A_Textblock className="text"
            className="more-text"
            textStyle = 'text--gray'
            textSize = 'text--s-descript'>
              {"Добавьте ссылку на любую соц. сеть, чтобы продолжить общение за пределами сервиса"}
            </A_Textblock>
          </div>

            <A_Input
              textChild ={"Instagram"}
              inputStyle="input--main"
              type = 'text'
              name="post[title]"
              value={this.state.instagram}
              onChange={this.handleInstagramChange}
              />
            <A_Input
              textChild ={"Facebook"}
              inputStyle="input--main"
              type = 'text'
              name="post[title]"
              value={this.state.facebook}
              onChange={this.handleFacebookChange}
              />
            <A_Input
              textChild ={"Telegram"}
              inputStyle="input--main"
              type = 'text'
              name="post[title]"
              value={this.state.telegram}
              onChange={this.handleTelegramChange}
              />
        </form>
      </div>

    );
  }
}

export default M_UserEdit
