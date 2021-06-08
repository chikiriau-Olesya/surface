import React from "react"
import PropTypes from "prop-types"

import 'stylesheets/M_UserMenu.scss'
import A_Link from './A_Link.js'
import A_SmallList from './A_SmallList.js'
import Profile from "images/avatar.svg"



class M_AdminChecker extends React.Component {

  isItAdmin() {
  // Get the id of current user
  const userId = Meteor.userId();
  if (userId) {
    
    // call a server method which returns true if current user is Admin
    Meteor.call('checkAdminId', userId, (err, authorized) => {
      if (err) {
        console.log(err);
        return null;
      }
      return (authorized) ? <AdminDashboard /> : null;
    });
  }
}
render() {
  return (
    <div className="admin-temp-container">
      {this.isItAdmin()}
    </div>
  );
}

export default M_AdminChecker
