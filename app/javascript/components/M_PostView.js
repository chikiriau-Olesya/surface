import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_PostView.scss'
import A_Hashtag from "./A_Hashtag"
import A_Category from "./A_Category.js"
import A_Heading from "./A_Heading.js"
import A_Textblock from './A_Textblock.js'

class M_PostView extends React.Component {
  render() {

      let myRe = new RegExp("#\\w+", "g");
      let myArray = [];
      let tag = null;
      while((tag = myRe.exec("#abc, #haefg #hij")) != null){
        myArray.push(tag[0]);
      }

      return (
        <div className="post-view">
          <img
          className="post-view-pic"
          src={this.props.post.image.url}/>

          <A_Category post = {this.props.post} category ={this.props.category}/>
          <div className="post-top-block">
            <A_Textblock
            textStyle = 'text--black'
            textSize = 'text--descript'>
              {`${this.props.post.created_at}`}
            </A_Textblock>
          </div>

          <div className="post-content">
            <A_Heading className="post-title"
            headingStyle = 'heading--black'
            headingSize = 'heading--h2'>
            {this.props.post.title}
            </A_Heading>
            <A_Textblock className="post-text"
            textStyle = 'text--black'
            textSize = 'text--body'>
              {`${this.props.post.content}`}
            </A_Textblock>
          </div>

           <A_Hashtag className="post-hashes" post = {this.props.post}/>
       </div>
      );
    }
}

export default M_PostView
