import React from "react"
import PropTypes from "prop-types"
import M_SchoolInf from "./M_SchoolInf.js"
import M_SchoolInnerMap from "./M_SchoolInnerMap.js"
import M_SchoolOffers from "./M_SchoolOffers.js"
import M_SchoolFacilities from "./M_SchoolFacilities.js"


class O_SchoolView extends React.Component {
  render() {
    return (
      <div className="O_SchoolView">
        <div className="O_SchoolView-block">
          <M_SchoolOffers school = {this.props.school}/>
          <M_SchoolInnerMap school = {this.props.school}/>
        </div>
        <div className="O_SchoolView-block">
          <M_SchoolInf school = {this.props.school}/>
          <M_SchoolFacilities school = {this.props.school}/>
        </div>
      </div>
    );
  }
}


export default O_SchoolView
