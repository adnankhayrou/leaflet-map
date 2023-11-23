import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet-control-geocoder/dist/Control.Geocoder.css"
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import "../App.css"
// import LfGeo from "./LfGeo"
import LfRouting from "./LfRouting"
import { useEffect, useState } from "react"

const Home = () => {
  // const position = [31.7917, -7.0926]
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const getCurrentLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setPosition([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    };

    getCurrentLocation();
  }, []);

  return (
      <div>
        {position && (
         <MapContainer center={position} zoom={8} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <LfGeo/> */}
          <LfRouting/>
        </MapContainer>
         )}
        </div>
        
  )
}

export default Home