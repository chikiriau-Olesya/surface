import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_SchoolGallery.scss'

const A_SchoolGallery = ({
gallery
}) => {
    return (
      <div className="A_SchoolGallery" dangerouslySetInnerHTML={{__html: `${gallery}` }}></div>
    );
}

export default A_SchoolGallery
