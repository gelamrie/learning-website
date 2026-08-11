import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import pythonLessons from '../data/pythonLessons.jsx'
import webDevelopmentLessons from '../data/webDevelopmentLessons.jsx'
import uiUxLessons from '../data/uiUxLessons.jsx'
import dataAnalyticsLessons from '../data/dataAnalyticsLessons.jsx'
import cyberSecurityLessons from '../data/cyberSecurityLessons.jsx'
import databaseLessons from '../data/databaseLessons.jsx'

const courses = {
    python: {
        title: 'Python Programming',
        description:
            'Learn programming fundamentals and build practical applications with Python.',
        level: 'Beginner',
        duration: '6 weeks',
        icon: 'bx-terminal',
        lessons: pythonLessons
    },

    'web-development': {
        title: 'Web Development',
        description:
            'Learn how to build modern and responsive websites using HTML, CSS, and JavaScript.',
        level: 'Beginner',
        duration: '8 weeks',
        icon: 'bx-code-alt',
        lessons: webDevelopmentLessons
    },

    'ui-ux-design': {
        title: 'UI/UX Design',
        description:
            'Learn how to create intuitive and engaging digital experiences.',
        level: 'Beginner',
        duration: '5 weeks',
        icon: 'bx-palette',
        lessons: uiUxLessons
    },

    'data-analytics': {
        title: 'Data Analytics',
        description:
            'Learn how to analyze data and turn information into useful insights.',
        level: 'Intermediate',
        duration: '8 weeks',
        icon: 'bx-bar-chart-alt-2',
        lessons: dataAnalyticsLessons
    },

    cybersecurity: {
        title: 'Cybersecurity Fundamentals',
        description:
            'Understand the fundamentals of protecting systems, networks, and information.',
        level: 'Intermediate',
        duration: '7 weeks',
        icon: 'bx-shield-quarter',
        lessons: cyberSecurityLessons
    },

    'database-management': {
        title: 'Database Management',
        description:
            'Learn how to design, manage, and work with relational databases.',
        level: 'Intermediate',
        duration: '6 weeks',
        icon: 'bx-data',
        lessons: databaseLessons
    }
}

const CourseDetails = () => {

    const { slug } = useParams()
    const navigate = useNavigate()

    const course = courses[slug]

    // If the course does not exist
    if (!course) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">

                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
                    Course Not Found
                </h1>

                <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                    The course you are looking for does not exist.
                </p>

                <button
                    onClick={() => navigate('/courses')}
                    className="mt-6 px-5 py-2.5 rounded-lg
                               bg-blue-500 text-neutral-950
                               font-medium
                               hover:bg-blue-600
                               transition-colors"
                >
                    Back to Courses
                </button>

            </div>
        )
    }

    return (

        <div className="container mx-auto px-6 py-20 max-w-5xl">

            {/* BACK TO COURSES */}
            <button
                onClick={() => navigate('/courses')}
                className="
                flex items-center gap-2
                mb-8
                text-blue-500
                hover:text-blue-600
                transition-colors
            "
            >
                <i className="bx bx-arrow-back"></i>
                Back to Courses
            </button>

            {/* COURSE HEADER */}
            <div className="mb-12">

                <div className="
                    w-14 h-14
                    rounded-xl
                    bg-blue-500/10
                    flex items-center justify-center
                    mb-6
                ">
                    <i
                        className={`bx ${course.icon} text-3xl text-blue-500`}
                    ></i>
                </div>

                <h1 className="
                    text-4xl lg:text-5xl
                    font-bold
                    text-neutral-900 dark:text-white
                ">
                    {course.title}
                </h1>

                <p className="
                    mt-4
                    text-lg
                    text-neutral-600 dark:text-neutral-300
                    max-w-3xl
                ">
                    {course.description}
                </p>

                {/* COURSE INFORMATION */}

                <div className="flex flex-wrap gap-3 mt-6">

                    <span className="
                        px-3 py-1.5
                        rounded-full
                        bg-blue-500/10
                        text-blue-500
                        text-sm
                    ">
                        {course.level}
                    </span>

                    <span className="
                        px-3 py-1.5
                        rounded-full
                        bg-neutral-200 dark:bg-neutral-800
                        text-neutral-600 dark:text-neutral-300
                        text-sm
                    ">
                        {course.duration}
                    </span>

                    <span className="
                        px-3 py-1.5
                        rounded-full
                        bg-neutral-200 dark:bg-neutral-800
                        text-neutral-600 dark:text-neutral-300
                        text-sm
                    ">
                        {course.lessons.length} Lessons
                    </span>

                </div>

            </div>


            {/* LESSONS */}

            <div>

                <h2 className="
                    text-2xl
                    font-bold
                    text-neutral-900 dark:text-white
                    mb-5
                ">
                    Course Lessons
                </h2>

                <div className="space-y-3">

                    {course.lessons.map((lesson, index) => (

                        <button
                            key={lesson.id}
                            onClick={() =>
                                navigate(
                                    `/courses/${slug}/lesson/${lesson.id}`
                                )
                            }
                            className="
                                w-full
                                flex items-center
                                gap-4
                                p-5
                                text-left
                                rounded-xl
                                border
                                border-neutral-200
                                dark:border-neutral-800
                                bg-white/70
                                dark:bg-neutral-900/70
                                backdrop-blur-sm
                                hover:border-blue-400
                                hover:-translate-y-0.5
                                transition-all duration-200
                            "
                        >

                            {/* LESSON NUMBER */}

                            <div className="
                                w-10 h-10
                                shrink-0
                                rounded-full
                                bg-blue-500/10
                                text-blue-500
                                flex items-center justify-center
                                font-semibold
                            ">
                                {index + 1}
                            </div>


                            {/* LESSON INFO */}

                            <div className="flex-1">

                                <h3 className="
                                    font-semibold
                                    text-neutral-900
                                    dark:text-white
                                ">
                                    {lesson.title}
                                </h3>

                                <p className="
                                    mt-1
                                    text-sm
                                    text-neutral-500
                                    dark:text-neutral-400
                                ">
                                    Lesson {index + 1}
                                </p>

                            </div>


                            {/* ARROW */}

                            <i className="
                                bx bx-right-arrow-alt
                                text-xl
                                text-blue-500
                            "></i>

                        </button>

                    ))}

                </div>

            </div>

        </div>
    )
}

export default CourseDetails