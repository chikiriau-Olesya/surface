import React from "react"
import PropTypes from "prop-types"
import M_Activity from "./M_Activity.js"
import A_Heading from "./A_Heading.js"
import A_Category from "./A_Category.js"
import A_PlayBtn from "./A_PlayBtn.js"
import M_FunctionList from "./M_FunctionList.js"
import 'stylesheets/O_Posts.scss'
import Play from 'images/playBtn.svg'



class O_Posts extends React.Component {
  render() {
    return (
      <div className="post-preview">
        {this.props.posts.map(post => (
          <div className="post-preview-item">
            <a href={/posts/ +`${post.id}`} key={post.id} className="post-preview-block">
              <div className="cat-play-line">
                // <A_Category
                // className="cat-inPreview"
                // catStyle="category--inPost"
                // category = {this.props.category}
                // />
                <A_PlayBtn
                imageSrc= {Play}
                />
              </div>
              <img className="post-preview-img" src={post.image.url}/>
            </a>
              <div className= "post-headline">
                <A_Heading
                headingStyle = 'heading--black'
                headingSize = 'heading--article'>
                {`${post.title}`}
                </A_Heading>
                <M_FunctionList/>
              </div>
            // <M_Activity
            // post = {this.props.post}
            // current_user_id={this.props.current_user_id}
            // likes = {this.props.likes}/>

          </div>
        ))}
      </div>
    );
  }
}

O_Posts.propTypes = {
  posts: PropTypes.array
};

export default O_Posts
