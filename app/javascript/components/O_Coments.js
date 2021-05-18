import React from "react"
import PropTypes from "prop-types"
import A_Heading from "./A_Heading.js"
import M_FunctionList from "./M_FunctionList.js"
import 'stylesheets/O_Coments.scss'



class O_Coments extends React.Component {
  render() {
    return (
      <div className="post-preview">
        {this.props.coments.map(coment => (
          <div className="coment-item">
            <a href={/posts/ +`${post.id}`} key={post.id} className="coment-block">
              <div className="coment-top-line">
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
          </div>
        ))}
      </div>
    );
  }
}

O_Coments.propTypes = {
  coments: PropTypes.array
};

export default O_Coments
