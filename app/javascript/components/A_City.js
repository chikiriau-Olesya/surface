import React from "react"
import PropTypes from "prop-types"

class A_City extends React.Component {
  render () {
    let category = '';
    if (this.props.category) {
      category = this.props.category.name
    }

    let textpart = <span>{category}</span>

    return (
      <a className = "" >{textpart}</a>
    );
  }
}

export default A_City
