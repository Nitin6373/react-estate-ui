import React from 'react'
import "./listPage.scss"
import { listData } from '../../lib/dummyData'
import Filter from "../../components/filter/Filter.jsx"
import Card from '../../components/card/Card.jsx'
import Map from '../../components/map/Map.jsx'

function ListPage() {

  const data = listData

  return (
    <div className='listPage'>
      <div className="listCont">
        <div className="wrapper">
          <Filter />
          <div className='cardCont'>
            {
              data.map(item => (
                <Card key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
      <div className="mapCont">
        <Map item={data}/>
      </div>
    </div>
  )
}

export default ListPage
