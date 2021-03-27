import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'


class A_PostDate extends React.Component {
  render() {
    return (
      <div className="post-date">
        <p>
         {this.props.created_at}
        </p>
      </div>
    );
  }
}

export default A_PostDate
