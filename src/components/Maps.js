import React from 'react'
import GoogleMapReact from 'google-map-react'


export const Maps = ({center, zoom}) => {
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
                defaultCenter={center}
                defaultZoom={zoom}
            >

            </GoogleMapReact>
        </div>
    )
    
}

Maps.defaultProps ={
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}