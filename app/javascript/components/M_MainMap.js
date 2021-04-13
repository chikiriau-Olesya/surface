import React from "react";
import ReactDOM from "react-dom";
import { YMaps, Map, ObjectManager } from "react-yandex-maps";

import points from "./points.js";

// import "./styles.css";

let mapState = {
  center: [55.751574, 37.573856],
  zoom: 5
};

let getIdFromHash = hash => {
  hash = parseInt(hash.replace(/\D/g, ""), 10);
  return isNaN(hash) ? null : hash;
};

class M_MainMap extends React.Component {
  state = {
    currentItem: getIdFromHash(window.location.hash)
  };

  onHashChange = () => {
    let currentItem = getIdFromHash(window.location.hash);
    if (currentItem !== this.state.currentItem) {
      this.setState({ currentItem });
    }
  };

  closeDescription = () => {
    window.location.hash = "";
    this.setState({ currentItem: null });
  };

  componentDidMount() {
    window.addEventListener("hashchange", this.onHashChange);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.onHashChange);
  }

  render() {
    return (
      <div>
        <YMaps query={{ mode: "debug" }}>
          <Map defaultState={mapState}>
            <ObjectManager
              objects={{
                openBalloonOnClick: true
              }}
              clusters={{}}
              options={{
                clusterize: true,
                gridSize: 32
              }}
              defaultFeatures={{
                type: "FeatureCollection",
                features: points.map((point, id) => {
                  return {
                    id: id,
                    type: "Feature",
                    geometry: {
                      type: "Point",
                      coordinates: point.coords
                    },
                    properties: {
                      balloonContent: `
                      <p>Информация о метке №${id + 1}.</p>
                      <p>
                        <a href="/schools/${id}">Больше информации...</a>
                      </p>
                  `,
                      clusterCaption: `Метка №${id + 1}`
                    }
                  };
                })
              }}
              modules={[
                "objectManager.addon.objectsBalloon",
                "objectManager.addon.clustersBalloon"
              ]}
            />
          </Map>
        </YMaps>
        {this.state.currentItem !== null && (
          <article>
            <h1>Подробная информация о метке №{this.state.currentItem + 1}</h1>
            <p>{points[this.state.currentItem].descr}</p>
            <button onClick={this.closeDescription}>Закрыть</button>
          </article>
        )}
      </div>
    );
  }
}

export default M_MainMap
