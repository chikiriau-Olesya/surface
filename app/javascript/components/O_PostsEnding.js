import React from "react"
import PropTypes from "prop-types"
import M_Activity from "./M_Activity.js"
import A_Heading from "./A_Heading.js"
import A_PlayBtn from "./A_PlayBtn.js"
import A_Category from "./A_Category.js"
import A_H3 from "./A_H3.js"
import A_Link from "./A_Link.js"
import A_CategoryPreview from "./A_CategoryPreview.js"
import M_PostPreview from "./M_PostPreview.js"
import 'stylesheets/O_PostsEnding.scss'
import Play from 'images/playBtn.svg'



class O_PostsEnding extends React.Component {
  render() {

    let category = '';
    if (this.props.category) {
      category = this.props.category.name
    }
    let textpart = <span>{category}</span>


    return (
      <div className = "final-posts">
        <div className = "all-posts--heading">
          <A_H3
            color ="A_H3--black"
            content = "Хм, может быть интересно">
          </A_H3>
          <A_Link linkStyle = "link--blue"
            address = "/posts"
            name  = "См. еще"
            />
        </div>
        <div className='post--list'>
           {this.props.posts.splice(-2, 2).map(post => (
             <a href={"/posts/" + `${post.id}`}
             key={post.id} className="post-item">
               <M_PostPreview
               key = {post.id}
               post = {post}
               category = {post.category}
               />
             </a>
           ))}
        </div>
      </div>
    );
  }
}


export default O_PostsEnding
