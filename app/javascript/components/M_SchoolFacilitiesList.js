import React from "react"
import PropTypes from "prop-types"
import A_SchoolFacility from './A_SchoolFacility.js'
import Car from 'images/bus.svg'
import Equip from 'images/paddleboarding.svg'
import Cafe from 'images/restaurant.svg'
import Shop from 'images/shopping-cart.svg'
import Room from 'images/toilet.svg'
import Shower from 'images/shower.svg'

class M_SchoolFacilitiesList extends React.Component {
  render () {

    let checkRoom='';
    if (this.props.school.room == true) {
      checkRoom = <A_SchoolFacility img={Room}/>
    } else {
      checkRoom=''
    }

    let checkShower='';
    if (this.props.school.shower == true) {
      checkShower = <A_SchoolFacility img={Shower}/>
    } else {
      checkShower=''
    }

    let checkCafe='';
    if (this.props.school.cafe == true) {
      checkCafe = <A_SchoolFacility img={Cafe}/>
    } else {
      checkCafe=''
    }

    let checkShop='';
    if (this.props.school.shop == true) {
      checkShop = <A_SchoolFacility img={Shop}/>
    } else {
      checkShop=''
    }

    let checkEquip='';
    if (this.props.school.equip == true) {
      checkEquip = <A_SchoolFacility img={Equip}/>
    } else {
      checkEquip=''
    }

    let checkCar='';
    if (this.props.school.car == true) {
      checkCar = <A_SchoolFacility img={Car}/>
    } else {
      checkCar=''
    }



    return (
          <div className="M_SchoolFacilitiesList">
              {checkRoom}
              {checkShop}
              {checkShower}
              {checkEquip}
              {checkCafe}
              {checkCar}
          </div>
    );
  }
}

export default M_SchoolFacilitiesList
