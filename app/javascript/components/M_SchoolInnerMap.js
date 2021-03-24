import React from "react"
import PropTypes from "prop-types"
import M_MainMap from "./M_MainMap.js"

class M_SchoolInnerMap extends React.Component {
  render() {
    return (
      <div className="M_SchoolInnerMap">
        <M_MainMap className="M_SchoolInnerMap-map"/>
        <div>{`${this.props.school.longitude}`}</div>
        <div>{`${this.props.school.latitude}`}</div>
      </div>
    );
  }
}


export default M_SchoolInnerMap
