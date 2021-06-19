import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_PostContent.scss'

const A_PostContent = ({
text
}) => {
    return (
      <div className="post-content-text">
        <p dangerouslySetInnerHTML={{__html: `${text}` }}></p>
      </div>
    );
}

export default A_PostContent
