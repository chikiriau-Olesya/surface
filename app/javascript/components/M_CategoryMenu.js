import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_CategoryMenu.scss'
import 'stylesheets/A_Category.scss'
class M_CategoryMenu extends React.Component {

  constructor(){
      super();

      this.state = {
         black: true
      }
  }

  changeColor(){
      this.setState({black: !this.state.black})
   }

  render() {
    return (
      <div className="all-cats">
        <a href={`/posts`} className="category">Все</a>
        {this.props.categories.map(category => (
          <a key={category.id} href={`/posts?category=${category.id}`}
           className="category">
          {`${category.name}`}
          </a>
        ))}
      </div>
    );
  }
}

export default M_CategoryMenu
