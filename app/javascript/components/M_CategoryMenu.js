import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_CategoryMenu.scss'
class M_CategoryMenu extends React.Component {
  render() {
    return (
      <div className="all-cats">
        <a href={`/posts`}>Все</a>
        {this.props.categories.map(category => (
          <div key={category.id}>
              <a href={`/posts?category=${category.name}`}>{`${category.name}`}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default M_CategoryMenu
