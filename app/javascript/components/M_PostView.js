import React from "react"
import PropTypes from "prop-types"
import A_Hashtag from "./A_Hashtag"

class M_PostView extends React.Component {
  render() {
      let myRe = new RegExp("#\\w+", "g");
      let myArray = [];
      let tag = null;
      while((tag = myRe.exec("#abc, #haefg #hij")) != null){
        myArray.push(tag[0]);
      }

      return (
       <A_Hashtag post = {this.props.post}/>
      );
    }
}

export default M_PostView
