import React from "react"
import PropTypes from "prop-types"
import Insta from 'images/insta.svg'
import Fb from 'images/fb.svg'
import Telega from 'images/telega.svg'
import A_Avatar from './A_Avatar.js'
import A_Btn from './A_Btn.js'
import A_Heading from "./A_Heading.js"
import A_Textblock from "./A_Textblock.js"
import A_IconBtn from "./A_IconBtn.js"
import A_UserFollow from "./A_UserFollow.js"
import 'stylesheets/O_Profile.scss'


class O_Profile extends React.Component {
  render () {
    return (
      <div className="profileView">
        <div className="main-user-info">
          <A_Avatar user = {this.props.user}
            avatarStyle = 'avatar--default'
          />
          <div className = "user-text-info">

            <div className = "username-edit">
              <A_Heading
              headingStyle = 'heading--white'
              headingSize = 'heading--h2'>
              {this.props.user.username}
              </A_Heading>
              <A_IconBtn
              address={/users/ + `${this.props.user.id}`+ "/edit"}
              />
            </div>

              <A_Textblock
              textStyle = 'text--gray'
              textSize = 'text--descript'>
                {this.props.user.bio}
              </A_Textblock>

             <div className="profile-medias">
              <div className="socialMedia">
                <a href={"https://www.instagram.com/" + `${this.props.user.inst}`}>
                  <img src={Insta}></img>
                </a>
              </div>

              <div className="socialMedia">
                <a href={"https://www.facebook.com/" + `${this.props.user.fb}`}>
                  <img src={Fb}></img>
                </a>
              </div>

              <div className="socialMedia">
                <a href={"https://web.telegram.org/#/im?p=@" + `${this.props.user.tg}`}><img src={Telega}></img></a>
              </div>
            </div>
          </div>
        </div>
        <a href="#">
          <A_Btn
            type ='button'
            buttonStyle = 'btn--primary'
            buttonState = 'btn--primary'>
            {"Стать автором"}
          </A_Btn>
        </a>


      </div>
    );
  }
}

export default O_Profile
