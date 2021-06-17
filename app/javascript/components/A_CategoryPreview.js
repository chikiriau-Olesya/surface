import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Category.scss'

const STYLES = [
  'default'
]

class A_CategoryPreview extends React.Component {
  render () {
    let category = '';
    if (this.props.category) {
      category = this.props.category.name
    }

    let checkCategoryStyles = STYLES.includes(this.props.categoryStyles)
    ? this.props.categoryStyles : STYLES[0]

    let textpart = <span>{category}</span>

    return (
      <p
      className = {`category ${checkCategoryStyles}`}
      >{textpart}</p>
    );
  }
}

export default A_CategoryPreview
