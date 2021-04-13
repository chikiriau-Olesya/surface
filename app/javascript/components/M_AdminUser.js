import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'
import M_FunctionList from './M_FunctionList.js'
import A_Link from './A_Link.js'
import 'stylesheets/M_AdminUser.scss'


class M_AdminUser extends React.Component {
  render() {
    return (
      <div className="admin-user-wrapper">
        {this.props.users.map(user => (
          <div key={user.id} className="admin-user">
            <div className="admin-user-top">
              <A_Textblock
              textStyle = 'text--black'
              textSize = 'text--s-descript'>
                {`${user.username}`}
              </A_Textblock>
              <M_FunctionList href={/users/ +`${user.id}` + /edit/}/>
            </div>
              <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--s-descript'>
                {`${user.email}`}
              </A_Textblock>
              <div className="admin-user-low">
                <A_Textblock
                textStyle = 'text--black'
                textSize = 'text--s-descript'>
                  {`${user.isadmin}`}
                </A_Textblock>
                <A_Link linkStyle = 'link--black' address={/users/ +`${user.id}`} name="Перейти"/>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default M_AdminUser
