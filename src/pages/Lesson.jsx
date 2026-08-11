import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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

    const courseLessons = lessons[slug]

    if (!courseLessons) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">

                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
                    Course Not Found
                </h1>

                <button
                    onClick={() => navigate('/courses')}
                    className="
                        mt-6
                        px-5 py-2.5
                        rounded-lg
                        bg-blue-500
                        text-neutral-950
                        font-medium
                    "
                >
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
            <div className="container mx-auto px-6 py-20 text-center">

                <h1 className="
                    text-4xl
                    font-bold
                    text-neutral-900 dark:text-white
                ">
                    Lesson Not Found
                </h1>

                <button
                    onClick={() => navigate(`/courses/${slug}`)}
                    className="
                        mt-6
                        px-5 py-2.5
                        rounded-lg
                        bg-blue-500
                        text-neutral-950
                        font-medium
                    "
                >
                    Back to Lessons
                </button>

            </div>
        )
    }

    return (

        <div className="
            container
            mx-auto
            px-6
            py-20
            max-w-4xl
        ">

            {/* BACK TO COURSE */}

            <button
                onClick={() => navigate(`/courses/${slug}`)}
                className="
                    flex items-center gap-2
                    text-blue-500
                    hover:text-blue-600
                    transition-colors
                    mb-8
                "
            >
                <i className="bx bx-arrow-back"></i>
                Back to Course
            </button>


            {/* LESSON NUMBER */}

            <p className="
                uppercase
                text-xs
                tracking-widest
                text-blue-500
                font-medium
            ">
                Lesson {lesson.id}
            </p>


            {/* LESSON TITLE */}

            <h1 className="
                mt-3
                text-4xl lg:text-5xl
                font-bold
                text-neutral-900
                dark:text-white
            ">
                {lesson.title}
            </h1>


            {/* LESSON CONTENT */}

            <article className="
                mt-10
                text-neutral-700
                dark:text-neutral-300
                leading-relaxed
            ">
                {lesson.content}
            </article>

            {/* LESSON NAVIGATION */}

            <div className="
    flex
    justify-between
    items-center
    gap-4
    mt-12
    pt-8
    border-t
    border-neutral-200
    dark:border-neutral-800
">

                {/* PREVIOUS LESSON */}

                {lesson.id > 1 ? (

                    <button
                        onClick={() =>
                            navigate(
                                `/courses/${slug}/lesson/${lesson.id - 1}`
                            )
                        }
                        className="
                flex items-center gap-2
                px-4 py-2.5
                rounded-lg
                bg-neutral-200
                dark:bg-neutral-800
                text-neutral-700
                dark:text-neutral-300
                hover:bg-neutral-300
                dark:hover:bg-neutral-700
                transition-colors
            "
                    >
                        <i className="bx bx-left-arrow-alt"></i>
                        Previous
                    </button>

                ) : (

                    <div></div>

                )}


                {/* NEXT / FINISH */}

                {lesson.id < courseLessons.length ? (

                    <button
                        onClick={() =>
                            navigate(
                                `/courses/${slug}/lesson/${lesson.id + 1}`
                            )
                        }
                        className="
                flex items-center gap-2
                px-4 py-2.5
                rounded-lg
                bg-blue-500
                text-neutral-950
                font-medium
                hover:bg-blue-600
                transition-colors
            "
                    >
                        Next Lesson
                        <i className="bx bx-right-arrow-alt"></i>
                    </button>

                ) : (

                    <button
                        onClick={() =>
                            navigate(`/courses/${slug}/complete`)
                        }
                        className="
                flex items-center gap-2
                px-5 py-2.5
                rounded-lg
                bg-blue-500
                text-neutral-950
                font-medium
                hover:bg-blue-600
                transition-colors
            "
                    >
                        Finish Course
                        <i className="bx bx-check"></i>
                    </button>

                )}

            </div>

        </div>
    )
}

export default Lesson