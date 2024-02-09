import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from '../data/dummy'

const Sidebar = () => {
const activeMenu = true;

const activeLink = 'm-2 flex items-center gap-4 pl-4 pb-3 rounded-lg  text-white text-md'
const normalLink = 'text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 flex items-center gap-4 pl-4 pb-3 rounded-lg  text-md'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {
        activeMenu && ( <>
        <div className='flex justify-between items-center'>
          <Link to='/'
          onClick={() => window.location.reload()}
          className='items-center gap-3 ml-3 mt-5 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900' >
          <SiShopware /> 
          <span>KojoWare</span>

            </Link>
            <TooltipComponent content='Menu' position='BottomCenter'>
              <button
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl rounded-full hover:bg-light-gray md:hidden block mt-3'
              onClick={() => window.location.reload()}

              >
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
                onClick={() => window.location.reload()}
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
