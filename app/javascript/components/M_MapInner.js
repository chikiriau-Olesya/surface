import React from "react";
import ReactDOM from "react-dom";
import 'stylesheets/M_Map.scss'
import Pin from 'images/map-icon.svg'
import { YMaps, Map, Placemark, GeolocationControl, ZoomControl } from "react-yandex-maps";


let pin = Pin

let getIdFromHash = hash => {
  hash = parseInt(hash.replace(/\D/g, ""), 10);
  return isNaN(hash) ? null : hash;
};

class M_MapInner extends React.Component {
  render() {
    return (
      <div>
        <YMaps query={{ mode: "debug" }}>
          <Map defaultState={{ center: [`${this.props.school.latitude}`, `${this.props.school.longitude}`], zoom: 12 }}
            width='450px'
            height='360px'
          >
          <ZoomControl options={{ float: 'right' }}/>

          <Placemark
             geometry={[`${this.props.school.latitude}`, `${this.props.school.longitude}`]}
             options={{
               iconLayout: 'default#image',
               iconImageHref: pin,
               iconImageSize: [30, 30],
               hideIconOnBalloonOpen: false,
               balloonOffset: [3, -40]
             }}
             properties={{
               hintContent: `${this.props.school.name}`,
             }}
             modules={[
               "geoObject.addon.hint",
             ]}
          />
          </Map>
        </YMaps>

      </div>
    );
  }
}

export default M_MapInner
