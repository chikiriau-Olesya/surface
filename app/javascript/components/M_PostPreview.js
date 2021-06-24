import React from "react"
import PropTypes from "prop-types"
import A_CategoryPreview from "./A_CategoryPreview.js"
import M_FunctionList from "./M_FunctionList.js"
import A_Favorites from "./A_Favorites.js"
import A_Likes from "./A_Likes.js"
import A_PlayBtn from "./A_PlayBtn.js"
import A_H4 from "./A_H4.js"
import Play from "images/playBtn.svg"
import 'stylesheets/M_PostPreview.scss'
import Icon from "images/card-icon.svg"


class M_PostPreview extends React.Component {
  render() {

    let imgsrc = '';

    if (!this.props.post.image.url) {
      imgsrc = '';
    }  else {
      imgsrc = this.props.post.image.url;
    }

    let postStyle = {
      backgroundImage: `url(${imgsrc})`
    };

    return (
      <div className="post-item">
        <a href={"/posts/" + `${this.props.post.id}`} className="post-preview">
          <div className="post-preview__card">
            <div style={postStyle} className="post-preview__banner">
              <div  className = "post-preview-cat">
                <img src = {Icon}></img>
              </div>
            </div>
            <div className="post-preview__banner__text">
                  <A_H4 color="A_H4--black"
                    content = {this.props.post.title}>
                  </A_H4>
            </div>
          </div>
        </a>

        <div className="activity--inPost">
          <div className="activity_item--inPost">
            <A_Likes
            post = {this.props.post}
            likes = {this.props.likes}
            current_user_id = {this.props.current_user_id}
            />
          </div>

          <div className="activity_item--inPost">
            <A_Favorites
              post = {this.props.post}
              favorites = {this.props.favorites}
              current_user_id = {this.props.current_user_id}
              />
          </div>
        </div>

      </div>
    );
  }
}


export default M_PostPreview
