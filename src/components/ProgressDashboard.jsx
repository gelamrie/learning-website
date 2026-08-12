import React from 'react'
import { useNavigate } from 'react-router-dom'
import courses from '../data/courses'

const ProgressDashboard = () => {
    const navigate = useNavigate()

    const getCompletedLessons = (slug) => {
        const saved = localStorage.getItem(
            `completedLessons_${slug}`
        )

        return saved ? JSON.parse(saved) : []
    }

    const getProgress = (course) => {
        const completed = getCompletedLessons(course.slug)

        if (!course.lessons?.length) {
            return 0
        }

        return Math.round(
            (completed.length / course.lessons.length) * 100
        )
    }

    const getNextLesson = (course) => {
        const completed = getCompletedLessons(course.slug)

        return course.lessons.find(
            (lesson) => !completed.includes(lesson.id)
        )
    }

    const totalStarted = courses.filter(
        (course) =>
            getCompletedLessons(course.slug).length > 0
    ).length

    const totalCompleted = courses.filter(
        (course) =>
            getProgress(course) === 100
    ).length

    return (
        <div className="container mx-auto px-6 py-20 max-w-6xl">

            {/* HEADER */}

            <div className="mb-10">

                <p className="uppercase text-xs tracking-widest text-blue-500 font-semibold">
                    Learning Dashboard
                </p>

                <h1 className="mt-2 text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
                    My Progress
                </h1>

                <p className="mt-4 text-neutral-600 dark:text-neutral-300">
                    Track your learning progress and continue where you left off.
                </p>

            </div>


            {/* SUMMARY */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

                {/* STARTED */}

                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-6">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                Courses Started
                            </p>

                            <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
                                {totalStarted}
                            </p>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                            <i className="bx bx-book-open text-2xl text-blue-500"></i>
                        </div>

                    </div>

                </div>


                {/* COMPLETED */}

                <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-6">

                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                Courses Completed
                            </p>

                            <p className="mt-2 text-3xl font-bold text-neutral-900 dark:text-white">
                                {totalCompleted}
                            </p>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                            <i className="bx bx-check-circle text-2xl text-green-500"></i>
                        </div>

                    </div>

                </div>

            </div>


            {/* COURSE PROGRESS */}

            <div>

                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-5">
                    Your Courses
                </h2>

                <div className="space-y-4">

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
                                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-6"
                            >

                                {/* COURSE HEADER */}

                                <div className="flex items-start justify-between gap-4">

                                    <div className="flex items-center gap-4">

                                        <div className="w-12 h-12 shrink-0 rounded-xl bg-blue-500/10 flex items-center justify-center">

                                            <i
                                                className={`bx ${course.icon} text-2xl text-blue-500`}
                                            ></i>

                                        </div>

                                        <div>

                                            <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                                                {course.title}
                                            </h3>

                                            <p className="text-sm text-neutral-500 dark:text-neutral-400">
                                                {completed.length} / {course.lessons.length} lessons completed
                                            </p>

                                        </div>

                                    </div>


                                    {/* PERCENTAGE */}

                                    <span className="text-sm font-semibold text-blue-500">
                                        {progress}%
                                    </span>

                                </div>


                                {/* PROGRESS BAR */}

                                <div className="mt-5">

                                    <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">

                                        <div
                                            className="h-full rounded-full bg-blue-500 transition-all duration-500"
                                            style={{
                                                width: `${progress}%`
                                            }}
                                        ></div>

                                    </div>

                                </div>


                                {/* ACTION */}

                                <div className="mt-5 flex justify-end">

                                    {progress === 100 ? (

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/courses/${course.slug}/complete`
                                                )
                                            }
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-green-500/10 text-green-500 font-medium hover:bg-green-500/20 transition-colors"
                                        >
                                            <i className="bx bx-check-circle"></i>
                                            Completed
                                        </button>

                                    ) : nextLesson ? (

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/courses/${course.slug}/lesson/${nextLesson.id}`
                                                )
                                            }
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors"
                                        >
                                            {progress === 0
                                                ? 'Start Course'
                                                : 'Continue Learning'}

                                            <i className="bx bx-right-arrow-alt"></i>
                                        </button>

                                    ) : (

                                        <button
                                            onClick={() =>
                                                navigate(
                                                    `/courses/${course.slug}`
                                                )
                                            }
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors"
                                        >
                                            View Course
                                            <i className="bx bx-right-arrow-alt"></i>
                                        </button>

                                    )}

                                </div>

                            </div>

                        )
                    })}

                </div>

            </div>

        </div>
    )
}

export default ProgressDashboard