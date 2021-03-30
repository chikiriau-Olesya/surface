import React from "react"
import PropTypes from "prop-types"
import M_Activity from "./M_Activity.js"
import A_Heading from "./A_Heading.js"
import 'stylesheets/O_Posts.scss'



class O_Posts extends React.Component {
  render() {
    return (
      <div className="post-preview">
        {this.props.posts.map(post => (
          <div>
            <a href={/posts/ +`${post.id}`} key={post.id} className="post-preview-item">
              <img className="post-preview-img" src={post.image.url}/>

              <A_Heading
              headingStyle = 'heading--black'
              headingSize = 'heading--article'>
              {`${post.title}`}
              </A_Heading>
            </a>
            <M_Activity/>

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
