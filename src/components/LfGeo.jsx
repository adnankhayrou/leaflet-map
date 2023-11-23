import { useEffect } from "react"
import L from "leaflet"
import { useMap } from "react-leaflet"

const LfGeo = () => {
    const map = useMap();
    useEffect(()=>{
        L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
            //   let latlag = 
              e.geocode.center;
            //   L.marker(latlag).addTo(map).bindPopup(e.geocode.name).openPopup();
              map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
    },[])
  return null
}

export default LfGeo