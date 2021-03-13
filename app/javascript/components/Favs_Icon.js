import React from "react"
import PropTypes from "prop-types"
import Saved from 'images/saved.svg'
import Unsaved from 'images/unsaved.svg'


class Favs_Icon extends React.Component {
  render (src) {
    return (
      <div>
        <img src={Saved} />
      </div>
    );
  }
}

export default Favs_Icon
