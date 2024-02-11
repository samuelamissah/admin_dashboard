import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {

const {activeMenu, setActiveMenu, screenSize} = useStateContext();


const handleCloseSidebar = () => {
  if(activeMenu && screenSize <= 900) {
    setActiveMenu(false)
  }
}


const activeLink = 'm-2 flex items-center gap-5 pt-3 pl-4 pb-2.5 rounded-lg bg-green-300 text-md'
const normalLink = 'text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 flex items-center gap-4 pl-4 pb-3 rounded-lg  text-md'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && ( <>
        <div className='flex justify-between items-center'>
          <Link to='/'
      onClick={handleCloseSidebar}

className='items-center gap-3 ml-3 mt-5 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900' >
          <SiShopware /> 
          <span>KojoWare</span>

            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
              type='button'
              className='text-xl p-3 hover:drop-shadow-xl rounded-full hover:bg-light-gray md:hidden block mt-3'
              onClick={() => setActiveMenu(!activeMenu)}              >
                <MdOutlineCancel  />
              </button>
              </TooltipComponent>
        </div>
        <div className='mt-10'>
          {
            links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 m-3 mt-4 uppercase'>
                {item.title}
                </p>
              {item.links.map((link) => (
                <NavLink to={`/${link.name }`}
                key={link.name}
                  onClick={handleCloseSidebar}
                className={({isActive}) => isActive ? activeLink : normalLink}
                >
                  {link.icon}
                  <span className='uppercase'>{link.name}</span>
                </NavLink>
              ))}
              </div>
            )) 
          }

        </div>
        </>)
      }

    </div>
  )
}

export default Sidebar
