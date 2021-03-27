import React from "react"
import PropTypes from "prop-types"
class A_Avatar extends React.Component {
  render () {
    return (
      <img className="avatar"
        src={this.props.user.image.small_thumb.url}
        alt={this.props.user.name}
      />
    );
  }
}

export default A_Avatar
