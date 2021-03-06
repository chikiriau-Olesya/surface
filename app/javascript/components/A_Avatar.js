import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Avatar.scss'
import Unknown from "images/avatar-unknown.svg"
import Add from "images/avatar-add.svg"
import Blank from "images/avatar-blank.svg"

const STYLES = [
  'avatar--default',
  'avatar--default-small',
  'avatar--default-medium',
  'avatar--unknown',
  'avatar--add',
  'avatar--blank'
]

class A_Avatar extends React.Component {
  render () {
    let imgsrc = '';

    if (!this.props.user.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.user.image.url;
    }

    let avatarStyle = {
      backgroundImage: `url(${imgsrc})`
    };

    const checkAvatarStyle = STYLES.includes(this.props.avatarStyle)
    ? this.props.avatarStyle : STYLES[0]

    return (
      <div className = {`avatar ${checkAvatarStyle}`}>
        <div style={avatarStyle}></div>
      </div>
    );
  }
}

export default A_Avatar
