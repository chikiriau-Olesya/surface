import React from "react";
import ReactDOM from "react-dom";
import 'stylesheets/M_Map.scss'
import Pin from 'images/map-icon.svg'
import { YMaps, Map, Placemark, GeolocationControl, ZoomControl } from "react-yandex-maps";

let mapState = {
  center: [55.751574, 37.573856],
  zoom: 11,
  controls: []
};

let pin = Pin

let getIdFromHash = hash => {
  hash = parseInt(hash.replace(/\D/g, ""), 10);
  return isNaN(hash) ? null : hash;
};


class M_Map extends React.Component {
  render() {
    return (
      <div>
        <YMaps query={{ mode: "debug" }}>
          <Map defaultState={mapState}
            width='100%'
            height='54vw'
          >
            <ZoomControl options={{ float: 'right' }}/>

            {
             this.props.schools.map(school => {
               return (
               <Placemark
                   key={school.id}
                   geometry={[school.longitude, school.latitude]}
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
                         <img className="baloon_school_block_img" src=${school.image.thumb.url}/>
                         ${school.name}
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
        </YMaps>

      </div>
    );
  }
}

export default M_Map
