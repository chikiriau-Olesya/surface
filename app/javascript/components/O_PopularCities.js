import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_CityCategory from "./A_CityCategory.js"
import M_CityPreview from "./M_CityPreview.js"
import 'stylesheets/M_CityCategory.scss'


class O_PopularCities extends React.Component {
  render() {
    let schoolArray = '';
    let schoolNumber = schoolArray.lenght;
    return (
      <div className=' O_PopularCities'>
        <div className='O_PopularCities--list'>
          {this.props.cities.slice(0, 4).map(city => (
            <a href={'/schools?city=' +`${city.id}`} key={city.id} className="">
              <M_CityPreview
              key = {city.id}
              city = {city}
              />
            </a>
          ))}
          <a className='O_PopularCities--link' href ={'/schoolsCities'}>
          <span>+8 направлений</span>
          </a>
        </div>
      </div>
    );
  }
}

export default O_PopularCities
