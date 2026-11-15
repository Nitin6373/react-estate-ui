

import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import "./pin.scss"

const Pin = ({item}) => {
    const position = [item.latitude,item.longitude]
    return (
        <Marker position={position}>
            <Popup>
                <div className="popupCont">
                    <img src={item.img} alt="" />
                    <div className="textCont">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span className="bed">{item.bedroom}Bedroom</span>
                        <b>${item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

export default Pin
