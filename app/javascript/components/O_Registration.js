import React from "react"
import PropTypes from "prop-types"


class O_Registration extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('form is submitted', this.state.email)


   //  const data = {email:this.state.email}
   //
   //  fetch('/api/createAccount', { method: 'POST',
   //
   //  body: JSON.stringify(data),
   //
   //  headers:{ 'Content-Type': 'application/json' } })
   //
   //  .then(res => res.json())
   //
   //  .catch(error => console.error('Error:', error))
   //
   //  .then(response => console.log('Success:', response));
   // }
  }

  handleEmailChange(event){
    console.log('email was changed', this)
    this.setState({email: event.target.value})
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <input
      type="text"
      placeholder="e-mail"
      value={this.state.email}
      onChange={this.handleEmailChange}
      />
      <button>Сохранить</button>
      </form>
    );
  }
}

export default O_Registration
