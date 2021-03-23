import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_Hashtag.scss'

class A_Hashtag extends React.Component {
  render() {
      let myRe = new RegExp("#\\w+", "g");
      let myArray = [];
      let tag = null;
      while((tag = myRe.exec(this.props.post.tagline)) != null){
        myArray.push(tag[0]);
      }
      return (
        <div className = "A_Hashtag">
          {
            myArray.map(tag=> (<a href = {"/posts/hashtag/" + tag.replace(/\#/g, '')}>{tag}</a>))
          }
        </div>
      );
    }
}

export default A_Hashtag
