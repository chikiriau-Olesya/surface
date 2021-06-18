import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_Link from "./A_Link.js"

class M_SchoolMainTitleMobile extends React.Component {
  render () {
    return (
      <div className="M_SchoolMainTitleMobile">
        <A_H3
          content = "Направления">
        </A_H3>
        <A_Link
          linkStyle ='link--blue'
          name = 'См.еще'
          address = {'/schoolsCities'} >
        </A_Link>
      </div>
    );
  }
}

export default M_SchoolMainTitleMobile
