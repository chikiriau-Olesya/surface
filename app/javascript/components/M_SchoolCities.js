import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'
import A_Heading from './A_Heading.js'
// import 'stylesheets/M_SchoolCities.scss'

class M_SchoolCities extends React.Component {
  render() {
    return (
      <div className="city-wrapper">
        {this.props.cities.map(city => (
          <div key={city.id} className="city-item">
          <a href={/cities/ +`${city.id}`}>
            <div className="city-item-top">
              <img scr={`${city.image}`}></img>
              <A_Heading
              headingStyle = 'heading--white'
              headingSize = 'heading--h3'>
              {`${city.name}`}
              </A_Heading>
              <A_Textblock className="cat-text"
              textStyle = 'text--white'
              textSize = 'text--s-descript'>
                {`${city.schools}`}
              </A_Textblock>
            </div>
          </a>
          </div>
        ))}
      </div>
    );
  }
}

export default M_SchoolCities
