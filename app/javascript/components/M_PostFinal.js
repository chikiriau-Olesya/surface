import React from "react"
import PropTypes from "prop-types"
import A_Textblock from './A_Textblock.js'
import A_Heading from './A_Heading.js'
import Insta from 'images/insta.svg'
import Fb from 'images/fb.svg'
import Telega from 'images/telega.svg'



class M_PostFinal extends React.Component {
  render() {
    return (
      <div className="post-final">
        <A_Heading
        headingStyle = 'heading--white'
        headingSize = 'heading--article'>
          {"Поделись с такими же серфанутыми"}
        </A_Heading>
        <div className="media-share">
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Insta}/></a>
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Fb}/></a>
           <a href="https://www.instagram.com/trinitysurfingmag/"><img src={Telega}/></a>
        </div>
      </div>
    );
  }
}

export default M_PostFinal
