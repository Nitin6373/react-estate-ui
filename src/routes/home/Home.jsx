import React from 'react'
import "./home.scss"
import SearchBar from '../../components/searchBar/SearchBar'

function Home() {
    return (
        <div className='homepage'>
            <div className="textCont">
                <div className="wrapper">
                    <h1>Find Real Estate & Get Your Dream Place</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et molestiae nulla reiciendis nesciunt tempore maiores doloremque fuga voluptates necessitatibus similique!
                    </p>

                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h3>16+</h3>
                            <h5>Years Of Experience</h5>
                        </div>
                        <div className="box">
                            <h3>200</h3>
                            <h5>Awards Gained</h5>
                        </div>
                        <div className="box">
                            <h3>1200+</h3>
                            <h5>Property Ready</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgCont">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default Home
