import React from "react"
import PropTypes from "prop-types"
import A_CategoryPreview from "./A_CategoryPreview.js"
import M_FunctionList from "./M_FunctionList.js"
import A_PlayBtn from "./A_PlayBtn.js"
import A_H4 from "./A_H4.js"
import Play from "images/playBtn.svg"
import 'stylesheets/M_PostPreview.scss'


class M_PostPreview extends React.Component {
  render() {

    let imgsrc = '';

    if (!this.props.post.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.post.image.url;
    }

    let postStyle = {
      backgroundImage: `url(${imgsrc})`,
      width: "28vw",
      height: "26vw",
      backgroundRepeat: "no-repeat"
    };


    return (
      <div className="post-preview">
      <a href={`/posts/${this.props.post.id}`} style={postStyle}  className="post-banner">

          <div className = "post-preview-cat">
            <A_CategoryPreview
              category = {this.props.post.category}
              categoryStyles = "default"/>
          </div>
      </a>
        <div className = "post-lower-part">
          <div className="post-banner-text">
            <A_H4 color="A_H4--black"
              content = {this.props.post.title}>
            </A_H4>
          </div>
          <div className="post-admin-actions">
            <M_FunctionList
            post ={this.props.post}/>
          </div>
        </div>
      </div>
    );
  }
}


export default M_PostPreview
