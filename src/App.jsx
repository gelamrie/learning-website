import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useNavigate,   useLocation } from 'react-router-dom'

import Hero from './components/Hero'
import Courses from './pages/Courses'
import Pricing from './pages/Pricing'
import Background from './components/Background'
import FaqSec from './pages/FaqSec'
import CourseDetails from './pages/CourseDetails'
import Lesson from './pages/Lesson'
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

const BackButton = () => {
    const navigate = useNavigate()
    const location = useLocation()

    // Don't show the button on the landing page
    if (location.pathname === '/') {
        return null
    }

    return (
        <button
            onClick={() => navigate('/')}
            className="absolute top-5 left-5 z-20
                       bg-blue-500 text-white
                       px-4 py-2 rounded-lg
                       hover:bg-blue-600
                       transition-colors"
        >
            <i className="bx bx-home"></i>
        </button>
    )
}

  return (
    <BrowserRouter>
      <div className="relative min-h-screen">

        <Background />
        <BackButton />
        {/* Dark mode button */}
        <button
          onClick={toggleDarkMode}
          className="fixed top-3 right-3 lg:top-4 lg:right-4 z-50
                           w-9 h-9 lg:w-10 lg:h-10
                           flex items-center justify-center
                           rounded-full
                           bg-blue-500
                           text-neutral-950
                           shadow-lg
                           hover:bg-blue-700
                           transition-colors"
        >
          <i
            className={`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`}
          />
        </button>

        {/* Page content */}
        <main className="relative z-10 min-h-screen">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FaqSec />} />
            <Route path="/courses/:courseId" element={<CourseDetails />} />
            <Route path="/courses/:courseId/lesson/:lessonId" element={<Lesson />} />
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App