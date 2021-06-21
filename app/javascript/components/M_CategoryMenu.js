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

    // let categStyle = '';
    // const getAddress = window.location.pathname;
    //
    // if (getAddress == `/posts?category=${category.id}`) {
    //   categStyle = {
    //     backgroundColor: "#101010",
    //     color: "#fff"
    //   };
    // }  else {
    //   categStyle = {
    //     backgroundColor: "#EEF2F6",
    //     color: "#000"
    //   };
    // }

    // let btn_class = this.state.black ? "blackButton" : "whiteButton";

    return (
      <div className="all-cats">
        <a href={`/posts`} className="category">Все</a>
        {this.props.categories.map(category => (
          <div key={category.id}>
              <a href={`/posts?category=${category.id}`}
               className="category">
              {`${category.name}`}
              </a>
          </div>
        ))}
      </div>
    );
  }
}

export default M_CategoryMenu
