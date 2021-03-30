import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import A_CityCategory from "./A_CityCategory.js"
import 'stylesheets/A_CityCategory.scss'


class M_CityCategories extends React.Component {
  render() {
    let schoolArray = '';
    let schoolNumber = schoolArray.lenght;
    return (
      <div>
        <A_H3
        content = "Направления">
         </A_H3>
         <A_CityCategory
         city = "Москва"
         textpart = "Москва"
         > </A_CityCategory>
         <div className='city--list'>
           {this.props.cities.map(city => (
             <a href={`/schools?city=${city.name}`} className="city--square" key={city.id}>
               <div className="city--name">{`${city.name}`}</div>
               <div>{schoolArray}</div>
             </a>
           ))}
         </div>
      </div>
    );
  }
}

export default M_CityCategories
