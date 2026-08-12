import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'

const CourseComplete = () => {

    const navigate = useNavigate()
    const { slug } = useParams()
    const courseNames = {
        python: 'Python Programming',
        'web-development': 'Web Development',
        'ui-ux-design': 'UI/UX Design',
        'data-analytics': 'Data Analytics',
        cybersecurity: 'Cybersecurity Fundamentals',
        'database-management': 'Database Management'
    }
    // Find the current course
    const course = courses.find(
        (course) => course.slug === slug
    )

    // Course doesn't exist
    if (!course) {
        return (
            <div className="min-h-[80vh] flex items-center justify-center px-6">

                <div className="max-w-lg w-full text-center">

                    <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
                        Course Not Found
                    </h1>

                    <button
                        onClick={() => navigate('/courses')}
                        className="mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors"
                    >
                        Back to Courses
                    </button>
                </div>
            </div>
        )
    }

    const courseName = courseNames[slug] || 'Course'

    // Get completed lessons
    const storageKey = `completedLessons_${slug}`

    const completedLessons =
        JSON.parse(
            localStorage.getItem(storageKey)
        ) || []

    // Find the first incomplete lesson
    const firstIncompleteLesson =
        course.lessons.find(
            (lesson) =>
                !completedLessons.includes(lesson.id)
        )

    // Protect the completion page
    useEffect(() => {
        if (firstIncompleteLesson) {
            navigate(
                `/courses/${slug}/lesson/${firstIncompleteLesson.id}`,
                { replace: true }
            )
        }
    }, [firstIncompleteLesson, navigate, slug])

    return (
        <div className='min-h-[80vh] flex items-center justify-center px-6'>
            <div className='max-w-xl w-full text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-8 lg:p-12 shadow-lg'>
                <div className='mx-auto w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mb-6'>
                    <i className='bx bx-trophy text-5xl text-blue-500'></i>
                </div>
                <p className='uppercase text-xs tracking-widest text-blue-500 font-semibold'>Course Completed</p>
                <h1 className="mt-3 text-4xl font-bold text-neutral-900 dark:text-white">
                    Congratulations! 🎉
                </h1>

                <h2 className="mt-3 text-xl font-semibold text-neutral-900 dark:text-white">
                    {course.title}
                </h2>

                <p className='mt-4 text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed'>
                    You've successfully completed every lesson in this course.
                </p>

                <p className='mt-3 text-sm text-neutral-500 dark:text-neutral-400'>
                    {course.lessons.length} / {course.lessons.length} lessons completed
                </p>

                <div className='flex flex-col sm:flex-row justify-center gap-3 mt-8'>
                    <button
                        onClick={() =>
                            navigate(`/courses/${slug}`)
                        }
                        className='px-5 py-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors'>
                        Review Course
                    </button>

                    <button
                        onClick={() =>
                            navigate('/courses')
                        }
                        className='px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'>
                        Explore More Courses
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CourseComplete