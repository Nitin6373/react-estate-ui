

import { Link } from "react-router-dom"
import "./card.scss"

import React from 'react'

const Card = ({ item }) => {
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imgCont">
        <img src={item.img} alt="" />
      </Link>

      <div className="textCont">
        <h2 className="title">
          <Link to={`/${item.id}`} >
            {item.title}
          </Link>
        </h2>

        <p className="address">
          <img src="/pin.png" alt="" />
          <span>
            {item.address}
          </span>
        </p>
        <p className="price">${item.price}</p>

        <div className="utils">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} Bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} Bathroom</span>
            </div>
          </div>
          <div className="icons">
              <div className="icon">
                <img src="/save.png" alt="" />
              </div>
              <div className="icon">
                <img src="/chat.png" alt="" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
