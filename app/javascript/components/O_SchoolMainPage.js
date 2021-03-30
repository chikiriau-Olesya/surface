import React from "react"
import PropTypes from "prop-types"
import M_SchoolBanner from "./M_SchoolBanner.js"
import A_H3 from "./A_H3.js"



class O_SchoolMainPage extends React.Component {
  render() {
    return (
      <div className="O_SchoolMainPage">
        <M_SchoolBanner/>
        <A_H3
        content = "Направления">
        </A_H3>
      </div>
    );
  }
}

export default O_SchoolMainPage
