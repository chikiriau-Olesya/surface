import React from "react"
import PropTypes from "prop-types"
import "stylesheets/O_Post_Previews.scss"
import A_CategoryName from "./A_CategoryName.js"
import M_Activity from "./M_Activity.js"
import A_Likes from "./A_Likes.js"


class O_Post_Previews extends React.Component {
  render() {
    let categoryTag='';

    if (this.props.posts.category_id) {
      categoryTag = <p>Category:{this.props.post.category.name}</p>;
    }

    return (
      <div className="post-preview">
        {this.props.posts.map((post, category, likes) => (
          <div>
            <a href={/posts/ +`${post.id}`} key={post.id} className="post-preview-item">
            <div className="post-catName">{`${post.categoryTag}`}</div>
              <img className="post-preview-img" src={post.image.url}/>
              <h3>{`${post.title}`}</h3>
              <M_Activity/>
            </a>

          </div>
        ))}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array
};

export default O_Post_Previews
