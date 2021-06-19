import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_SchoolGallery.scss'

const A_SchoolGallery = ({
gallery
}) => {
    return (
      <div className="A_SchoolGallery">
        <div className="A_SchoolGallery--arrow">скролл ⟶</div>
        <div className="A_SchoolGallery--block" dangerouslySetInnerHTML={{__html: `${gallery}` }}></div>
      </div>
    );
}

export default A_SchoolGallery
