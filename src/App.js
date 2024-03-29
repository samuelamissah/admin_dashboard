import React from 'react'
import './App.css'
import { useEffect } from 'react'
import { FiSettings } from 'react-icons/fi'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {Navbar, Footer, Sidebar, ThemeSettings} from './components'
import {Ecommerce, Orders, Employees, Customers, Kanban, Editor, Calendar, ColorPicker, Line, Area, Bar, Pie, Financial, ColorMapping, Pyramid, Stacked} from './pages'
import { useStateContext } from './contexts/ContextProvider'


const App = () => {

const {currentMode, currentColor,activeMenu, themeSettings, setThemeSettings} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ""}>
    <BrowserRouter>
    <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex:"1000"}}>
    <TooltipComponent content='Settings' position='Top'>
        <button className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white' type='button'
        style={{backgroundColor: currentColor, borderRadius: '50%', boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)'}}
        onClick={() => setThemeSettings(true)}

        >
        <FiSettings />
        </button>
    </TooltipComponent>
        </div> 
        
        {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
              </div>  
        ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
          
              )}
              <div className= {
                `dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`
              }
              >
                <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                    <Navbar/>
                </div>
              <div> 
               {themeSettings && <ThemeSettings />} 
                    <Routes>
                        <Route path='/ecommerce' element={<Ecommerce />} />
                        <Route path='/ecommerce' element={<Ecommerce />} />

                        {/*Page*/}
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/employees' element={<Employees/>}/>
                        <Route path='/customers' element={<Customers/>}/>

                        {/* Apps*/}
                        <Route path='/kanban' element={<Kanban/>}/>
                        <Route path='/editor' element={<Editor/>}/>
                        <Route path='/calendar' element={<Calendar/>}/>
                        <Route path='/color-picker' element={<ColorPicker/>}/>

                        {/*Chat*/}
                        <Route path='/line' element={<Line/>}/>
                        <Route path='/area' element={<Area/>}/>
                        <Route path='/bar' element={<Bar/>}/>
                        <Route path='/pie' element={<Pie/>}/>
                        <Route path='/financial' element={<Financial/>}/>
                        <Route path='/color-Mapping' element={<ColorMapping/>}/>
                        <Route path='/pyramid' element={<Pyramid/>}/>
                        <Route path='/stacked' element={<Stacked/>}/>


                    </Routes>
              </div>
              <div className='w-full bottom-0'>
                <Footer />
                  </div>
              </div>             
    </div>
</BrowserRouter>
</div>

)
}

export default App