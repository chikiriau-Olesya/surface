import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'
import M_FunctionList from './M_FunctionList.js'
import 'stylesheets/M_AdminCity.scss'

class M_AdminCity extends React.Component {
  render() {
    return (
      <div className="admin-city-wrapper">
        {this.props.cities.map(city => (
          <div key={city.id} className="admin-city">
            <div className="admin-city-top">
              <a href={/cities/ +`${city.id}`} className="category--inPost">
              {`${city.name}`}
              </a>
              <M_FunctionList/>
            </div>
              <A_Textblock className="cat-text"
              textStyle = 'text--white'
              textSize = 'text--s-descript'>
                {`${city.school}`}
              </A_Textblock>
              <A_Textblock className="cat-text"
              textStyle = 'text--white'
              textSize = 'text--s-descript'>
                {`${city.description}`}
              </A_Textblock>
          </div>
        ))}
      </div>
    );
  }
}

export default M_AdminCity
