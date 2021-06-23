import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"
import A_Link from "./A_Link.js"
import A_Textblock from './A_Textblock.js'
import A_CityCategory from "./A_CityCategory.js"
import 'stylesheets/M_CityPreviewSmall.scss'
import Bc1 from "images/CityPreviewSmall-bc1.svg"

class M_CityPreviewSmall extends React.Component {
  render() {
    var sectionStyle = {
      backgroundImage: `url(${Bc1})`
    };
        return (
          <div className = "M_CityPreviewSmall-wrapper">
            <div className = "M_CityPreviewSmall">
              <div className = "main--title">
                <A_H4
                color ="A_H4--grey"
                content = "Где посерфить">
                 </A_H4>
              </div>
               <div className="M_CityPreviewSmall--block">
                 {this.props.cities.slice(0, 5).map(city => (
                   <a style={sectionStyle} href={'/schools?city=' +`${city.id}`} key={city.id} className="M_CityPreviewSmall--block--item">
                     <A_CityCategory
                     key = {city.id}
                     city = {city}
                     />
                   </a>
                 ))}
                 <div className="M_CityPreviewSmall--block--link">
                   <a href ={'/schoolsCities'}>
                     <div className="M_CityPreviewSmall--block--link--img"></div>
                     <span> есть еще</span>
                   </a>
                 </div>
               </div>
            </div>
          </div>
        );
  }
}


export default M_CityPreviewSmall
