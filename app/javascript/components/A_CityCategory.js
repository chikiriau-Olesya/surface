import React from "react"
import PropTypes from "prop-types"
import A_H4 from "./A_H4.js"
import A_Textblock from './A_Textblock.js'
import 'stylesheets/A_CityCategory.scss'

class A_CityCategory extends React.Component {
  render() {

    return (
      <div className="A_CityCategory">
        <A_H4 color="A_H4--white"
          content = {this.props.city.name}>
        </A_H4>
      </div>
    );
  }
}


export default A_CityCategory
