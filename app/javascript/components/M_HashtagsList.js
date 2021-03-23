import React from "react"
import PropTypes from "prop-types"
import '../../assets/stylesheets/A_Hashtag.scss'

class M_HashtagsList extends React.Component {
  render() {
    let myRe = new RegExp("#\\w+", "g");
    let myArray = [];
    let tag = null;
    while((tag = myRe.exec("#surf, #surfing")) != null){
      myArray.push(tag[0]);
    }

    return (
      // <div>
      //   {this.props.tags.map(tag => (
      //     <div key={tag.id}>
      //         <a href = {"/posts/hashtag/" + tag.replace(/\#/g, '')}>{tag.name}</a>)
      //     </div>
      //   ))}
      // </div>
      <div className = "A_Hashtag">
        {
          myArray.map(tag => (
            <a href = {"/posts/hashtag/" + tag.replace(/\#/g, '')}>{tag}</a>)
          )
        }
      </div>

    );
  }
}

export default M_HashtagsList
