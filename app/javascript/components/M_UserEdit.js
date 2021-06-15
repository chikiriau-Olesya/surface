import React from "react"
import PropTypes from "prop-types"
import A_Input from './A_Input.js'
import A_Btn from './A_Btn.js'
import A_H5 from './A_H5.js'
import A_Heading from './A_Heading.js'
import A_Textblock from './A_Textblock.js'
import M_SideProfileMenu from './M_SideProfileMenu.js'

  class M_UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.user.username ? props.user.username : '',
      bio: props.user.bio ? props.user.bio : '',
      instagram: props.user.inst ? props.user.inst : '',
      facebook: props.user.fb ? props.user.fb : '',
      telegram: props.user.tg ? props.user.tg : '',
      user: props.user ? props.user : '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleBioChange = this.handleBioChange.bind(this);
    this.handleInstagramChange = this.handleInstagramChange.bind(this);
    this.handleFacebookChange = this.handleFacebookChange.bind(this);
    this.handleTelegramChange = this.handleTelegramChange.bind(this);
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

  render() {
    return (
      <div className ="form-wrapper">
        <div className="head-text">
          <A_Heading
          headingStyle = 'heading--black'
          headingSize = 'heading--h3'>
          {"Редактировать профиль"}
          </A_Heading>
        </div>

        <A_Input
          textChild ={"Имя пользователя"}
          inputStyle="input--main"
          type = 'text'
          name="user[username]"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />

        <A_H5
        content = "Пару слов о вас">
        </A_H5>
        <textarea
        textChild ={"Сведения о вашем профиле"}
        type = 'text'
        name="user[bio]"
        value={this.state.bio}
        onChange={this.handleBioChange}
        />
        
        <textarea
        type = 'hidden'
        name="user[user]"
        value={this.state.user}
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
        <div className="media-inputs">

        <A_H5
        content = "Инстаграм">
        </A_H5>
          <input className="input"
            type = 'text'
            name="user[inst]"
            value={this.state.instagram}
            onChange={this.handleInstagramChange}
            />

            <A_H5
            content = "Фейсбук">
            </A_H5>
          <input className="input"
            type = 'text'
            name="user[fb]"
            value={this.state.facebook}
            onChange={this.handleFacebookChange}
            />

            <A_H5
            content = "Телеграм">
            </A_H5>
          <input className="input"
            type = 'text'
            name="user[tg]"
            value={this.state.telegram}
            onChange={this.handleTelegramChange}
            />
          </div>

          <A_Btn
            type ='submit'
            buttonStyle = 'btn--main'
            buttonState = 'btn--primary'>
            {"Сохранить"}
          </A_Btn>
      </div>
    );
  }
}

export default M_UserEdit
