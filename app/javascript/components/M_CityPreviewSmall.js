import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_Link from "./A_Link.js"
import A_Textblock from './A_Textblock.js'
import A_CityCategory from "./A_CityCategory.js"
import 'stylesheets/M_CityPreviewSmall.scss'

class M_CityPreviewSmall extends React.Component {
  render() {
        return (
          <div className = "M_CityPreviewSmall">
            <div className = "main--title">
              <A_H3
              color ="A_H3--black"
              content = "Где посерфить">
               </A_H3>
            </div>
             <div className="M_CityPreviewSmall--block">
               {this.props.cities.slice(0, 5).map(city => (
                 <a href={'/schools?city=' +`${city.id}`} key={city.id} className="M_CityPreviewSmall--block--item">
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
        );
  }
}


export default M_CityPreviewSmall
