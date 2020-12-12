import { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Image from "next/image";

import axios from "../../services/api";
import { MyButton } from "./style";

export default function Maps({ token }) {
  //location == Barra do garcas
  const [viewport, setViewport] = useState({
    latitude: -15.89374841935585,
    longitude: -52.25873695254671,
    zoom: 15,
  });

  const [mascate, setMascates] = useState();
  const [selectedMascate, setSelectedMascate] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/mascates").then((response) => {
      setMascates(response.data);
    });
  }, []);
  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={token}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {mascate &&
        mascate.map((item) => (
          <Marker
            key={item.id}
            latitude={Number(item.latitude)}
            longitude={Number(item.longitude)}
          >
            <MyButton
              onClick={(e) => {
                e.preventDefault();
                setSelectedMascate(item);
              }}
            >
              <Image
                src="/map-point.svg"
                alt="Point image, from flaticons"
                width={60}
                height={60}
              />
            </MyButton>
          </Marker>
        ))}
      {selectedMascate ? (
        <Popup
          latitude={Number(selectedMascate.latitude)}
          longitude={Number(selectedMascate.longitude)}
          onClose={() => {
            setSelectedMascate(null);
          }}
        >
          <div>
            <h2>{selectedMascate.nome}</h2>
            <p>{selectedMascate.telefone}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}
