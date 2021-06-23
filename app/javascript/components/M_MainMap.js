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

class M_MainMap extends React.Component {
  render() {
    return (
    <div>
      <YMaps query={{ mode: "debug" }}>
        {this.props.schools.slice(0, 1).map(school => (
          <Map
            key={school.id}
            defaultState={{
            center: [school.latitude, school.longitude],
            zoom: 10 }}
            width='100%'
            height='53vw'
          >

          <ZoomControl options={{ float: 'right' }}/>

          { this.props.schools.map(school => {
            return (
             <Placemark
                 key={school.id}
                 geometry={[school.latitude, school.longitude]}
                 options={{
                   iconLayout: 'default#image',
                   iconImageHref: pin,
                   iconImageSize: [30, 30],
                   hideIconOnBalloonOpen: false,
                   balloonOffset: [3, -40]
                 }}
                 properties={{
                   hintContent: `${school.name}`,
                   balloonContent: `<a href="/schools/${school.id}">
                     <div className="baloon">
                       <img style = "border-radius:24px;" className="baloon_school_block_img" src=${school.image.thumb.url}/>
                       <span style = "font-size: 24px;" >${school.name}<span>
                     </div>
                   </a>`,
                 }}
                 modules={[
                   "geoObject.addon.hint",
                   "geoObject.addon.balloon"
                 ]}
             />)
           })
          }
        </Map>
      ))}
      </YMaps>
    </div>
    );
  }
}

export default M_MainMap
