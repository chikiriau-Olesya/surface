import React from "react"
import PropTypes from "prop-types"
import A_City from "./A_City.js"

class M_CityOne extends React.Component {
  render() {
    let category = '';
    if (this.props.category) {
      category = this.props.category.name
    }

    let textpart = <span>{category}</span>
    return (
      <div className="">
        <A_City
          category = {this.props.school.city}/>
      </div>
    );
  }
}


export default M_CityOne
