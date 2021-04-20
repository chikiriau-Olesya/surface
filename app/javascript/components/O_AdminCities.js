import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/O_AdminCats.scss'
import A_Link from './A_Link.js'
import A_Icon from './A_Icon.js'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'
import A_Textblock from './A_Textblock.js'
import M_AdminNavbar from './M_AdminNavbar.js'
import M_FunctionList from './M_FunctionList.js'
import M_DropDown from './M_DropDown.js'
import M_AdminCity from './M_AdminCity.js'

class O_AdminCities extends React.Component {
  render () {
    return (
      <div className="admin-view">
        <div className="admin-content">
          <div className="admin-top-line">
          <A_H3 className = 'heading--black'
            content = "Категории">
          </A_H3>
          <a href="/cities/new">
            <A_Btn
            buttonStyle = 'btn--main'
            buttonState = 'btn--primary'>
            {"Добавить город"}

            </A_Btn>
          </a>
          </div>
          <div className="admin-second-line">
            <A_Link linkStyle = 'link--black' name="Категории медиа" address="/categories"/>
            <A_Link linkStyle = 'link--black' name="Города" address="/cities"/>
          </div>
          <div className="admin-cats">
          <M_AdminCity cities={this.props.cities}
          school = {this.props.school}/>
          </div>
        </div>
      </div>
    );
  }
}

export default O_AdminCities
