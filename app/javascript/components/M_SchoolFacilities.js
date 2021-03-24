import React from "react"
import PropTypes from "prop-types"
import A_SchoolFacility from './A_SchoolFacility.js'
import Car from 'images/bus.svg'
import Equip from 'images/paddleboarding.svg'
import Cafe from 'images/restaurant.svg'
import Shop from 'images/shopping-cart.svg'
import Room from 'images/toilet.svg'
import Shower from 'images/shower.svg'

class M_SchoolFacilities extends React.Component {
  render () {
    let checkRoom='';
    if (this.props.school.room == true) {
      checkRoom = <A_SchoolFacility img={Room} label="Раздевалки"/>
    } else {
      checkRoom=''
    }

    let checkShower='';
    if (this.props.school.shower == true) {
      checkShower = <A_SchoolFacility img={Shower} label="Душевая"/>
    } else {
      checkShower=''
    }

    let checkCafe='';
    if (this.props.school.cafe == true) {
      checkCafe = <A_SchoolFacility img={Cafe} label="Кафе по близости"/>
    } else {
      checkCafe=''
    }

    let checkShop='';
    if (this.props.school.shop == true) {
      checkShop = <A_SchoolFacility img={Shop} label="Магазины рядом"/>
    } else {
      checkShop=''
    }

    let checkEquip='';
    if (this.props.school.equip == true) {
      checkEquip = <A_SchoolFacility img={Equip} label="Оборудование"/>
    } else {
      checkEquip=''
    }

    let checkCar='';
    if (this.props.school.car == true) {
      checkCar = <A_SchoolFacility img={Car} label="Легко доехать"/>
    } else {
      checkCar=''
    }



    return (
      <div className="M_SchoolFacilities">
        <h4>Условия школы</h4>
        <div className="M_SchoolFacilities-block">
          {checkRoom}
          {checkShop}
          {checkShower}
          {checkEquip}
          {checkCafe}
          {checkCar}
        </div>
      </div>
    );
  }
}

export default M_SchoolFacilities
