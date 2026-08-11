import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()
   
    return (
        <div className='isolate'>
            <div className='absolute inset-0 -z-10'>
                <div className='absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-20'></div>
            </div>
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-20 md:py-24 lg:py-28 xl:py-32">
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
                                        anywhere,
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
                            <div className='flex gap-3 items-center'>
                                <div className='h-px bg-neutral-300 dark:text-neutral-700 w-12'></div>
                                <div>
                                    <p className='uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium'>master new skills</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-3 lg:gap-4'>
                                <button 
                                onClick={() => navigate('/courses')}
                                className='px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-blue-500 dark:hover:bg-blue-600 dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-500/20 flex items-center transition group'>
                                    <i className='bx bx-pencil mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition-transform'></i>
                                    <span>Explore Courses</span>
                                </button>
                                <button 
                                onClick={() => navigate('/pricing')}
                                className='px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group'>
                                    <i className='bx bx-wallet-alt mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:opacity-100 transition-opacity'></i>
                                    <span>View Pricing</span>
                                </button>
                            </div>
                            <div className='flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800'>
                                <div className='flex -space-x-3'>
                                    <img src="https://randomuser.me/api/portraits/women/5.jpg" alt="User" className='w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover' />
                                    <img src="https://randomuser.me/api/portraits/men/10.jpg" alt="User" className='w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover' />
                                    <img src="https://randomuser.me/api/portraits/women/42.jpg" alt="User" className='w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover' />
                                    <span className='flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 bg-neutral-900 dark:bg-blue-500 text-white dark:text-neutral-900 text-xs font-medium'>+7k</span>
                                </div>
                                <div className='space-y-1'>
                                    <div className='flex items-center'>
                                        <i className='bx bxs-star text-amber-500 mr-1'></i>
                                        <i className='bx bxs-star text-amber-500 mr-1'></i>
                                        <i className='bx bxs-star text-amber-500 mr-1'></i>
                                        <i className='bx bxs-star text-amber-500 mr-1'></i>
                                        <i className='bx bxs-star-half text-amber-500 mr-1'></i>
                                        <span className='text-neutral-500 dark:text-neutral-400 text-sm ml-1'>4.7 out of 5 stars</span>
                                    </div>
                                    <p className='text-sm text-neutral-600 dark:text-neutral-400 text-sm'>Trusted by{' '}<span className='font-bold text-neutral-900 dark:text-white'>7,000+</span>{' '}learners worldwide</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 w-full'>
                        <div className='relative'>
                            <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-900 rounded-2xl blur-xl opacity-50 animate-pulse'></div>
                            <div className='relative bg-white dark:bg-neutral-900 p-4 lg:p-5 xl:p-6 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800'>
                                <div className='flex items-center justify-between mb-3 lg:mb-4'>
                                    <div className='flex items-center gap-2'>
                                        <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-500'></span>
                                        <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-amber-500'></span>
                                        <span className='w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-500'></span>
                                    </div>
                                    <div className='text-xs text-neutral-500 dark:text-neutral-400'>React and Web Fundamentals
                                    </div>
                                </div>
                                <div className='h-56 md:h-64 lg:h-60 xl:h-72 rounded-lg bg-neutral-100 dark:bg-neutral-800 overflow-hidden relative'>
                                    <img src="/images/course-preview-light.png" alt="Course preview light" className='w-full h-full object-cover object-left-top dark:hidden' />
                                    <img src="/images/course-preview-dark.png" alt="Course preview dark" className='w-full h-full object-cover object-left-top dark:block' />
                                    <div className='absolute bottom-4 right-4'>
                                        <div className='w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-r from-blue-500 to-indigo-900 flex items-center justify-center text-white shadow-lg animate-pulse'>
                                            <i className='bx bx-brightness-half text-xl lg:text-2xl'></i>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3 lg:mt-4 flex justify-between items-center'>
                                    <div className='flex gap-2'>
                                        <span className='px-2.5 py-1 lg:px-3 rounded-full bg-neutral-900 text-blue-400 text-xs font-medium flex items-center'>
                                            <i className='bx bxl-tailwind-css mr-1'></i> Tailwind v4
                                        </span>
                                        <span className='px-2.5 py-1 lg:px-3 rounded-full bg-neutral-100 dark:bg-neutral-800 text-indigo-900 dark:text-indigo-400 border border-neutral-200 dark:border-neutral-700 text-xs font-medium flex items-center'>
                                            <i className='bx bxl-react mr-1'></i> React
                                        </span>
                                    </div>
                                    <button className='w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 flex items-center justify-center rounded-full bg-blue-500 text-neutral-900 hover:bg-blue-600 transition'>
                                        <i className='bx bx-copy text-sm'></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <button
                onClick={() => navigate('/faqsec')}
                className='
                fixed
                bottom-4 left-4
                sm:bottom-6 sm:left-6
                z-50
                flex items-center
                bg-neutral-900 text-white
                px-3 py-2
                sm:px-4 sm:py-2.5
                rounded-lg
                text-xs sm:text-sm
                shadow-lg
                hover:bg-neutral-800
                transition-colors'
>
    <i className="bx bx-search-alt mr-1.5 text-blue-500"></i>
    Frequently Asked Questions
</button>
        </div>
        
        
    )
}

export default Hero