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
                            <div className='flex items-center'>
                                <span className='inline-flex items-center px-5 py-0.5 rounded-full text-xs font-medium bg-indigo-900 text-blue-400 mr-2'>
                                    NEW
                                </span>
                                <h2 className='inline-block px-1.5 py-0.5 lg:px-3 lg:py-1.5 rounded-full bg-neutral-900 text-blue-400 font-medium text-sm backdrop-blur-sm border border-neutral-800'>
                                    <i className='bx bx-book mr-1'></i>Learn with us online</h2>
                            </div>
                            <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">

                                <div>
                                    <span>Learn </span>
                                    <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                                        anywhere
                                    </span>
                                </div>

                                <div>
                                    <span>Grow </span>
                                    <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                                        everywhere
                                    </span>
                                </div>

                            </h1>
                            <p className='text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light'>Unlock your full potential with our comprehensive online learning platform. Access expert-led courses, hands-on projects, and a supportive community to help you achieve your personal and professional goals.
                            </p>
                            <div className='flex gap-3 items-center'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero