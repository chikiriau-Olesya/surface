import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'
import A_Heading from './A_Heading.js'
import Sample from 'images/sample.png'
import 'stylesheets/M_City.scss'

class M_AdminCity extends React.Component {
  render() {
    return (
      <div className="city-wrapper">
        {this.props.cities.map(city => (
          <div key={city.id} className="city-item">
          <a href={/cities/ +`${city.id}`}>
            <div className="city-item-top">
              <A_Heading
              headingStyle = 'heading--white'
              headingSize = 'heading--h3'>
              {`${city.name}`}
              </A_Heading>
              <A_Textblock className="cat-text"
              textStyle = 'text--white'
              textSize = 'text--s-descript'>
                {`${city.school}`}
              </A_Textblock>
            </div>
              <div className="city-img">
                <img src={Sample}/>
              </div>
          </a>
          </div>
        ))}
      </div>
    );
  }
}

export default M_AdminCity
