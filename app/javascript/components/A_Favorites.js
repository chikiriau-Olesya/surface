import React from "react"
import PropTypes from "prop-types"
import Favs_Icon from "./Favs_Icon.js"

class A_Favorites extends React.Component {

  constructor(props) {
      super(props);
      this.state={
        favorites_count: this.props.favorites.length,
        pre_favorite: this.props.favorites.find((element, index, array) => {return element.user_id ==this.props.current_user_id})
      }
}



  componentDidMount(e) {
      this.setState({
        token: document.querySelector('meta[name="csrf-token"]').content
      })
  }





  handleClick = () => {

let requestOption = {method: ''}
if(this.state.pre_favorite) {
  requestOption.method = 'DELETE';
  this.setState({
    favorites_count:  this.state.favorites_count-1
  });
}
  else {requestOption.method = 'POST';
  this.setState({
    favorites_count: this.state.favorites_count+1
  });
}

let requestUrl = "/posts/"+this.props.post.id+"/likes";
if(this.state.pre_favorite) requestUrl+="/"+this.state.pre_favorite.id;
requestUrl+="?authenticity_token="+encodeURIComponent(this.state.token);


  fetch(requestUrl, requestOption).then((response) => {
    return response.json();
  }).then((result) => {
    this.setState({
      pre_favorite: result})
  });
}


  render () {

    let fav_button_class = "fav_button";
    if (this.state.pre_favorite) {
      fav_button_class +=  " fav_button--checked"
    }

    return (
      <div className="fav">
        <div className={fav_button_class} onClick={() => this.handleClick()}>
          <Favs_Icon/>
        </div>
        <div>{this.state.favorites_count}</div>
      </div>
    );

  }
}

export default A_Favorites
