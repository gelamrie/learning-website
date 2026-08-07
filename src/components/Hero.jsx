import React from 'react'

const Hero = () => {
  return (
 <div className='isolate'>
    <div className='asolute inset-0 -z-10'>
        <div className='absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-20'></div>
    </div>
    <div className='container mx-auto px-6 py-20 md:py-24 lg:py-28 xl:py-32'>
        <div className='flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16'>
            <div className='flex-1 space-y-6 lg:space-y-7'>
                <div className='space-y-4 lg:space-y-5'>
                    <div className='flex items-center'></div>
                </div>
            </div>
        </div>
    </div>
 </div>
  )
}

export default Hero