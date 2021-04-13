import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/O_AdminUsers.scss'
import A_Link from './A_Link.js'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'
import A_Textblock from './A_Textblock.js'
import M_AdminUser from './M_AdminUser.js'

class O_AdminUsers extends React.Component {
  render () {
    return (
      <div className="admin-view">
        <div className="admin-content">
          <div className="admin-top-line">
          <A_H3 className = 'heading--black'
            content = "Все пользователи">
          </A_H3>
          <A_Btn
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Пригласить участника"}
          <a href="/posts/newmagazine"/>
          </A_Btn>
          </div>
          <div className="admin-second-line">
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--subbody'>
              {"Команда"}
            </A_Textblock>
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--subbody'>
              {"Авторы"}
            </A_Textblock>
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--subbody'>
              {"Пользователи"}
            </A_Textblock>
          </div>
          <div className="admin-posts">
          <M_AdminUser users={this.props.users}/>
          </div>
        </div>
      </div>
    );
  }
}

export default O_AdminUsers
