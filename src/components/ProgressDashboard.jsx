import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

const ProgressDashboard = () => {

    const navigate = useNavigate()
    const [progressData, setProgressData] = useState([])
    const [loading, setLoading] = useState(true)
    const [resetCourseTarget, setResetCourseTarget] = useState(null)

    // LOAD USER PROGRESS
    useEffect(() => {
        const loadProgress = async () => {
            setLoading(true)
            // Get logged-in user
            const {
                data: { user },
                error: userError
            } = await supabase.auth.getUser()

            if (userError || !user) {
                navigate('/login')
                return
            }

            // Get all progress records for this user
            const { data, error } = await supabase
                .from('user_progress')
                .select('course_slug, completed_lessons')
                .eq('user_id', user.id)

            if (error) {
                console.error('Error loading progress:', error)
                setLoading(false)
                return
            }

            setProgressData(data || [])
            setLoading(false)
        }

        loadProgress()
    }, [navigate])

    // RESET COURSE PROGRESS
    const resetCourseProgress = async (slug) => {
        const {
            data: { user }
        } = await supabase.auth.getUser()

        if (!user) return

        const { error } = await supabase
            .from('user_progress')
            .upsert(
                {
                    user_id: user.id,
                    course_slug: slug,
                    completed_lessons: [],
                    updated_at: new Date().toISOString()
                },
                {
                    onConflict: 'user_id,course_slug'
                }
            )

        if (error) {
            console.error('Error resetting progress:', error)
            return
        }

        // Update local state
        setProgressData((prev) => {
            const exists = prev.some((item) => item.course_slug === slug)
            if (exists) {
                return prev.map((item) =>
                    item.course_slug === slug
                        ? { ...item, completed_lessons: [] }
                        : item
                )
            } else {
                return [...prev, { course_slug: slug, completed_lessons: [] }]
            }
        })

        setResetCourseTarget(null)
    }

    // GET COMPLETED LESSONS
    const getCompletedLessons = (slug) => {
        const progress = progressData.find(
            (item) => item.course_slug === slug
        )

        return progress?.completed_lessons || []
    }

    // GET COURSE PROGRESS
    const getProgress = (course) => {
        const completed = getCompletedLessons(course.slug)
        if (!course.lessons?.length) {
            return 0
        }

        return Math.round(
            (completed.length / course.lessons.length) * 100
        )
    }

    // GET NEXT LESSON
    const getNextLesson = (course) => {
        const completed = getCompletedLessons(course.slug)

        return course.lessons.find(
            (lesson) => !completed.includes(lesson.id)
        )
    }

    // SUMMARY
    const totalStarted = courses.filter(
        (course) =>
            getCompletedLessons(course.slug).length > 0
    ).length


    const totalCompleted = courses.filter(
        (course) =>
            getProgress(course) === 100
    ).length

    // LOADING SCREEN
    if (loading) {
        return (
            <div className='container mx-auto px-6 py-20 max-w-6xl animate-pulse'>
                {/* HEADER */}
                <div className='mb-10'>
                    <div className='w-32 h-3 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='mt-3 w-64 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='mt-4 w-96 max-w-full h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                </div>

                {/* SUMMARY */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10'>
                    <div className='h-28 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6'>
                        <div className='w-28 h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                        <div className='mt-3 w-12 h-8 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    </div>

                    <div className='h-28 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6'>
                        <div className='w-28 h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                        <div className='mt-3 w-12 h-8 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    </div>

                </div>

                {/* COURSE TITLE */}
                <div className='w-40 h-7 rounded bg-neutral-200 dark:bg-neutral-800 mb-5'></div>

                {/* COURSE CARDS */}
                <div className='space-y-4'>
                    {[1, 2, 3].map((item) => (
                        <div
                            key={item}
                            className='rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6'>

                            {/* COURSE HEADER */}
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-4'>
                                    <div className='w-12 h-12 rounded-xl bg-neutral-200 dark:bg-neutral-800'></div>
                                    <div>
                                        <div className='w-40 h-5 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                                        <div className='mt-2 w-28 h-3 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                                    </div>
                                </div>
                                <div className='w-10 h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                            </div>

                            {/* PROGRESS BAR */}
                            <div className='mt-5 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800'></div>

                            {/* BUTTON */}
                            <div className='mt-5 flex justify-end'>
                                <div className='w-36 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className='container mx-auto px-6 py-20 max-w-6xl'>

            {/* HEADER */}
            <div className='mb-10'>
                <p className='uppercase text-xs tracking-widest text-blue-500 font-semibold'>
                    Learning Dashboard
                </p>

                <h1 className='mt-2 text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white'>
                    My Progress
                </h1>

                <p className='mt-4 text-neutral-600 dark:text-neutral-300'>
                    Track your learning progress and continue where you left off.
                </p>

            </div>

            {/* SUMMARY */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10'>

                {/* STARTED */}
                <div className='rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-6'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                                Courses Started
                            </p>

                            <p className='mt-2 text-3xl font-bold text-neutral-900 dark:text-white'>
                                {totalStarted}
                            </p>
                        </div>

                        <div className='w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center'>
                            <i className='bx bx-book-open text-2xl text-blue-500'></i>
                        </div>
                    </div>
                </div>

                {/* COMPLETED */}
                <div className='rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-6'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                                Courses Completed
                            </p>

                            <p className='mt-2 text-3xl font-bold text-neutral-900 dark:text-white'>
                                {totalCompleted}
                            </p>
                        </div>

                        <div className='w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center'>
                            <i className='bx bx-check-circle text-2xl text-green-500'></i>
                        </div>

                    </div>
                </div>
            </div>

            {/* COURSE PROGRESS */}
            <div>
                <h2 className='text-2xl font-bold text-neutral-900 dark:text-white mb-5'>
                    Your Courses
                </h2>

                <div className='space-y-4'>
                    {courses.map((course) => {
                        const completed =
                            getCompletedLessons(course.slug)

                        const progress =
                            getProgress(course)

                        const nextLesson =
                            getNextLesson(course)
                        return (

                            <div
                                key={course.slug}
                                className='rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-6'>

                                {/* COURSE HEADER */}
                                <div className='flex items-start justify-between gap-4'>
                                    <div className='flex items-center gap-4'>
                                        <div className='w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center'>
                                            <i className={`bx ${course.icon} text-2xl text-blue-500`}></i>
                                        </div>

                                        <div>
                                            <h3 className='font-semibold text-lg text-neutral-900 dark:text-white'>
                                                {course.title}
                                            </h3>

                                            <p className='text-sm text-neutral-500 dark:text-neutral-400'>
                                                {completed.length} / {course.lessons.length} lessons completed
                                            </p>
                                        </div>
                                    </div>

                                    {/* PERCENTAGE */}
                                    <span className='text-sm font-semibold text-blue-500'>
                                        {progress}%
                                    </span>

                                </div>

                                {/* PROGRESS BAR */}
                                <div className='mt-5'>
                                    <div className='h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden'>
                                        <div className='h-full rounded-full bg-blue-500 transition-all duration-500'
                                            style={{
                                                width: `${progress}%`
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* ACTION */}
                                <div className='mt-5 flex items-center justify-between gap-3'>
                                    {completed.length > 0 ? (
                                        <button
                                            onClick={() => setResetCourseTarget(course)}
                                            className='flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium text-red-500 hover:bg-red-500/10 transition-colors'
                                            title='Reset Course Progress'
                                        >
                                            <i className='bx bx-reset text-base'></i>
                                            Reset Progress
                                        </button>
                                    ) : (
                                        <div></div>
                                    )}

                                    <div className='flex items-center gap-2'>
                                        {progress === 100 ? (
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/courses/${course.slug}/complete`
                                                    )
                                                }
                                                className='flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500/10 text-green-500 font-medium hover:bg-green-500/20 transition-colors'>
                                                <i className='bx bx-check-circle'></i>
                                                Completed
                                            </button>
                                        ) : nextLesson ? (
                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/courses/${course.slug}/lesson/${nextLesson.id}`
                                                    )
                                                }
                                                className='flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'>

                                                {progress === 0
                                                    ? 'Start Course'
                                                    : 'Continue Learning'}

                                                <i className='bx bx-right-arrow-alt'></i>
                                            </button>
                                        ) : (

                                            <button
                                                onClick={() =>
                                                    navigate(
                                                        `/courses/${course.slug}`
                                                    )
                                                }
                                                className='flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'>
                                                View Course
                                                <i className='bx bx-right-arrow-alt'></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* RESET CONFIRMATION MODAL */}
            {resetCourseTarget && (
                <div className='fixed inset-0 z-50 flex items-center justify-center px-6'>

                    {/* BACKDROP */}
                    <div
                        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
                        onClick={() => setResetCourseTarget(null)}
                    ></div>

                    {/* MODAL */}
                    <div className='relative w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-2xl z-10'>

                        {/* ICON */}
                        <div className='mx-auto w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center'>
                            <i className='bx bx-reset text-3xl text-red-500'></i>
                        </div>

                        {/* TITLE */}
                        <h2 className='mt-5 text-xl font-bold text-center text-neutral-900 dark:text-white'>
                            Reset Progress for {resetCourseTarget.title}?
                        </h2>

                        {/* MESSAGE */}
                        <p className='mt-3 text-center text-sm leading-relaxed text-neutral-600 dark:text-neutral-300'>
                            This will mark all completed lessons as incomplete for this course.
                            Your progress will be permanently reset.
                        </p>

                        {/* BUTTONS */}
                        <div className='flex gap-3 mt-6'>

                            <button
                                onClick={() => setResetCourseTarget(null)}
                                className='flex-1 py-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors'
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => resetCourseProgress(resetCourseTarget.slug)}
                                className='flex-1 py-2.5 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors'
                            >
                                Reset Progress
                            </button>

                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}

export default ProgressDashboard