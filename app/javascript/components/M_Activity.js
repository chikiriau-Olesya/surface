import React from "react"
import PropTypes from "prop-types"
import 'stylesheets/M_Activity.scss'
import Act_Like from 'images/like_unclicked.svg'
import Act_Comment from 'images/comment_outline.svg'
import Act_Fav from 'images/unsaved.svg'

class M_Activity extends React.Component {
  render () {

    let commentNum = this.coments.count

    return (
      <div className="activity">
        <div className="like-com">
          <div className="activity_item">
            <img src={Act_Like}></img>
            <p>{likeNum}</p>
          </div>

          <div className="activity_item">
            <img src={Act_Comment}></img>
            <p>{commentNum}</p>
          </div>
        </div>
        <div className="activity_item">
          <img src={Act_Fav}></img>
        </div>
      </div>
    );
  }
}

export default M_Activity
