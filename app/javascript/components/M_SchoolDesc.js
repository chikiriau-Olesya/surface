import React from "react"
import PropTypes from "prop-types"
import A_H2 from "./A_H2.js"
import A_SchoolCity from "./A_SchoolCity.js"
import A_Textblock from "./A_Textblock.js"
import 'stylesheets/M_SchoolDesc.scss'

class M_SchoolDesc extends React.Component {
  render() {
    let city = '';
    if (this.props.city) {
      city = this.props.city.name
    }
    let textpart = <span>{city}</span>

    return (
      <div className="M_SchoolDesc">
        <div className="school_inner">
          <A_H2 className = 'heading--black'
            headingStyle = 'heading--black'
            content = {this.props.school.name}>
          </A_H2>
          <A_Textblock className="post-text"
          textStyle = 'text--black'
          textSize = 'text--body'>
            {`${this.props.school.description}`}
          </A_Textblock>

          <div>
          <A_SchoolCity
            city = {this.props.school.city_id}
            textpart = {this.props.school.city_id}
          />

          </div>
        </div>
      </div>
    );
  }
}

export default  M_SchoolDesc
