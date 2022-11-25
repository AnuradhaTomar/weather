import React from 'react'

function TopButtons(props) {
    const cities = [
        {
            id:1,
            title:'Delhi'
        },
        {
            id:2,
            title:'Sydney'
        },
        {
            id:3,
            title:'London'
        },
        {
            id:4,
            title:'Kolkata'
        },
        {
            id:5,
            title:'Mumbai'
        },
    ]
  return (
    <div className='flex items-center justify-around my-5'>{cities.map((city) => (
        <button key={city.id} classname = "text-white text-lg font-medium">{city.title}</button>
        
    ))}</div>
  )
}

export default TopButtons;