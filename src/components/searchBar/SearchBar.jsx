import React, { useState } from 'react'
import "./searchBar.scss"

const SearchBar = () => {
    const types = ["buy", "rent"]
    const [query, setquery] = useState({
        type: "buy",
        Location: "",
        minPrice: 0,
        maxPrice: 0
    })
    const switchType = (ty) => {
        setquery(prev => ({ ...prev, type: ty }))
    }
    return (
        <div className='searchBar'>
            <div className="types">
                {types.map(t => (
                    <button key={t} onClick={() => switchType(t)} className={query.type == t ? "active" : ""}>{t.toUpperCase()}</button>
                ))}
            </div>
            <form action="" method='post'>
                <div>

                <input type="text" name="Location" id="Location" placeholder='City Location' />
                <input type="number" min={0} max={100000000} name="minPrice" id="minPrice" placeholder='Min Price' />
                <input type="number" min={0} max={100000000} name="maxPrice" id="maxPrice" placeholder='Max Price' />
                <button>
                    <img src="/search.png" alt="" />
                </button>
                </div>
            </form>

        </div>
    )
}

export default SearchBar
