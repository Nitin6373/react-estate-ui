
import "./map.scss"
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Pin from "./Pin.jsx"

const Map = ({ item }) => {
    const position = [51.505, -0.09]
    return (
        <MapContainer className="map" center={position} zoom={7} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {item.map(i => (
                <Pin key={i.id} item={i} />
            ))}
        </MapContainer>
    )
}

export default Map
