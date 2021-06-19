import React from "react"
import PropTypes from "prop-types"
import M_Activity from "./M_Activity.js"
import A_Heading from "./A_Heading.js"
import A_PlayBtn from "./A_PlayBtn.js"
import A_Category from "./A_Category.js"
import A_CategoryPreview from "./A_CategoryPreview.js"
import M_PostPreview from "./M_PostPreview.js"
import 'stylesheets/O_PostsPreview.scss'
import Play from 'images/playBtn.svg'


class O_PostsPreview extends React.Component {
  render() {

    let category = '';
    if (this.props.category) {
      category = this.props.category.name
    }
    let textpart = <span>{category}</span>


    return (
      <div className = "all-posts">
         <div className='post--list'>
           {this.props.posts.map(post => (
             <div
             key={post.id}
             // className="post-item"
             >
               <M_PostPreview
               key = {post.id}
               post = {post}
               category = {post.category}
               />
             </div>
           ))}
         </div>
      </div>
    );
  }
}


export default O_PostsPreview
