import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_AdminNavbar.scss'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'

class M_AdminNavbar extends React.Component {
  render () {
    return (
      <div className="admin-topbar">
        <div className="admin-topbar-inner">
          <A_H3 content = "Мастерская Surface"/>
          <div className="admin-links">
            <A_Btn buttonStyle = 'btn--admin--white'
            buttonState = 'btn--primary'>
              <a href="/admin" className="admin-list-item">
                {"Публикации"}
              </a>
            </A_Btn>
            <A_Btn buttonStyle = 'btn--admin--transp'>
              <a href="/schoolsMain" className="admin-list-item">
                {"Школы"}
              </a>
            </A_Btn>

            <A_Btn buttonStyle = 'btn--admin--transp'>
              <a href="/users" className="admin-list-item">
                {"Люди"}
              </a>
            </A_Btn>

            <A_Btn buttonStyle = 'btn--admin--transp'>
              <a href="/questions" className="admin-list-item">
                {"Заявки"}
              </a>
            </A_Btn>

            <A_Btn buttonStyle = 'btn--admin--transp'>
              <a href="/coments" className="admin-list-item">
                {"Комментарии"}
              </a>
            </A_Btn>

            <A_Btn buttonStyle = 'btn--admin--transp'>
              <a href="/categories" className="admin-list-item">
                {"Категории"}
              </a>
            </A_Btn>

            <A_Btn buttonStyle = 'btn--admin--transp'>
              <a href="#" className="admin-list-item">
                {"Теги"}
              </a>
            </A_Btn>

            <A_Btn buttonStyle = 'btn--admin--transp'>
              <a href="#" className="admin-list-item">
                {"Статистика"}
              </a>
            </A_Btn>
          </div>
        </div>
      </div>
    );
  }
}

export default M_AdminNavbar
