import React from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';

function Input(){
    return (
        <div className='flex flex-row justify-center my-6'>
          <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type='text' placeholder='Search for city....' className='text-xl p-2 font-light width-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>
              <UilSearch size={25} className='text-white ease-out transition cursor-pointer hover:scale-125'/>
              <UilLocationPoint size={25} className='text-white ease-out transition cursor-pointer hover:scale-125'/>
          </div>
          <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name='metric' className='text-xl font-light text-white'>°C</button>
            <p className='text-xl text-white mx-1'>...</p>
            <button name='imperial' className='text-xl font-light text-white'>°F</button>
          </div>
        </div>
    )
}
export default Input;