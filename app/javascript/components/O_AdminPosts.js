import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/O_AdminPosts.scss'
import A_Link from './A_Link.js'
import A_Icon from './A_Icon.js'
import O_Posts from './O_Posts.js'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'
import A_Textblock from './A_Textblock.js'
import M_AdminSidebar from './M_AdminSidebar.js'
import M_FunctionList from './M_FunctionList.js'
import M_DropDown from './M_DropDown.js'

class O_AdminPosts extends React.Component {
  render () {
    return (
      <div className="admin-view">
        <div className="admin-content">
          <div className="admin-top-line">
          <A_H3 className = 'heading--black'
            content = "Публикации Surface">
          </A_H3>
          <A_Btn
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Новая публикация"}
          <a href="/posts/newmagazine"/>
          </A_Btn>
          </div>
          <div className="admin-second-line">
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--subbody'>
              {"Все публикации"}
            </A_Textblock>
            <M_DropDown/>
          </div>
          <div className="admin-posts">
          <O_Posts posts={this.props.posts}/>
          <M_FunctionList/>
          </div>
        </div>
      </div>
    );
  }
}

export default O_AdminPosts
