import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_H5 from "./A_H5.js"
import A_Textblock from './A_Textblock.js'
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
    };

    return (
      <div className="city-preview">
        <div style={cityStyle} className="city-preview__banner"></div>
          <div className="city-preview__banner__text">
            <A_H3 color="A_H3--white"
              content = {this.props.city.name}>
            </A_H3>
            <A_Textblock className="cat-text"
            textStyle = 'text--white'
            textSize = 'text--s-descript'>
              {this.props.city.name}
            </A_Textblock>
        </div>

      </div>
    );
  }
}


export default M_CityPreview
