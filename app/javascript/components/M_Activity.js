import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_Activity.scss'
import Act_Like from 'images/like_unclicked.svg'
import Act_Comment from 'images/comment_outline.svg'
import Act_Fav from 'images/unsaved.svg'
import A_Likes from './A_Likes.js'
import A_Favorites from './A_Favorites.js'


class M_Activity extends React.Component {
  render () {
    return (
      <div className="activity">
        <div className="like-com">
          <div className="activity_item">
          <A_Likes
          post = {this.props.post}
          likes = {this.props.likes}
          current_user_id = {this.props.current_user_id}
          content = {this.props.content}
          />
          </div>

          <div className="activity_item">
            <img src={Act_Comment}></img>
            <p></p>
          </div>
        </div>
        <div className="activity_item">
        <A_Favorites
          post = {this.props.post}
          favorites = {this.props.favorites}
          current_user_id = {this.props.current_user_id}
          content = {this.props.content}
          />
        </div>
      </div>
    );
  }
}

export default M_Activity
