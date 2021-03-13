import React from "react"
import PropTypes from "prop-types"
import Likee from 'images/like_clicked.svg'
import Unlikee from 'images/like_unclicked.svg'


class Like_Icon extends React.Component {
  render (src) {
    return (
      <div>
        <img src={Likee} />
      </div>
    );
  }
}

export default Like_Icon
