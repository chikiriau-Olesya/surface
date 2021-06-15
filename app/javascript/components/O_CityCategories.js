import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_CityCategory from "./A_CityCategory.js"
import M_CityPreview from "./M_CityPreview.js"
import 'stylesheets/M_CityCategory.scss'


class O_CityCategories extends React.Component {
  render() {

    let schoolArray = '';
    let schoolNumber = schoolArray.lenght;
    return (
      <div className = "city-cats">
        <A_H3
        content = "Направления">
         </A_H3>
         <div className='city--list'>
           {this.props.cities.map(city => (
             <a href={`/schools?city=${city}`}>
               <M_CityPreview
               key = {city.id}
               city = {city}
               />
             </a>
           ))}
         </div>
      </div>
    );
  }
}

export default O_CityCategories
