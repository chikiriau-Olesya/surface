import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'
import A_Heading from './A_Heading.js'
import A_Hashtag from './A_Hashtag.js'
import A_Likes from './A_Likes.js'
import A_Favorites from './A_Favorites.js'
import Insta from 'images/insta.svg'
import Fb from 'images/fb.svg'
import Telega from 'images/telega.svg'
import 'stylesheets/M_PostFinal.scss'



class M_PostFinal extends React.Component {
  render() {
    return (
      <div className="post-final">
        <div className="post-final-inner">

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

          <div className="post-final-inner-hashtag">
            <A_Hashtag className="post-hashes" post = {this.props.post}/>
          </div>
          <A_Heading
          headingStyle = 'heading--white'
          headingSize = 'heading--article'>
            {"Поделись с такими же серфанутыми"}
          </A_Heading>
          <div className="media-share">
             <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Insta}/></a>
             <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Fb}/></a>
             <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Telega}/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default M_PostFinal
