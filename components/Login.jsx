import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col items-center mx-auto'>
        <Image 
            src="https://upload.wikimedia.org/wikipedia/commons/9/93/Facebook_logo_%282023%29.svg" 
            height={240}
            width={240}
            alt='logo'
            className='mt-16'
        />
        <a onClick={signIn} className='px-20 py-4 z-10 text-2xl cursor-pointer mt-8 bg-blue-500 rounded-md text-white'>
            Login
        </a>
    </div>
  )
}

export default Login
