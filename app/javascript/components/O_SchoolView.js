import React from "react"
import PropTypes from "prop-types"
import A_SchoolGalery from "./A_SchoolGalery.js"
import A_Btn from "./A_Btn.js"
import A_SchoolCover from "./A_SchoolCover.js"
import M_SchoolInf from "./M_SchoolInf.js"
import M_SchoolInnerMap from "./M_SchoolInnerMap.js"
import M_SchoolOffers from "./M_SchoolOffers.js"
import M_SchoolFacilities from "./M_SchoolFacilities.js"
import M_SchoolContacts from "./M_SchoolContacts.js"
import M_SchoolDesc from "./M_SchoolDesc.js"
import M_ShareSocials from "./M_ShareSocials.js"


class O_SchoolView extends React.Component {
  render() {

    let imgsrc = '';

    if (!this.props.school.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.school.image.url;
    }

    var sectionStyle = {
      backgroundImage: `url(${imgsrc})`
    };

    return (
      <div className="O_SchoolView">
        <div className="O_SchoolView-block">
          <div style={sectionStyle} className="school-banner">
          </div>
        </div>
        <div className="O_SchoolView-block">
          <M_SchoolDesc
            school = {this.props.school}
            surftype = {this.props.surftype}
            />
        </div>
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

        <div className="">
          <M_ShareSocials/>
        </div>
      </div>
    );
  }
}


export default O_SchoolView
