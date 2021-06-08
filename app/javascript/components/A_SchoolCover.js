import React from "react"
import PropTypes from "prop-types"


class A_SchoolCover extends React.Component {
  render () {


    let imgsrc = '';

    if (!this.props.school.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.school.image.url;
    }

    return(
      <div className = "A_PicView">
        <img className = "A_PicView"
          src = {imgsrc}
        />
      </div>
    )
  }
}

export default A_SchoolCover
