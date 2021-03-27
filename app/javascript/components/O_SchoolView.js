import React from "react"
import PropTypes from "prop-types"
import M_SchoolInf from "./M_SchoolInf.js"
import M_SchoolInnerMap from "./M_SchoolInnerMap.js"
import M_SchoolOffers from "./M_SchoolOffers.js"
import M_SchoolFacilities from "./M_SchoolFacilities.js"
import M_SchoolContacts from "./M_SchoolContacts.js"
import A_SchoolGalery from "./A_SchoolGalery.js"
import A_Btn from "./A_Btn.js"


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
        <div className="O_SchoolView-block">
          <A_SchoolGalery/>
          <M_SchoolContacts school = {this.props.school}/>
        </div>
        <A_Btn
          type ='submit'
          buttonStyle = 'btn--main'
          buttonState = 'btn--primary'>
          {"Редактировать"}
      </A_Btn>
      </div>
    );
  }
}


export default O_SchoolView
