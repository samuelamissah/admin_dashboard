import React from 'react'
import { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from '../data/avatar.jpg'
import { useStateContext } from '../contexts/ContextProvider'
import {Cart, Chat, Notification, UserProfile} from './'



const NavButton = ({title, customFunc, icon, color, dotColor}) => {

  return (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
    type='button'
    onClick={customFunc}
    className=' relative text-xl rounded-full p-3 hover:bg-light-gray'
    style={{color}}
    >
      <span style={{backgroundColor: dotColor}}
      className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
      
      >
        {icon}


      </span>

    </button>
    </TooltipComponent>
  )
}

const Navbar = () => {


const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize} = useStateContext();

useEffect(() => {
  const handleResize = () => {
    setScreenSize(window.innerWidth)
  }
  window.addEventListener('resize', handleResize)
  handleResize()
  return () => window.removeEventListener('resize', handleResize)
}, []);

useEffect(() => {
  if(screenSize <= 900) {
    setActiveMenu(false)
  } else {
    setActiveMenu(true)
  }
} , [screenSize])



  return (

    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton
      title="Menu"
      customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
      color='20232A'
      icon={<AiOutlineMenu />}
      />
<div className='flex'>
<NavButton
      title="Cart"
      customFunc={() => handleClick('cart')}
      color='20232A'
      icon={<FiShoppingCart />}
      />
      <NavButton
      title="Chat"
      dotColor="red"
      customFunc={() => handleClick('chat')}
      color='20232A'
      icon={<BsChatLeft />}
      />
      <NavButton
      title="Notifications"
      customFunc={() => handleClick('notification')}
      color='20232A'
      icon={<RiNotification3Line />}
      />
      <TooltipComponent content='Profile' position='BottomCenter'
      
      >
        <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-full'
        onClick={() => handleClick('userProfile')}
        >
          <img src={avatar} alt='avatar' className='w-8 h-8 rounded-full' />
          <p>
            <span className='text-gray-400 text-14'>Wossop</span>{' '}
            <span className='text-gray-400 font-bold ml-1 text-14'>Kojo</span>
          </p>
          <MdKeyboardArrowDown 
          className='text-3xl text-gray-400 hover:text-gray-600 hover:drop-shadow-xl hover:scale-110 transition-all duration-300 ease-in-out transform'
          />
        
        </div>
      </TooltipComponent>
      {
        isClicked.cart && <Cart />
      }
      {
        isClicked.chat && <Chat />
      }
      {
        isClicked.notification && <Notification />
      }
      {
        isClicked.userProfile && <UserProfile />
      
      }

</div>
    </div>
  )
}

export default Navbar