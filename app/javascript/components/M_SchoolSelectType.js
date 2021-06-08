import React from "react"
import PropTypes from "prop-types"
import A_H5 from "./A_H5.js"
import 'stylesheets/M_SchoolSelectType.scss'


class M_SchoolSelectType extends React.Component {
  constructor(props){
       super(props);
       this.state = {
         href: window.location.href
       }
     }

  render() {
    let schoolArray = '';
    let schoolNumber = schoolArray.lenght;

    return (
      <div>
        <A_H5
        content = "Выбрать вид серфа">
        </A_H5>
         <div className='surftype--list'>
           {this.props.surftypes.map(surftype => (
             <a href={ this.state.href + `&schools?surftype=${surftype.id}`} className="surftype--link" key={surftype.id}>
               <div className="surftype--text">{`${surftype.name}`}</div>
               <div>{schoolArray}</div>
             </a>
           ))}
         </div>
      </div>
    );
  }
}

export default M_SchoolSelectType
