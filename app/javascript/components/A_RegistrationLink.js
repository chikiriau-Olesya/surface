import React from "react"
import PropTypes from "prop-types"

class A_RegistrationLink extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          isLoggedIn: false
      }
         this.toggle = this.toggle.bind(this);
  }
  toggle() {
      this.setState(prevState => {
          return {
              isLoggedIn: !prevState.isLoggedIn
          }
      });
  }
  render() {
      let userState = this.state.isLoggedIn ? '/users/sign_out' : '/users/sign_in'
      // let userText = this.state.isLoggedIn ? 'Выйти' : 'Войти'
      return (
          <div>
            <div isOpen={this.state.isLoggedIn}>
                  <div>
                      <a onClick={this.toggle} href={userState}>Войти</a>
                  </div>
            </div>
          </div>

    );
  }
}

export default A_RegistrationLink
