import React from "react"
import PropTypes from "prop-types"
import A_Textblock from "./A_Textblock.js"


class A_UserFollow extends React.Component {
  render() {
    return (
      <div className="user-follow">
        <p>
          {this.props.user.followers.count}
        </p>
      </div>
    );
  }
}

export default A_UserFollow
