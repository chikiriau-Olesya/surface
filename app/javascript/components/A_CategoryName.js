import React from "react"
import PropTypes from "prop-types"
import './category.css'

const STYLES = [
  'category--default',
  'category--active',
  'category--inPost',
  'category--inArticle',
]

class A_CategoryName extends React.Component {
  render ({
    children,
    type,
    categoryStyle,
  }) {

    const checkCategoryStyle = STYLES.includes(categoryStyle)
  ? categoryStyle : STYLES[0]
    return (
      <button className =
      {`category ${checkCategoryStyle}`}
      categoryStyle= {categoryStyle} 
      type = {type}>
      {children}
      </button>
    );
  }
}

export default A_CategoryName
