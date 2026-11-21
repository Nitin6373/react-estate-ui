

import React from 'react'
import "./list.scss"
import { listData } from '../../lib/dummyData'
import Card from '../card/Card.jsx'

function List() {
    const list = listData
    return (
        <div className='list'>
            {
                list.map(item => (
                    // <div>Hi</div>
                    <Card key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default List
