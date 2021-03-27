import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/A_Category.scss'


const STYLES = [
  'category--default',
  'category--active',
  'category--inPost',
  'category--inArticle'
]

class A_Category extends React.Component {
  render () {
      let category = '';
      if (this.props.category_id) {
        category = this.props.category.name
      }
      return (
        <div className = "category">{category}</div>
      );
    }
}

export default A_Category
