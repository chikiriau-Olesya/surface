import React from "react"
import PropTypes from "prop-types"
import Insta from 'images/insta.svg'
import Fb from 'images/fb.svg'
import Telega from 'images/telega.svg'
import A_Avatar from './A_Avatar.js'
import A_Heading from "./A_Heading.js"
import A_Textblock from "./A_Textblock.js"
import A_IconBtn from "./A_IconBtn.js"
import A_UserFollow from "./A_UserFollow.js"
import 'stylesheets/M_Profile.scss'


class M_Profile extends React.Component {
  render () {
    // let followersNumb = <p>Подписчики:{this.props.user.followees.all}</p>;

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


            <A_Textblock className="prof-desc"
            textStyle = 'text--white'
            textSize = 'text--descript'>
              {this.props.user.bio}
            </A_Textblock>
            <div className="user-follows">
            </div>


            <div className="profile-medias">
              <div className="socialMedia">
                <img src={Insta}></img>
                <A_Textblock className="prof-desc"
                textStyle = 'text--white'
                textSize = 'text--subbody'>
                  {this.props.user.inst}
                </A_Textblock>
              </div>

              <div className="socialMedia">
                <img src={Fb}></img>
                <A_Textblock className="prof-desc"
                textStyle = 'text--white'
                textSize = 'text--subbody'>
                  {this.props.user.fb}
                </A_Textblock>
              </div>

              <div className="socialMedia">
                <img src={Telega}></img>
                <A_Textblock className="prof-desc"
                textStyle = 'text--white'
                textSize = 'text--subbody'>
                  {this.props.user.tg}
                </A_Textblock>
              </div>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default M_Profile
