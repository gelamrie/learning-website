import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

const CourseDetails = () => {

    const { slug } = useParams()
    const navigate = useNavigate()
    const [showResetConfirm, setShowResetConfirm] = useState(false)

    const selectedPlan =
        localStorage.getItem('selectedPlan') || 'Free'

    const course = courses.find(
        (course) => course.slug === slug
    )

    // Course doesn't exist
    if (!course) {
        return (
            <div className='container mx-auto px-6 py-20 text-center'>

                <h1 className='text-3xl font-bold text-neutral-900 dark:text-white'>Course Not Found</h1>

                <button
                    onClick={() => navigate('/courses')}
                    className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium'>
                    Back to Courses
                </button>

            </div>
        )
    }

    const [completedLessons, setCompletedLessons] = useState([])
    const [loading, setLoading] = useState(true)

    // Load progress from Supabase
    useEffect(() => {
        const loadProgress = async () => {
            setLoading(true)

            const {
                data: { user }
            } = await supabase.auth.getUser()

            if (!user) {
                setLoading(false)
                return
            }

            const { data, error } = await supabase
                .from('user_progress')
                .select('completed_lessons')
                .eq('user_id', user.id)
                .eq('course_slug', slug)
                .maybeSingle()

            if (error) {
                console.error('Error loading progress:', error)
                setLoading(false)
                return
            }

            if (data) {
                setCompletedLessons(data.completed_lessons || [])
            }

            setLoading(false)
        }

        loadProgress()
    }, [slug])

    const totalLessons = course.lessons.length

    const completedCount = completedLessons.length

    const progressPercentage =
        totalLessons > 0
            ? Math.round((completedCount / totalLessons) * 100)
            : 0

    const resetProgress = async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser()

        if (!user) {
            return
        }

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

        // Update React state
        setCompletedLessons([])

        // Close modal
        setShowResetConfirm(false)
    }

    // Check course access
    const hasAccess =
        course.access === 'Free' ||
        selectedPlan === 'Pro' ||
        selectedPlan === 'Premium'

    // Block unauthorized users
    if (!hasAccess) {
        return (
            <div className='container mx-auto px-6 py-20'>

                <div className='max-w-lg mx-auto text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-8'>

                    <div className='mx-auto w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center'>
                        <i className='bx bx-lock-alt text-4xl text-blue-500'></i>
                    </div>

                    <h1 className='mt-5 text-2xl font-bold text-neutral-900 dark:text-white'>
                        Premium Course
                    </h1>

                    <p className='mt-3 text-neutral-600 dark:text-neutral-300'>
                        This course requires a {course.access} plan.
                    </p>

                    <button
                        onClick={() => navigate('/pricing')}
                        className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'>
                        View Pricing
                    </button>

                    <button
                        onClick={() => navigate('/courses')}
                        className='block w-full mt-3 px-5 py-2.5 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'>
                        Back to Courses
                    </button>

                </div>

            </div>
        )
    }

    return (

        <div className='container mx-auto px-6 py-20 max-w-5xl'>

            {/* BACK TO COURSES */}
            <button
                onClick={() => navigate('/courses')}
                className='flex items-center gap-2 mb-8 text-blue-500 hover:text-blue-600 transition-colors'>
                <i className='bx bx-arrow-back'></i>
                Back to Courses
            </button>

            {/* COURSE HEADER */}
            <div className='mb-12'>

                <div className='w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6'>
                    <i className={`bx ${course.icon} text-3xl text-blue-500`}
                    ></i>
                </div>

                <h1 className='text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white'>
                    {course.title}
                </h1>

                <p className='mt-4 text-lg text-neutral-600 dark:text-neutral-300 max-w-3xl'>
                    {course.description}
                </p>

                {/* COURSE INFORMATION */}

                <div className='flex flex-wrap gap-3 mt-6'>

                    <span className='px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-sm'>
                        {course.level}
                    </span>

                    <span className='px-3 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm'>
                        {course.duration}
                    </span>

                    <span className='px-3 py-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 text-sm'>
                        {course.lessons.length} Lessons
                    </span>

                </div>

                {/* COURSE PROGRESS */}

                <div className='mt-8 max-w-2xl'>

                    <div className='flex items-center justify-between mb-2'>

                        <span className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
                            Course Progress
                        </span>

                        <span className='text-sm font-semibold text-blue-500'>
                            {completedCount} / {totalLessons}
                        </span>


                    </div>

                    <div className='w-full h-3 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden'>

                        <div
                            className='h-full bg-blue-500 rounded-full transition-all duration-500'
                            style={{
                                width: `${progressPercentage}%`
                            }}
                        ></div>

                    </div>

                    <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-400'>
                        {completedCount} of {totalLessons} lessons completed
                    </p>

                    {completedCount > 0 && (
                        <button
                            onClick={() => setShowResetConfirm(true)}
                            className='mt-4 flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors'
                        >
                            <i className='bx bx-reset text-lg'></i>
                            Reset Progress
                        </button>
                    )}

                </div>
            </div>

            {/* LESSONS */}

            <div>

                <h2 className='text-2xl font-bold text-neutral-900 dark:text-white mb-5'>
                    Course Lessons
                </h2>

                <div className='space-y-3'>

                    {course.lessons.map((lesson, index) => {

                        const isCompleted = completedLessons.includes(lesson.id)

                        return (
                            <button
                                key={lesson.id}
                                onClick={() =>
                                    navigate(
                                        `/courses/${slug}/lesson/${lesson.id}`
                                    )
                                }
                                className={`w-full flex items-center gap-4 p-5 text-left rounded-xl border bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm transition-all duration-200 ${isCompleted
                                    ? 'border-blue-400/50 hover:border-blue-500'
                                    : 'border-neutral-200 dark:border-neutral-800 hover:border-blue-400'
                                    } hover:-translate-y-0.5`}
                            >

                                {/* LESSON NUMBER / COMPLETION ICON */}
                                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center font-semibold ${isCompleted
                                    ? 'bg-blue-500 text-neutral-950'
                                    : 'bg-blue-500/10 text-blue-500'
                                    }`}
                                >
                                    {isCompleted ? (
                                        <i className='bx bx-check text-xl'></i>
                                    ) : (
                                        index + 1
                                    )}
                                </div>


                                {/* LESSON INFO */}
                                <div className='flex-1'>

                                    <h3 className='font-semibold text-neutral-900 dark:text-white'>
                                        {lesson.title}
                                    </h3>

                                    <p className='mt-1 text-sm text-neutral-500 dark:text-neutral-400'>
                                        Lesson {index + 1}
                                    </p>

                                </div>


                                {/* STATUS */}

                                <div className='flex items-center gap-2'>

                                    {isCompleted ? (

                                        <span className='hidden sm:inline text-xs font-medium text-blue-500'>
                                            Completed
                                        </span>

                                    ) : (

                                        <span className='hidden sm:inline text-xs text-neutral-500 dark:text-neutral-400'>
                                            Not completed
                                        </span>

                                    )}

                                    <i
                                        className={`
                        bx
                        ${isCompleted
                                                ? 'bx-check-circle text-blue-500'
                                                : 'bx-right-arrow-alt text-blue-500'
                                            }
                        text-xl
                    `}
                                    ></i>

                                </div>

                            </button>
                        )
                    })}

                </div>

            </div>
            {showResetConfirm && (
                <div className='fixed inset-0 z-50 flex items-center justify-center px-6'>

                    {/* BACKDROP */}
                    <div
                        className='absolute inset-0 bg-black/40 backdrop-blur-sm'
                        onClick={() => setShowResetConfirm(false)}
                    ></div>

                    {/* MODAL */}
                    <div className='relative w-full max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-2xl'>

                        {/* ICON */}
                        <div className='mx-auto w-14 h-14 rounded-full bg-red-500/10 flex items-center justify-center'>
                            <i className='bx bx-reset text-3xl text-red-500'></i>
                        </div>

                        {/* TITLE */}
                        <h2 className='mt-5 text-xl font-bold text-center text-neutral-900 dark:text-white'>
                            Reset Course Progress?
                        </h2>

                        {/* MESSAGE */}
                        <p className='mt-3 text-center text-sm leading-relaxed text-neutral-600 dark:text-neutral-300'>
                            This will mark all completed lessons as incomplete.
                            Your progress will be permanently reset for this course.
                        </p>

                        {/* BUTTONS */}
                        <div className='flex gap-3 mt-6'>

                            <button
                                onClick={() => setShowResetConfirm(false)}
                                className='flex-1 py-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors'
                            >
                                Cancel
                            </button>

                            <button
                                onClick={resetProgress}
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

export default CourseDetails