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

    const checkAvatarStyle = STYLES.includes(this.props.avatarStyle)
    ? this.props.avatarStyle : STYLES[0]

    return (
      <div className = {`avatar ${checkAvatarStyle}`}>
        <img className="avatar-pic"
          src={this.props.user.image.small_thumb.url}
          alt={this.props.user.name}
        />
        <img className="avatar-pic"
          src={Unknown}
        />
        <img className="avatar-pic"
          src={Add}
        />
        <img className="avatar-pic"
          src={Blank}
        />
      </div>
    );
  }
}

export default A_Avatar
