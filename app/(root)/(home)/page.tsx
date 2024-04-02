import MeetingTypeList from '@/components/MeetingTypeList';
import React from 'react'

const Home = () => {
  const now = new Date()
  
  const time  = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
  const date = (new Intl.DateTimeFormat('en-us',{
    dateStyle:"full"
  })).format(now);
  
  
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
     
     <div className='h-[300px] w-full rouned-[20px] bg-hero bg-cover'>
      <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
               <h2 className='glassmorphism  max-w-[270px] rounded
               text-base font-normal py-2 text-center'>Upcoming Meeting at: 12:30 PM</h2>
               <div className='flex flex-col gap-2'>
                  <h1 className='text-4xl font-extrabold lg:text-7xl'>
                    {time}
                  </h1>
                  <p className='text-lg font-medium lg:text-2xl text-sky-1 '>{date}</p>
               </div>
      </div>
     </div>
      
      <MeetingTypeList/>
    </section>
  )
}

export default Home