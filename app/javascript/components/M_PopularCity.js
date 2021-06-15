import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_H5 from "./A_H5.js"
import SideWave from 'images/side-city-wave-big.svg'
import SideWaveS from 'images/side-city-wave-small.svg'
import 'stylesheets/M_PopularCity.scss'

class M_PopularCity extends React.Component {
  render() {

    let imgsrc = '';

    if (!this.props.city.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.city.image.url;
    }

    let cityStyle = {
      backgroundImage: `url(${imgsrc})`,
      width: "640px",
      height: "254px"
    };


    return (
      <div className="pop-city-preview">
        <div style={cityStyle} className="pop-city-banner">
          <div className="pop-city-banner-text">
          <A_H3 color="A_H3--white"
            content = {this.props.city.name}>
          </A_H3>
          <A_H5 className = 'heading--white'
            headingStyle = 'heading--white'
            content = {this.props.city.description}>
          </A_H5>
          </div>
          <img src={SideWave} className = "pop-city-banner-img"></img>
        </div>

      </div>
    );
  }
}


export default M_PopularCity
