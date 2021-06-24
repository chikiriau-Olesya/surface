import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_AdminNavbar.scss'
import A_Link from './A_Link.js'
import A_H3 from './A_H3.js'

class M_AdminNavbar extends React.Component {
  render () {
    return (
      <div className="admin-topbar">
        <div className="admin-topbar-inner">
          <A_H3 content = "Мастерская Surface"/>
          <div className="admin-links">
            <A_Link
              linkStyle ='link--white'
              name = 'Публикации'
              address = {'/admin'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Школы'
              address = {'/adminSchools'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Люди'
              address = {'/users'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Заявки'
              address = {'/questions'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Комментарии'
              address = {'/coments'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Категории'
              address = {'/categories'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Города'
              address = {'/cities'} >
            </A_Link>
            <A_Link
              linkStyle ='link--white'
              name = 'Статистика'
              address = {'"#'} >
            </A_Link>
          </div>
        </div>
      </div>
    );
  }
}

export default M_AdminNavbar
