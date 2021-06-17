import React from "react"
import PropTypes from "prop-types"

const A_SchoolOffer = ({
text
}) => {
    return (
      <div className="A_SchoolOffer">
        <div dangerouslySetInnerHTML={{__html: `${text}` }}></div>
      </div>
    );
}

export default A_SchoolOffer
