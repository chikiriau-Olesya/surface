import React from "react"
import PropTypes from "prop-types"
import './category.css'

const STYLES = [
  'category--default',
  'category--active',
  'category--inPost',
  'category--inArticle',
]

class A_Category extends React.Component {
  render () {

    const checkCategoryStyle = STYLES.includes(categoryStyle)
  ? categoryStyle : STYLES[0]

    return (
      <div>
        <a href={`/categories/${this.props.category.id}`} className =
        {`category ${checkCategoryStyle}`} categoryStyle= {categoryStyle} >{this.props.category.name}</a>
      </div>
    );
  }
}

export default A_Category

ReactDOM.render(
    <A_Category />,
  document.getElementById('root')
);
