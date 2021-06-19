import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/O_AdminCats.scss'
import A_Link from './A_Link.js'
import A_Icon from './A_Icon.js'
import O_PostsPreview from './O_PostsPreview.js'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'
import A_Textblock from './A_Textblock.js'
import M_AdminNavbar from './M_AdminNavbar.js'
import M_FunctionList from './M_FunctionList.js'
import M_AdminCat from './M_AdminCat.js'

class O_AdminCats extends React.Component {
  render () {
    return (
      <div className="admin-view">
        <M_AdminNavbar/>
        <div className="admin-content">
          <div className="admin-top-line">
          <A_H3 className = 'heading--black'
            content = "Категории">
          </A_H3>
          <a href="/categories/new">
          <A_Btn
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Добавить категорию"}
          </A_Btn>
          </a>
          </div>
          <div className="admin-second-line">
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--subbody'>
              {"Категории медиа"}
            </A_Textblock>
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--subbody'>
              {"Города"}
            </A_Textblock>
          </div>
          <div className="admin-cats">
          <M_AdminCat categories={this.props.categories}/>
          </div>
        </div>
      </div>
    );
  }
}

export default O_AdminCats
