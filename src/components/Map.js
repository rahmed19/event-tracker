import React, { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'


export default function Map({ eventData, eventCategory }) {

    const [locationInfo, setLocationInfo] = useState(null)
    const [centerProperty, setCenterProperty] = useState({ lat: 43.246292, lng: -97.1384 })

    useEffect(() => {
        if (eventCategory === "volcanoes") {
            setCenterProperty({ lat: 1.48, lng: 127.63 })
        } else {
            setCenterProperty({ lat: 43.246292, lng: -97.1384 })
        }
    }, [eventCategory])




    const markers = eventData.map(ev => {
        if (ev.categories[0].id === eventCategory) {
            if (ev.geometry[0].coordinates.length === 2) {

                return <LocationMarker
                    eventCategory={eventCategory}
                    lat={ev.geometry[0].coordinates[1]}
                    lng={ev.geometry[0].coordinates[0]}
                    onClick={() =>
                        setLocationInfo({
                            id: ev.id,
                            title: ev.title,
                            lat: ev.geometry[0].coordinates[1],
                            lng: ev.geometry[0].coordinates[0],
                            event: eventCategory

                        })}

                />
            }

        }

        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCzOqhMiLThPFS6WRriNLQqtjymR5l5cvg' }}
                defaultCenter={{ lat: 43.246292, lng: -97.1384 }}
                center={centerProperty}
                defaultZoom={4}
                onClick={() => setLocationInfo(null)}
            >
                {markers}

            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} setLocationInfo={setLocationInfo} />}
        </div>
    )

}