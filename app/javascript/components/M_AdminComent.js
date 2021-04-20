import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'
import M_FunctionList from './M_FunctionList.js'
import A_Link from './A_Link.js'
import M_CommentUserLine from './M_CommentUserLine.js'
import 'stylesheets/M_Coment.scss'


class M_AdminComent extends React.Component {


  render() {
    return (
      <div className="admin-coment-wrapper">
        {this.props.coments.map(coment => (
          <div key={coment.id} className="coment-shape">
            <div className="admin-coment-top">
              <A_Textblock
              textStyle = 'text--black'
              textSize = 'text--s-descript'>
                {`${coment.user_id.username}`}
              </A_Textblock>
              <M_FunctionList/>
            </div>
              <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--s-descript'>
                {`${coment.body}`}
              </A_Textblock>
              <div className="admin-coment-low">
                <A_Textblock
                textStyle = 'text--black'
                textSize = 'text--s-descript'>
                  {`${coment.parent_id}`}
                </A_Textblock>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default M_AdminComent
