import React from "react"
import PropTypes from "prop-types"
import Insta from 'images/insta.svg'
import Fb from 'images/fb.svg'
import Telega from 'images/telega.svg'
import A_Avatar from './A_Avatar.js'
import 'stylesheets/M_Profile.scss'


class M_Profile extends React.Component {
  render () {
    return (
      <div className="profileView">
        <div className="main-user-info">
          <A_Avatar user = {this.props.user}/>

            <h3>{this.props.user.username}</h3>
        </div>
        <p>{this.props.user.bio}</p>

        <div className="socialMedia">
          <img src={Insta}></img>
          <p>{this.props.user.inst}</p>
        </div>

        <div className="socialMedia">
          <img src={Fb}></img>
          <p>{this.props.user.fb}</p>
        </div>

        <div className="socialMedia">
          <img src={Telega}></img>
          <p>{this.props.user.tg}</p>
        </div>

      </div>
    );
  }
}

export default M_Profile
