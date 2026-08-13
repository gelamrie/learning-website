import React, { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation
} from 'react-router-dom'
import { supabase } from './lib/supabase'

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
import PageTransition from './components/PageTransition'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ProtectedRoute from './components/ProtectedRoute'
import UserMenu from './components/UserMenu'
import 'boxicons/css/boxicons.min.css'


const Navigation = () => {

  const navigate = useNavigate()
  const location = useLocation()

  // Don't show navigation on landing page
  if (location.pathname === '/') {
    return null
  }

  return (
    <>
      {/* HOME BUTTON */}
      <button
        onClick={() => navigate('/')}
        className='absolute top-5 left-5 z-40 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors'>
        <i className='bx bx-home'></i>
      </button>

      {/* NAVIGATION */}
      <nav className='absolute top-4 left-1/2 -translate-x-1/2 z-40 w-max max-w-[calc(100vw-7rem)]'>
        <div className='flex items-center gap-1 px-2 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm shadow-lg'>

          {/* COURSES */}
          <button
            onClick={() => navigate('/courses')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-0.5 ${location.pathname === '/courses'
              ? 'bg-blue-500/10 text-blue-500 cursor-default'
              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}>

            {location.pathname === '/courses' ? (
              <i className='bx bx-check text-lg'></i>
            ) : (
              <>
                <i className='bx bx-book-open mr-1'></i>
                Courses
              </>
            )}
          </button>

          {/* PROGRESS */}
          <button
            onClick={() => navigate('/progress')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-0.5 ${location.pathname === '/progress'
              ? 'bg-blue-500/10 text-blue-500 cursor-default'
              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}>
            {location.pathname === '/progress' ? (
              <i className='bx bx-check text-lg'></i>
            ) : (
              <>
                <i className='bx bx-bar-chart-alt-2 mr-1'></i>
                Progress
              </>
            )}
          </button>

          {/* PRICING */}
          <button
            onClick={() => navigate('/pricing')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-0.5 ${location.pathname === '/pricing'
              ? 'bg-blue-500/10 text-blue-500 cursor-default'
              : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}>
            {location.pathname === '/pricing' ? (
              <i className='bx bx-check text-lg'></i>
            ) : (
              <>
                <i className='bx bx-purchase-tag mr-1'></i>
                Pricing
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  )
}

const [user, setUser] = useState(null)
const [authLoading, setAuthLoading] = useState(true)

useEffect(() => {

  const getUser = async () => {

    const {
      data: { user }
    } = await supabase.auth.getUser()

    setUser(user)
    setAuthLoading(false)
  }

  getUser()

  const {
    data: { subscription }
  } = supabase.auth.onAuthStateChange(
    (_event, session) => {
      setUser(session?.user ?? null)
    }
  )

  return () => {
    subscription.unsubscribe()
  }

}, [])

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

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='relative min-h-screen'>
        {/* BACKGROUND */}
        <Background />
        {/* NAVIGATION */}
        <Navigation />
        <UserMenu />
        {/* DARK MODE */}
        <button
          onClick={toggleDarkMode}
          className='fixed top-3 right-3 lg:top-4 lg:right-4 z-50 w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center rounded-full bg-blue-500 text-neutral-950 shadow-lg hover:bg-blue-700 transition-colors'>
          <i className={`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`} />
        </button>

        {/* PAGE CONTENT */}
        <main className='relative z-10'>
          <PageTransition>
            <Routes>
              <Route path='/' element={<Hero />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/courses' element={<ProtectedRoute><Courses /></ProtectedRoute>} />
              <Route path='/courses/:slug' element={<ProtectedRoute><CourseDetails /></ProtectedRoute>} />
              <Route path='/courses/:slug/lesson/:lessonId' element={<ProtectedRoute><Lesson /></ProtectedRoute>} />
              <Route path='/pricing' element={<Pricing />} />
              <Route path='/faqsec' element={<FaqSec />} />
              <Route path='/courses/:slug/complete' element={<ProtectedRoute><CourseComplete /></ProtectedRoute>} />
              <Route path='/subscription' element={<Subscription />} />
              <Route path='/progress' element={<ProtectedRoute><Progress /></ProtectedRoute>} />

            </Routes>
          </PageTransition>
        </main>
      </div>
    </BrowserRouter>
  )
}


export default App