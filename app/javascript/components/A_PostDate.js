import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Textblock.scss'

const A_PostDate = ({
date
}) => {
    return (
      <div className="textblock text--descript">
        {date}
      </div>
    );
}


export default A_PostDate
