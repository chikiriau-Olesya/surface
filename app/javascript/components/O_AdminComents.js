import React from "react"
import PropTypes from "prop-types"

import 'stylesheets/O_AdminPosts.scss'
import A_Link from './A_Link.js'
import A_Icon from './A_Icon.js'
import O_Posts from './O_Posts.js'
import A_Btn from './A_Btn.js'
import A_H3 from './A_H3.js'
import A_Textblock from './A_Textblock.js'
import M_AdminNavbar from './M_AdminNavbar.js'
import M_FunctionList from './M_FunctionList.js'
import M_AdminComent from './M_AdminComent.js'

class O_AdminComents extends React.Component {
  render () {
    return (
      <div className="admin-view">
        <div className="admin-content">
          <div className="admin-top-line">
          <A_H3 className = 'heading--black'
            content = "Комментарии">
          </A_H3>
          </div>
          <div className="admin-second-line">
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--subbody'>
              {"Все комментарии"}
            </A_Textblock>

          </div>
          <div className="admin-posts">
          <M_AdminComent coments={this.props.coments}/>
          </div>
        </div>
      </div>
    );
  }
}

export default O_AdminComents
