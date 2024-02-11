import React from 'react';
import { FaDotCircle } from "react-icons/fa";
import { Button, SparkLine, Stacked } from '../components';
import { earningData, SparklineAreaData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
 const  {currentColor } = useStateContext();


  return (
    <div className="mt-24 overflow-x-hidden">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-contain bg-center'>
        <div className="flex justify-between items-center">         
           <div>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl font-extrabold'>GH₵824,085.26</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button
              color='white'
              bgColor={currentColor}
              title='View Details'
              borderRadius="12px"
              size='md'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center '>
          {earningData.map((item) => (
            <div
              key={item.title}
              className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'
            >
              <button 
                type='button' 
                className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' 
                style={{color: item.iconColor, backgroundColor: item.iconBg}}
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-gray-400 text-lg'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='mt-3 text-sm text-gray-400 '>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Revenue Updates */}
      <div className='flex gap-10 flex-wrap justify-center'> 
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780 '>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl ml-3'>Revenue Updates</p>
            <div className='flex items-center gap-4 '>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span> <FaDotCircle /> </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 mr-3 text-green-600 hover:drop-shadow-xl'>
                <span> <FaDotCircle /> </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-color m-4 pr-10 border-r-1'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>GH₵824,085.26</span>
                  <span className='p-1.5 ml-3 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-green-400'>23%</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Budget
                </p>
              </div>
              <div className='mt-8'>
                <p>
                  <span className='text-3xl font-semibold'>GH₵24,085.26</span>
                </p>
                <p className='text-gray-500 mt-1'>
                  Expenses
                </p>
              </div>
              <div className='mt-5' style={{ zIndex: 999, paddingTop: '80px' }}>                <SparkLine 
               
                  data={SparklineAreaData}
                  height="100px"
                  width="200px"
                />
              </div>
              <div className='mt-10 hover:ease-out'>
            <Button 
            color="white"
            bgColor={currentColor}
            title="Download"
            borderRadius="12px"
            />
              </div>
            </div>
            <div>
              <Stacked 
              width="320px"
              height="360px"
              
              
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
