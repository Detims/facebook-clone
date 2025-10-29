import Image from 'next/image'
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import { FaRegCommentAlt } from 'react-icons/fa'
import { RiShareForwardLine } from 'react-icons/ri'

const Post = () => {
  return (
    <div className='flex flex-col'>
      <div className='bg-white mt-6 rounded-md p-4'>
        <div className='flex items-center space-x-2'>
          {/* Post Sender Information */}
          <img className='rounded-full w-10 h-10' src='https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg' />
          <div>
            <p className='font-medium'>Name here</p>
            <p className='text-xs text-gray-500'>{new Date().toLocaleString()}</p>
          </div>
        </div>
        <p className='py-4'>Placeholder</p>
      </div>

      {/* Image Content */}
      <div className='relative h-60 md:h-96 bg-white'>
        <Image src="https://images.pexels.com/photos/1586205/pexels-photo-1586205.jpeg" layout='fill' objectFit='cover' />
      </div>

      {/* Footer */}
      <div className='flex items-center justify-center bg-white p-2'>
        <div className='flex items-center space-x-1 hover:bg-gray-100 grow justify-center p-2 rounded-xl cursor-pointer'>
          <FiThumbsUp className='h-4' />
          <p className='text-xs sm:text-base'>Like</p>
        </div>
        <div className='flex items-center space-x-1 hover:bg-gray-100 grow justify-center p-2 rounded-xl cursor-pointer'>
          <FaRegCommentAlt className='h-4' />
          <p className='text-xs sm:text-base'>Comment</p>
        </div>
        <div className='flex items-center space-x-1 hover:bg-gray-100 grow justify-center p-2 rounded-xl cursor-pointer'>
          <RiShareForwardLine className='h-4' />
          <p className='text-xs sm:text-base'>Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
