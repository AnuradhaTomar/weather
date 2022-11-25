import React from 'react'

function TimeandLocation() {
  return (
    <div>
        <div className='flex justify-center items-center my-6'>
            <p className='text-xl text-white font-extralight'>
                Tuesday, 21 Nov 2022 | Local time: 12:46 PM
            </p>
        </div>
        <div className='flex justify-center items-center my-3'>
            <p className='text-3xl text-white font-medium'>Berlin, DE</p>
        </div>
    </div>
  )
}

export default TimeandLocation