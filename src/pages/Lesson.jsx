import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const lessons = {
    python: {
        title: 'Python Programming',
        lessons: [
            {
                id: 1,
                title: 'Introduction to Python',
                content:
                    'Python is a beginner-friendly programming language known for its simple and readable syntax. In this lesson, you will learn what Python is, where it is used, and why it is popular.'
            },
            {
                id: 2,
                title: 'Variables and Data Types',
                content:
                    'Variables are used to store information in a program. Python supports several common data types including strings, integers, floating-point numbers, and booleans.'
            },
            {
                id: 3,
                title: 'Conditional Statements',
                content:
                    'Conditional statements allow your program to make decisions based on conditions. Python commonly uses if, elif, and else statements.'
            }
        ]
    },

    'web-development': {
        title: 'Web Development',
        lessons: [
            {
                id: 1,
                title: 'Introduction to Web Development',
                content:
                    'Web development involves creating websites and web applications. HTML provides structure, CSS controls presentation, and JavaScript adds interactivity.'
            },
            {
                id: 2,
                title: 'HTML Fundamentals',
                content:
                    'HTML is used to structure content on a webpage using elements such as headings, paragraphs, links, images, and forms.'
            },
            {
                id: 3,
                title: 'CSS Fundamentals',
                content:
                    'CSS controls the appearance and layout of HTML elements. You can use CSS to create colors, spacing, responsive layouts, and visual effects.'
            }
        ]
    }
}

const Lesson = () => {
    const { courseId, lessonId } = useParams()
    const navigate = useNavigate()

    const course = lessons[courseId]

    if (!course) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
                    Course not found
                </h1>

                <button
                    onClick={() => navigate('/courses')}
                    className="mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium"
                >
                    Back to Courses
                </button>
            </div>
        )
    }

    const currentLesson =
        course.lessons.find(
            lesson => lesson.id === Number(lessonId)
        )

    if (!currentLesson) {
        return (
            <div className="container mx-auto px-6 py-20 text-center">
                <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
                    Lesson not found
                </h1>

                <button
                    onClick={() =>
                        navigate(`/courses/${courseId}`)
                    }
                    className="mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium"
                >
                    Back to Course
                </button>
            </div>
        )
    }

    const currentIndex = course.lessons.findIndex(
        lesson => lesson.id === Number(lessonId)
    )

    const nextLesson = course.lessons[currentIndex + 1]

    return (
        <div className="container mx-auto px-6 py-20">

            <div className="max-w-4xl mx-auto">

                {/* Back */}
                <button
                    onClick={() =>
                        navigate(`/courses/${courseId}`)
                    }
                    className="flex items-center gap-2 mb-8
                               text-sm
                               text-neutral-600
                               dark:text-neutral-300
                               hover:text-blue-500
                               transition-colors"
                >
                    <i className="bx bx-arrow-back"></i>
                    Back to Course
                </button>


                {/* Course name */}
                <p className="uppercase text-xs tracking-widest
                              text-blue-500 font-medium">
                    {course.title}
                </p>


                {/* Lesson number */}
                <p className="mt-3 text-sm
                              text-neutral-500
                              dark:text-neutral-400">
                    Lesson {currentLesson.id} of {course.lessons.length}
                </p>


                {/* Lesson title */}
                <h1 className="mt-2 text-4xl lg:text-5xl
                               font-bold
                               text-neutral-900
                               dark:text-white">
                    {currentLesson.title}
                </h1>


                {/* Lesson content */}
                <div className="mt-10 rounded-2xl
                                border border-neutral-200
                                dark:border-neutral-800
                                bg-white/70
                                dark:bg-neutral-900/70
                                backdrop-blur-sm
                                p-6 lg:p-10">

                    <p className="text-base lg:text-lg
                                  leading-relaxed
                                  text-neutral-700
                                  dark:text-neutral-300">
                        {currentLesson.content}
                    </p>

                </div>


                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">

                    <button
                        onClick={() =>
                            navigate(`/courses/${courseId}`)
                        }
                        className="px-5 py-2.5 rounded-lg
                                   border border-neutral-300
                                   dark:border-neutral-700
                                   text-neutral-700
                                   dark:text-neutral-300
                                   hover:bg-neutral-100
                                   dark:hover:bg-neutral-800
                                   transition-colors"
                    >
                        <i className="bx bx-arrow-back mr-2"></i>
                        Course Overview
                    </button>


                    {nextLesson ? (
                        <button
                            onClick={() =>
                                navigate(
                                    `/courses/${courseId}/lesson/${nextLesson.id}`
                                )
                            }
                            className="px-5 py-2.5 rounded-lg
                                       bg-blue-500
                                       text-neutral-950
                                       font-medium
                                       hover:bg-blue-600
                                       transition-colors"
                        >
                            Next Lesson
                            <i className="bx bx-right-arrow-alt ml-2"></i>
                        </button>
                    ) : (
                        <button
                            onClick={() =>
                                navigate(`/courses/${courseId}`)
                            }
                            className="px-5 py-2.5 rounded-lg
                                       bg-blue-500
                                       text-neutral-950
                                       font-medium
                                       hover:bg-blue-600
                                       transition-colors"
                        >
                            Finish Course
                            <i className="bx bx-check ml-2"></i>
                        </button>
                    )}

                </div>

            </div>

        </div>
    )
}

export default Lesson