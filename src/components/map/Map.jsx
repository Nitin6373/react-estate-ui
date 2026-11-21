import "./map.scss"
import React, { useEffect } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Pin from "../pin/Pin.jsx"

const MapSizeHandler = () => {
    const map = useMap()

    useEffect(() => {
        const container = map.getContainer()
        let frame
        const invalidate = () => {
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => map.invalidateSize({ pan: false }))
        }

        const observer = new ResizeObserver(invalidate)
        observer.observe(container)
        window.addEventListener('resize', invalidate)
        invalidate()

        return () => {
            observer.disconnect()
            window.removeEventListener('resize', invalidate)
            cancelAnimationFrame(frame)
        }
    }, [map])

    return null
}

const Map = ({ item = [] }) => {
    const position = [51.505, -0.09]

    return (
        <MapContainer className="map" center={position} zoom={7} scrollWheelZoom={false}>
            <MapSizeHandler />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {item.map(i => <Pin key={i.id} item={i} />)}
        </MapContainer>
    )
}

export default Map
