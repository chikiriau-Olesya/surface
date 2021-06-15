import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_H5 from "./A_H5.js"
import CityWave from 'images/city-preview-wave.svg'
import 'stylesheets/M_CityPreview.scss'

class M_CityPreview extends React.Component {
  render() {

    let imgsrc = '';

    if (!this.props.city.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.city.image.url;
    }

    let cityStyle = {
      backgroundImage: `url(${imgsrc})`,
      width: "416px",
      height: "382px"
    };


    return (
      <div className="city-preview">
        <div style={cityStyle} className="city-banner">
          <div className="city-banner-text">
          <A_H3 color="A_H3--white"
            content = {this.props.city.name}>
          </A_H3>
          <A_H5 color="A_H5--white"
            headingStyle = 'heading--white'
            content = {this.props.city.description}>
          </A_H5>
          </div>
          <img src={CityWave} className = "city-banner-img"></img>
        </div>

      </div>
    );
  }
}


export default M_CityPreview
