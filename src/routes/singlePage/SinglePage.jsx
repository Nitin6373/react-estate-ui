
import Slider from "../../components/slider/Slider"
import { singlePostData, userData } from "../../lib/dummyData"
import "./singlePage.scss"
import React from 'react'
import Map from "../../components/map/Map.jsx"

const SinglePage = () => {
  const singlePost = singlePostData
  const userDt = userData

  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePost.images} />

          <div className="info">
            <div className="top">
              <div className="postInfo">
                <h2>{singlePost.title}</h2>
                <p className="address">
                  <img src="/pin.png" alt="" />
                  <span>{singlePost.address}</span>
                </p>
                <p className="price">
                  ${singlePost.price}
                </p>
              </div>
              <div className="ownerInfo">
                <img src={userDt.img} alt="" />
                <span className="name">{userDt.name}</span>
              </div>
            </div>
            <div className="bottom">
              {singlePost.description}
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="wrapper">
          <p className="title">
            General
          </p>
          <div className="listVertical">
            <div className="item">
              <img src="/utility.png" alt="" />
              <div>
                <h3>Utilities</h3>
                <span>Renter Is Responsible</span>
              </div>
            </div>


            <div className="item">
              <img src="/pet.png" alt="" />
              <div>
                <h3>Pet Policy</h3>
                <span>Pets Allowed</span>
              </div>
            </div>


            <div className="item">
              <img src="/fee.png" alt="" />
              <div>
                <h3>Property Fees</h3>
                <span>Must Have 3x the rent in total household income</span>
              </div>
            </div>
          </div>

          <p className="title">
            Room Size
          </p>
          <div className="sizes">
            <div className="item">
              <img src="/size.png" alt="" />
              <span>{Math.round(singlePost.size * 0.09290304)}sqm({singlePost.size}sqft)</span>
            </div>
            <div className="item">
              <img src="/bed.png" alt="" />
              <span>{singlePost.bedRooms}bed</span>
            </div>
            <div className="item">
              <img src="/bath.png" alt="" />
              <span>{singlePost.bathroom}bathroom</span>
            </div>
          </div>

          <p className="title">
            Nearby Places
          </p>

          <div className="listHorizontal">
            <div className="item">
              <img src="/school.png" alt="" />
              <div>
                <h3>School</h3>
                <span>{singlePost.school}</span>
              </div>
            </div>


            <div className="item">
              <img src="/bus.png" alt="" />
              <div>
                <h3>Bus Stop</h3>
                <span>{singlePost.bus}</span>
              </div>
            </div>


            <div className="item">
              <img src="/restaurant.png" alt="" />
              <div>
                <h3>Restaurant</h3>
                <span>{singlePost.restaurant}</span>
              </div>
            </div>
          </div>

          <p className="title">
            Location
          </p>
          <div className="mapCont">
            <Map item={[singlePost]} />
          </div>

          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              <span>send a Message</span>
            </button>
            <button>
              <img src="/save.png" alt="" />
              <span>Save the Place</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage
