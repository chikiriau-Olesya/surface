import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import M_CityPreview from "./M_CityPreview.js"
import 'stylesheets/O_CityCategories.scss'


class O_CityCategories extends React.Component {
  render() {

    let schoolArray = '';
    let schoolNumber = schoolArray.lenght;

    return (
      <div className = "city-cats">
        <div className = "city-cats-title">
          <A_H3
          color ="A_H3--white"
          content = "Направления">
           </A_H3>
        </div>
         <div className='city--list'>
           {this.props.cities.slice(0, 3).map(city => (
             <a href={'/schools?city=' +`${city.id}`} key={city.id} className="city-item">
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
