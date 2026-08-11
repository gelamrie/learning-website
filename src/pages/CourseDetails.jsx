import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'

const CourseDetails = () => {

    const { slug } = useParams()
    const navigate = useNavigate()

    const selectedPlan =
        localStorage.getItem('selectedPlan') || 'Free'

    const course = courses.find(
        (course) => course.slug === slug
    )

    const courseLessons = course?.lessons
    
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

            </div>


            {/* LESSONS */}

            <div>

                <h2 className='text-2xl font-bold text-neutral-900 dark:text-white mb-5'>
                    Course Lessons
                </h2>

                <div className='space-y-3'>

                    {course.lessons.map((lesson, index) => (

                        <button
                            key={lesson.id}
                            onClick={() =>
                                navigate(
                                    `/courses/${slug}/lesson/${lesson.id}`
                                )
                            }
                            className='w-full flex items-center gap-4 p-5 text-left rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm hover:border-blue-400 hover:-translate-y-0.5 transition-all duration-200'>

                            {/* LESSON NUMBER */}

                            <div className='w-10 h-10 shrink-0 rounded-full bg-blue-500/10 text-blue-500 flex items-center justify-center font-semibold'>
                                {index + 1}
                            </div>


                            {/* LESSON INFO */}

                            <div className='flex-1'>

                                <h3 className='font-semibold text-neutral-900 dark:text-white'>{lesson.title}</h3>

                                <p className='mt-1 text-sm text-neutral-500 dark:text-neutral-400'>
                                    Lesson {index + 1}
                                </p>

                            </div>

                            {/* ARROW */}

                            <i className='bx bx-right-arrow-alt text-xl text-blue-500'></i>
                        </button>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default CourseDetails