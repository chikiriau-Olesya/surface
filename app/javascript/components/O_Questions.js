import React from "react"
import PropTypes from "prop-types"
import A_H3 from "./A_H3.js"
import M_QuestionPreview from "./M_QuestionPreview.js"



class O_Questions extends React.Component {
  render() {

    return (
      <div className = "all-posts">
      <A_H3 content = "Все заявки"/>
         <div className='question-list'>
           {this.props.questions.map(question => (
             <div>
               <M_QuestionPreview
               user ={this.props.user}
               question = {this.props.question}
               />
             </div>
           ))}
         </div>
      </div>
    );
  }
}


export default O_Questions
