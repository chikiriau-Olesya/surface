import React from "react"
import PropTypes from "prop-types"
import M_Activity from "./M_Activity.js"
import A_Heading from "./A_Heading.js"
import A_Category from "./A_Category.js"
import A_PlayBtn from "./A_PlayBtn.js"
import M_FunctionList from "./M_FunctionList.js"
// import 'stylesheets/O_Posts.scss'
import Play from 'images/playBtn.svg'



class O_Shorts_Preview extends React.Component {
  render() {
    return (
      <div className="post-preview">
        {this.props.posts.map(post => (
          <div className="post-preview-item">
            <a href={/posts/ +`${post.id}`} key={post.id} className="post-preview-block">
              <div className="cat-play-line">
                <A_PlayBtn
                imageSrc= {Play}
                />
              </div>
              <img className="post-preview-img" src={post.image.url}/>
            </a>
              <div className= "post-headline">
                <A_Heading
                headingStyle = 'heading--white'
                headingSize = 'heading--article'>
                {`${post.title}`}
                </A_Heading>
                <M_FunctionList/>
              </div>
          </div>
        ))}
      </div>
    );
  }
}

export default O_Shorts_Preview
