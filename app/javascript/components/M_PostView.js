import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_PostView.scss'
import A_Hashtag from "./A_Hashtag"
import A_Category from "./A_Category.js"
import A_H2 from "./A_H2.js"
import A_H5 from "./A_H5.js"
import A_PostDate from "./A_PostDate.js"
import A_Textblock from './A_Textblock.js'
import A_PicView from "./A_PicView.js"
import M_ComentForm from "./M_ComentForm.js"
import A_PostContent from "./A_PostContent.js"

class M_PostView extends React.Component {

  render() {

      let myRe = new RegExp("#\\w+", "g");
      let myArray = [];
      let tag = null;
      while((tag = myRe.exec("#abc, #haefg #hij")) != null){
        myArray.push(tag[0]);
      }

      let category = '';
      if (this.props.category) {
        category = this.props.category.name
      }
      let textpart = <span>{category}</span>


      let imgsrc = '';

      if (!this.props.post.image.url) {
        imgsrc = '';
      }  else {
        imgsrc = this.props.post.image.url;
      }

      let postInnerStyle = {
        backgroundImage: `url(${imgsrc})`
      };

      return (
        <div className="post-view">
          <div style={postInnerStyle} className="post-inner-banner">
          </div>

          <div className="post-content">
            <div className="post-info">
              <A_Category
                catStyle = "category--inPost"
                category = {this.props.post.category_id}
                textpart = {this.props.category.name}>
              </A_Category>
              <A_PostDate
                date = {this.props.post.created_at}>
              </A_PostDate>
            </div>

            <div className="post-text">
              <A_H2 className = 'heading--black'
                headingStyle = 'heading--black'
                content = {this.props.post.title}>
              </A_H2>

              <A_PostContent className="post-text"
              text = {this.props.post.content}
                />
            </div>
          </div>

       </div>
      );
    }
}

export default M_PostView
