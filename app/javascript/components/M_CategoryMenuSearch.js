import React from "react"
import PropTypes from "prop-types"
class M_CategoryMenuSearch extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map(category => (
          <div key={category.name}>
              <a href={`/posts?category=${category.name}`}>{`${category.name}`}</a>
          </div>
        ))}
      </div>
    );
  }
}

export default M_CategoryMenuSearch
