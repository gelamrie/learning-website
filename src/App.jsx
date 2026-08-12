import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'

import Hero from './components/Hero'
import Courses from './pages/Courses'
import Pricing from './pages/Pricing'
import Background from './components/Background'
import FaqSec from './pages/FaqSec'
import CourseDetails from './pages/CourseDetails'
import Lesson from './pages/Lesson'
import CourseComplete from './pages/CourseComplete'
import Subscription from './pages/Subscription'
import ScrollToTop from './components/ScrollToTop'
import Progress from './pages/Progress'
import 'boxicons/css/boxicons.min.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const Navigation = () => {
    const navigate = useNavigate()
    const location = useLocation()

    if (location.pathname === '/') {
      return null
    }

    return (
      <>
        {/* HOME BUTTON */}
        <button
          onClick={() => navigate('/')}
          className="absolute top-5 left-5 z-40 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          <i className="bx bx-home"></i>
        </button>

        {/* NAVIGATION */}
        <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
          <div className="flex items-center gap-1 px-2 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm shadow-lg">

            <button
              onClick={() => navigate('/courses')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Courses
            </button>

            <button
              onClick={() => navigate('/progress')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <i className="bx bx-bar-chart-alt-2 mr-1"></i>
              Progress
            </button>

            <button
              onClick={() => navigate('/pricing')}
              className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              Pricing
            </button>

          </div>
        </nav>
      </>
    )
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='relative min-h-screen'>

        <Background />
        <Navigation />
        {/* NAVIGATION */}
        {location.pathname !== '/' && (
          <nav className="absolute top-4 left-1/2 -translate-x-1/2 z-40">
            <div className="flex items-center gap-1 px-2 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm shadow-lg">

              <button
                onClick={() => navigate('/courses')}
                className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Courses
              </button>

              <button
                onClick={() => navigate('/progress')}
                className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <i className="bx bx-bar-chart-alt-2 mr-1"></i>
                Progress
              </button>

              <button
                onClick={() => navigate('/pricing')}
                className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                Pricing
              </button>

            </div>
          </nav>
        )}

        {/* Dark mode button */}
        <button
          onClick={toggleDarkMode}
          className='fixed top-3 right-3 lg:top-4 lg:right-4 z-50 w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-blue-500 text-neutral-950 shadow-lg hover:bg-blue-700 transition-colors'>
          <i
            className={`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`}
          />
        </button>

        {/* Page content */}
        <main className='relative z-10 min-h-screen'>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:slug' element={<CourseDetails />} />
            <Route path='/courses/:slug/lesson/:lessonId' element={<Lesson />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/faqsec' element={<FaqSec />} />
            <Route path='/courses/:slug/complete' element={<CourseComplete />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
          
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App