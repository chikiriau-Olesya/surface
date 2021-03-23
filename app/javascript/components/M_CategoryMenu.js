import React from "react"
import PropTypes from "prop-types"
class M_CategoryMenu extends React.Component {
  render() {
    return (
      <div>
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
