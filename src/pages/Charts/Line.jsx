import React from 'react'
import { ChartsHeader, Header, LineChart } from '../../components'



const Line = () => {
  return (

    <div className='m-4 md:m-10 mt-24 p-1- bg-white dark:bg-secondary-dark-lg rounded-3xl'>
      <Header category="Chart" title="Inflation Rate"/>
      <div className='w-full' >
      <LineChart />


      </div>
    </div>

  )
}

export default Line