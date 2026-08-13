import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import courses from '../data/courses'

const CourseComplete = () => {
    const navigate = useNavigate()
    const { slug } = useParams()

    const [completedLessons, setCompletedLessons] = useState([])
    const [loading, setLoading] = useState(true)

    // Find current course
    const course = courses.find(
        (course) => course.slug === slug
    )

    /*
     * LOAD PROGRESS FROM SUPABASE
     */
    useEffect(() => {
        const loadProgress = async () => {
            const {
                data: { user },
                error: userError
            } = await supabase.auth.getUser()

            if (userError || !user) {
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
                console.error(
                    'Error loading course progress:',
                    error
                )

                setLoading(false)
                return
            }

            setCompletedLessons(
                data?.completed_lessons || []
            )

            setLoading(false)
        }

        loadProgress()
    }, [slug])

    /*
     * REDIRECT IF COURSE DOESN'T EXIST
     */
    useEffect(() => {
        if (!course) {
            navigate('/courses', { replace: true })
        }
    }, [course, navigate])

    /*
     * FIND FIRST INCOMPLETE LESSON
     */
    const firstIncompleteLesson = course
        ? course.lessons.find(
            (lesson) =>
                !completedLessons.includes(lesson.id)
        )
        : null

    /*
     * PROTECT COMPLETION PAGE
     */
    useEffect(() => {
        if (
            !loading &&
            course &&
            firstIncompleteLesson
        ) {
            navigate(
                `/courses/${slug}/lesson/${firstIncompleteLesson.id}`,
                { replace: true }
            )
        }
    }, [
        loading,
        course,
        firstIncompleteLesson,
        navigate,
        slug
    ])

    /*
     * LOADING SKELETON
     */
    if (loading) {
        return (
            <div className='min-h-[80vh] flex items-center justify-center px-6 animate-pulse'>

                <div className='max-w-xl w-full text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-8 lg:p-12'>

                    <div className='mx-auto w-20 h-20 rounded-full bg-neutral-200 dark:bg-neutral-800'></div>

                    <div className='mx-auto mt-6 w-32 h-3 rounded bg-neutral-200 dark:bg-neutral-800'></div>

                    <div className='mx-auto mt-4 w-64 h-9 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>

                    <div className='mx-auto mt-4 w-48 h-6 rounded bg-neutral-200 dark:bg-neutral-800'></div>

                    <div className='mx-auto mt-5 w-full max-w-md h-5 rounded bg-neutral-200 dark:bg-neutral-800'></div>

                    <div className='mx-auto mt-3 w-32 h-4 rounded bg-neutral-200 dark:bg-neutral-800'></div>

                    <div className='flex justify-center gap-3 mt-8'>
                        <div className='w-32 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                        <div className='w-40 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800'></div>
                    </div>

                </div>

            </div>
        )
    }

    /*
     * COURSE NOT FOUND
     */
    if (!course) {
        return null
    }

    /*
     * COURSE NOT YET COMPLETE
     *
     * The useEffect above will redirect the user.
     */
    if (firstIncompleteLesson) {
        return null
    }

    /*
     * COURSE IS COMPLETE
     */
    return (
        <div className='min-h-[80vh] flex items-center justify-center px-6'>

            <div className='max-w-xl w-full text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-8 lg:p-12 shadow-lg'>

                {/* TROPHY */}
                <div className='mx-auto w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-6'>
                    <i className='bx bx-trophy text-5xl text-blue-500'></i>
                </div>

                {/* LABEL */}
                <p className='uppercase text-xs tracking-widest text-blue-500 font-semibold'>
                    Course Completed
                </p>

                {/* TITLE */}
                <h1 className='mt-3 text-4xl font-bold text-neutral-900 dark:text-white'>
                    Congratulations! 🎉
                </h1>

                {/* COURSE NAME */}
                <h2 className='mt-3 text-xl font-semibold text-neutral-900 dark:text-white'>
                    {course.title}
                </h2>

                {/* MESSAGE */}
                <p className='mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                    You've successfully completed every lesson in this course.
                </p>

                {/* PROGRESS */}
                <p className='mt-3 text-sm text-neutral-500 dark:text-neutral-400'>
                    {completedLessons.length} / {course.lessons.length} lessons completed
                </p>

                {/* BUTTONS */}
                <div className='flex flex-col sm:flex-row justify-center gap-3 mt-8'>

                    <button
                        onClick={() =>
                            navigate(`/courses/${slug}`)
                        }
                        className='px-5 py-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors'
                    >
                        Review Course
                    </button>

                    <button
                        onClick={() =>
                            navigate('/courses')
                        }
                        className='px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'
                    >
                        Explore More Courses
                    </button>

                </div>

            </div>

        </div>
    )
}

export default CourseComplete