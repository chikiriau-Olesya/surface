import React from "react"
import PropTypes from "prop-types"
import A_Category from './A_Category.js'
import A_Textblock from './A_Textblock.js'
import M_FunctionList from './M_FunctionList.js'
import 'stylesheets/M_AdminCat.scss'

class M_AdminCat extends React.Component {
  render() {
    return (
      <div className="admin-cat-wrapper">
        {this.props.categories.map(category => (
          <div key={category.id} className="admin-cat">
            <div className="admin-cat-top">
              <a href={/categories/ +`${category.id}`} className="category--inPost">
              {`${category.name}`}
              </a>
              <M_FunctionList/>
            </div>
              <A_Textblock className="cat-text"
              textStyle = 'text--white'
              textSize = 'text--s-descript'>
                {`${category.description}`}
              </A_Textblock>
          </div>
        ))}
      </div>
    );
  }
}

export default M_AdminCat
