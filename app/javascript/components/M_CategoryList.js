import React from "react"
import PropTypes from "prop-types"
import A_Category from './A_CategoryName.js'

class M_CategoryList extends React.Component {
  render () {
    return (
      <div className='button-line'>
      <ul>
        <A_Category/>
        <A_Category/>
        <A_Category/>
        <A_Category/>
        <A_Category/>
        <A_Category/>
      </ul>
      </div>
    );
  }
}

export default M_CategoryList

ReactDOM.render(
    <M_CategoryList />,
  document.getElementById('root')
);
