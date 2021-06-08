import React from "react"
import PropTypes from "prop-types"
import M_MapInner from "./M_MapInner.js"

class M_SchoolInnerMap extends React.Component {
  render() {
    return (
      <div className="M_SchoolInnerMap">
        <div>
          <M_MapInner school = {this.props.school}/>
        </div>
        <div>{`${this.props.school.longitude}`}</div>
        <div>{`${this.props.school.latitude}`}</div>
      </div>
    );
  }
}


export default M_SchoolInnerMap
