import React from "react"
import PropTypes from "prop-types"
import A_Category from "./A_Category.js"
import A_Heading from "./A_Heading.js"
import A_PlayBtn from "./A_PlayBtn.js"
import A_PostImg from "./A_PostImg.js"
import Play from "images/playBtn.svg"
import 'stylesheets/M_PostPreview.scss'


const STYLES = [
  'post--main',
  'post--wide',
  'post--super',
  'post--main--video',
  'post--wide--video',
  'post--main--nopic',
  'post--main--school',
]

const M_PostPreview = ({
  children,
  postStyle
}) => {

const checkPostStyle = STYLES.includes(postStyle)
? postStyle : STYLES[0]


  return (
    <div className = {`post ${checkPostStyle}`}>

      <div className="post-vis-part">
        <A_PostImg
          className="post-view-pic"
          source={this.props.post.image.url}
        />
        <div className="cat-play-line">
          <A_Category className="catName"
          category = {this.props.post.category}/>
          <A_PlayBtn className="play-btn"
          imageSrc={Play}/>
        </div>
      </div>

      <div className="post-text-part">
        <A_Heading className="post-title"
        headingStyle = 'heading--black'
        headingSize = 'heading--h3'>
        {this.props.post.title}
        </A_Heading>
      </div>
    </div>

  );
}


export default M_PostPreview
