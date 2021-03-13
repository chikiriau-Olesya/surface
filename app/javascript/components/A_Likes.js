import React from "react"
import PropTypes from "prop-types"
import Like_Icon from "./Like_Icon.js"

class A_Likes extends React.Component {

  constructor(props) {
      super(props);
      this.state={
        likes_count: this.props.likes.length,
        pre_like: this.props.likes.find((element, index, array) => {return element.user_id ==this.props.current_user_id})
      }
}



  componentDidMount(e) {
      this.setState({
        token: document.querySelector('meta[name="csrf-token"]').content
      })
  }





  handleClick = () => {

let requestOption = {method: ''}
if(this.state.pre_like) {
  requestOption.method = 'DELETE';
  this.setState({
    likes_count:  this.state.likes_count-1
  });
}
  else {requestOption .method = 'POST';
  this.setState({
    likes_count:  this.state.likes_count+1
  });
}

let requestUrl = "/posts/"+this.props.post.id+"/likes";
if(this.state.pre_like) requestUrl+="/"+this.state.pre_like.id;
requestUrl+="?authenticity_token="+encodeURIComponent(this.state.token);


  fetch(requestUrl, requestOption).then((response) => {
    return response.json();
  }).then((result) => {
    this.setState({
      pre_like: result})
  });
}


  render () {

    let like_button_class = "like_button";
    if (this.state.pre_like) {
      like_button_class +=  " like_button--checked"

    }

    return (
      <div className="like">
        <div className={like_button_class} onClick={() => this.handleClick()}>
          <Like_Icon/>
        </div>
        <div>{this.state.likes_count}</div>
      </div>
    );

  }
}

export default A_Likes
