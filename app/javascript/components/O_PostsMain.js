import React from "react"
import PropTypes from "prop-types"
import M_Activity from "./M_Activity.js"
import A_Heading from "./A_Heading.js"
import A_H1 from "./A_H1.js"
import A_Link from "./A_Link.js"
import A_Category from "./A_Category.js"
import A_CategoryPreview from "./A_CategoryPreview.js"
import M_PostPreview from "./M_PostPreview.js"
import 'stylesheets/O_PostsPreview.scss'

class O_PostsMain extends React.Component {
  render() {

    let category = '';
    if (this.props.category) {
      category = this.props.category.name
    }
    let textpart = <span>{category}</span>

    return (
      <div className = "O_PostsMain">
        <div className = "O_PostsMain--wrapper">
          <div className = "main--title">
            <A_H1
            color ="A_H1--black"
            content = "Что узнать на пляже">
             </A_H1>
          </div>
          <div className = "all-posts">
             <div className='post--list'>
               {this.props.posts.splice(-10, 10).map(post => (
                   <M_PostPreview
                   key = {post.id}
                   post = {post}
                   category = {post.category}
                   />
               ))}
             </div>
          </div>
          <div className = "O_PostsMain-link">
            <A_Link
              address = "/posts"
              linkStyle= 'link--white'
              name = "Больше волн ⟶">
            </A_Link>
          </div>
        </div>
      </div>
    );
  }
}


export default O_PostsMain
