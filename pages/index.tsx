import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import  Footer  from '../components/Footer'
import { ViewGridIcon, MicrophoneIcon} from '@heroicons/react/solid'
import {  SearchIcon } from '@heroicons/react/outline'
import { useRef } from 'react'
import { useRouter } from 'next/router'

const Home: NextPage = () => {

  const searchInputRef = useRef(null)
  const router = useRouter()

  const search = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`)
    
  }

  return (
    <div className="font-sans flex  flex-col items-center  justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <header className='flex w-full justify-between text-base p-5  text-gray-700 font-semibold'>
        {/* leftside */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
         

        {/* rightside */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icon */}
          <ViewGridIcon className='h-10 w-10 p-2 cursor-pointer hover:bg-gray-100 rounded-full'/>

          {/* Avatar */}
          <Avatar url={'https://i.pinimg.com/736x/08/4c/95/084c951c772a87eb599724411b34f2a5.jpg'} className={undefined}/>
        </div>
      </header>

      {/* Body */}

      <form className="flex flex-col items-center mt-28 flex-grow w-4/5">
        <Image  src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' layout='intrinsic' objectFit='contain'  width={300} height={100} />

        <div className='flex mt-8 hover:shadow-lg w-full cursor-pointer focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-lg lg:max-w-xl'>
          <SearchIcon className='h-5 mr-3 text-gray-500'/>
          <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5'/>
        </div>
        <div className='flex flex-col w-1/2 space-y-2 mt-1 justify-center sm:space-y-0 sm:flex-row sm:space-x-4  '>
          <button onClick={search}  className='btn'>Google Search</button>
          <button onClick={search} className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
      
    </div>
  )
}

export default Home
