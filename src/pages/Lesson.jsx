import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'

import pythonLessons from '../data/pythonLessons.jsx'
import webDevelopmentLessons from '../data/webDevelopmentLessons.jsx'
import uiUxLessons from '../data/uiUxLessons.jsx'
import dataAnalyticsLessons from '../data/dataAnalyticsLessons.jsx'
import cyberSecurityLessons from '../data/cyberSecurityLessons.jsx'
import databaseLessons from '../data/databaseLessons.jsx'

const lessons = {
    python: pythonLessons,
    'web-development': webDevelopmentLessons,
    'ui-ux-design': uiUxLessons,
    'data-analytics': dataAnalyticsLessons,
    cybersecurity: cyberSecurityLessons,
    'database-management': databaseLessons
}

const Lesson = () => {

    const { slug, lessonId } = useParams()
    const navigate = useNavigate()

    const [completedLessons, setCompletedLessons] = useState([])
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    useEffect(() => {
        const loadProgress = async () => {
            setLoading(true)

            const {
                data: { user }
            } = await supabase.auth.getUser()

            if (!user) {
                navigate('/login')
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
    }, [slug, navigate])

    if (loading) {
        return (
            <div className='container mx-auto px-6 py-20 max-w-4xl animate-pulse'>

                {/* BACK BUTTON SKELETON */}
                <div className='w-32 h-5 rounded bg-neutral-200 dark:bg-neutral-800 mb-8'></div>

                {/* LESSON NUMBER */}
                <div className='w-20 h-3 rounded bg-neutral-200 dark:bg-neutral-800'></div>

                {/* TITLE */}
                <div className='mt-4 space-y-3'>
                    <div className='w-3/4 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='w-1/2 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                </div>

                {/* CONTENT */}
                <div className='mt-10 space-y-4'>
                    <div className='w-full h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='w-full h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='w-5/6 h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='w-full h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='w-4/5 h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>
                </div>

                {/* COMPLETE BUTTON */}
                <div className='mt-10 flex justify-center'>
                    <div className='w-40 h-12 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                </div>

                {/* NAVIGATION */}
                <div className='mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-between'>
                    <div className='w-28 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                    <div className='w-32 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                </div>
            </div>
        )
    }

    const isCompleted = completedLessons.includes(Number(lessonId))

    const courseLessons = lessons[slug]
    if (!courseLessons) {
        return (
            <div className='container mx-auto px-6 py-20 text-center'>

                <h1 className='text-4xl font-bold text-neutral-900 dark:text-white'>
                    Course Not Found
                </h1>

                <button
                    onClick={() => navigate('/courses')}
                    className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium'>
                    Back to Courses
                </button>
            </div>
        )
    }

    const lesson = courseLessons.find(
        (item) => item.id === Number(lessonId)
    )

    if (!lesson) {
        return (
            <div className='container mx-auto px-6 py-20 text-center'>
                <h1 className='text-4xl font-bold text-neutral-900 dark:text-white'>
                    Lesson Not Found
                </h1>

                <button
                    onClick={() => navigate(`/courses/${slug}`)}
                    className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium' >
                    Back to Lessons
                </button>

            </div>
        )
    }

    //PREVENT SKIPPING LESSONS
    if (lesson.id > 1) {
        const previousLessonId = lesson.id - 1
        if (!completedLessons.includes(previousLessonId)) {
            return (
                <div className='container mx-auto px-6 py-20 text-center'>
                    <div className='max-w-lg mx-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-8'>
                        <div className='mx-auto w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center'>
                            <i className='bx bx-lock-alt text-4xl text-blue-500'></i>
                        </div>

                        <h1 className='mt-5 text-2xl font-bold text-neutral-900 dark:text-white'>
                            Lesson Locked
                        </h1>

                        <p className='mt-3 text-neutral-600 dark:text-neutral-300'>
                            Please complete Lesson {previousLessonId} before continuing to this lesson.
                        </p>

                        <button
                            onClick={() =>
                                navigate(
                                    `/courses/${slug}/lesson/${previousLessonId}`
                                )
                            }
                            className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors' >
                            Go to Lesson {previousLessonId}
                        </button>

                        <button
                            onClick={() =>
                                navigate(`/courses/${slug}`)
                            }
                            className='block w-full mt-3 px-5 py-2.5 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors' >
                            Back to Course
                        </button>
                    </div>
                </div>
            )
        }
    }

    const markAsCompleted = async () => {

        if (isCompleted || saving) {
            return
        }

        setSaving(true)

        const updatedLessons = completedLessons.includes(lesson.id)
            ? completedLessons
            : [...completedLessons, lesson.id]

        setCompletedLessons(updatedLessons)

        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser()

        if (userError || !user) {
            console.error('No authenticated user:', userError)
            setSaving(false)
            return
        }

        const { error } = await supabase
            .from('user_progress')
            .upsert(
                {
                    user_id: user.id,
                    course_slug: slug,
                    completed_lessons: updatedLessons,
                    updated_at: new Date().toISOString()
                },
                {
                    onConflict: 'user_id,course_slug'
                }
            )

        if (error) {
            console.error('Error saving progress:', error)
        }

        setSaving(false)
    }

    return (
        <div className='container mx-auto px-6 py-20 max-w-4xl'>

            {/* BACK TO COURSE */}
            <button
                onClick={() => navigate(`/courses/${slug}`)}
                className='flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors mb-8'>
                <i className='bx bx-arrow-back'></i>
                Back to Course
            </button>

            {/* LESSON NUMBER */}
            <p className='uppercase text-xs tracking-widest text-blue-500 font-medium'>
                Lesson {lesson.id}
            </p>

            {/* LESSON TITLE */}
            <h1 className='mt-3 text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white'>
                {lesson.title}
            </h1>

            {/* LESSON CONTENT */}
            <article className='mt-10 text-neutral-700 dark:text-neutral-300 leading-relaxed'>
                {lesson.content}
            </article>

            {/* COMPLETE LESSON */}
            <div className='mt-10 flex justify-center'>

                <button
                    onClick={markAsCompleted}
                    disabled={isCompleted || saving}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${isCompleted
                        ? 'bg-green-500/10 text-green-500 cursor-default'
                        : 'bg-blue-500 text-neutral-950 hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed'
                        }`} >

                    <i
                        className={`bx ${isCompleted
                            ? 'bx-check-circle'
                            : 'bx-check'
                            } text-xl`}></i>

                    {saving
                        ? 'Saving...'
                        : isCompleted
                            ? 'Lesson Completed'
                            : 'Mark as Complete'
                    }

                </button>
            </div>

            {/* LESSON NAVIGATION */}
            <div className='flex justify-between items-center gap-4 mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800'>

                {/* PREVIOUS LESSON */}
                {lesson.id > 1 ? (
                    <button
                        onClick={() =>
                            navigate(
                                `/courses/${slug}/lesson/${lesson.id - 1}`
                            )
                        }
                        className='flex items-center gap-2 px-4 py-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors'>
                        <i className='bx bx-left-arrow-alt'></i>
                        Previous
                    </button>
                ) : (
                    <div></div>
                )}

                {/* NEXT / FINISH */}
                {lesson.id < courseLessons.length ? (
                    <button
                        onClick={() => {

                            if (!isCompleted) {
                                return
                            }

                            navigate(
                                `/courses/${slug}/lesson/${lesson.id + 1}`
                            )
                        }}
                        disabled={!isCompleted}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-colors ${isCompleted
                            ? 'bg-blue-500 text-neutral-950 hover:bg-blue-600'
                            : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400 cursor-not-allowed'
                            }`}  >

                        {isCompleted
                            ? 'Next Lesson'
                            : 'Complete Lesson First'
                        }

                        <i className={`bx ${isCompleted
                            ? 'bx-right-arrow-alt'
                            : 'bx-lock-alt'
                            }`} ></i>
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            navigate(`/courses/${slug}/quiz`)
                        }
                        className='flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'
                    >
                        Take Quiz
                        <i className='bx bx-edit-alt'></i>
                    </button>
                )}
            </div>
        </div>
    )
}

export default Lesson