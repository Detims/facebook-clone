import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts';

const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold grow'>
                Contacts  
            </p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <RiVideoAddFill />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <BiSearch />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    <CgMoreAlt />
                </div>
            </div>
        </div>
       
        <Contacts 
            src="https://images.pexels.com/photos/34481769/pexels-photo-34481769.jpeg" 
            name="John Nguyen" 
            status="Online"
        />
        <Contacts 
            src="https://images.pexels.com/photos/2325302/pexels-photo-2325302.jpeg" 
            name="Kevin Nguyen" 
            status="Online"
        />
        <Contacts 
            src="https://images.pexels.com/photos/33020857/pexels-photo-33020857.jpeg" 
            name="Brian Nguyen" 
            status="Offline"
        />
        <Contacts 
            src="https://images.pexels.com/photos/33342194/pexels-photo-33342194.jpeg" 
            name="Gabriel Nguyen" 
            status="Online"
        />
    </div>
  )
}

export default RightSidebar
