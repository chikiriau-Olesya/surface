import React from "react"
import PropTypes from "prop-types"

import 'stylesheets/O_AdminPosts.scss'
import A_Link from './A_Link.js'
import A_Icon from './A_Icon.js'
import O_Posts_Preview from './O_Posts_Preview.js'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'
import A_Textblock from './A_Textblock.js'
import M_AdminNavbar from './M_AdminNavbar.js'
import M_FunctionList from './M_FunctionList.js'
import M_DropDown from './M_DropDown.js'
import A_Select from './A_Select.js'


class O_AdminPosts extends React.Component {
  render () {
    return (
      <div className="admin-view">
        <div className="admin-content">
          <div className="admin-top-line">
            <A_Select
              title={"Категория"}
              name="post[category_id]"
              value={this.props.category}
              placeholder={"Категория"}
              handleChange={this.handleCategoryChange}
              options={this.props.categories}
            />
            <a href="/posts/newmagazine">
              <A_Btn
              buttonStyle = 'btn--main'
              buttonState = 'btn--primary'>
              {"Новая публикация"}
              </A_Btn>
            </a>
          </div>
          <div className="admin-posts">
          <O_Posts_Preview posts={this.props.posts}/>
          <M_FunctionList/>
          </div>
        </div>
      </div>
    );
  }
}

export default O_AdminPosts
