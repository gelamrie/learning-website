import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Courses = () => {

    const navigate = useNavigate()

    const [selectedCategory, setSelectedCategory] = useState('All')

    const categories = [
        'All',
        'Programming',
        'Development',
        'Design',
        'Data',
        'Security'
    ]

    const courses = [
        {
            title: 'Python Programming',
            description: 'Learn programming fundamentals and build practical applications with Python.',
            category: 'Programming',
            level: 'Beginner',
            duration: '6 weeks',
            icon: 'bx-terminal',
            slug: 'python'
        },
        {
            title: 'Web Development',
            description: 'Learn how to build modern and responsive websites using HTML, CSS, and JavaScript.',
            category: 'Development',
            slug: 'web-development',
            level: 'Beginner',
            duration: '8 weeks',
            icon: 'bx-code-alt'
        },
        {
            title: 'UI/UX Design',
            description: 'Learn how to create intuitive and engaging digital experiences.',
            category: 'Design',
            level: 'Beginner',
            duration: '5 weeks',
            icon: 'bx-palette',
            slug: 'ui-ux-design'
        },
        {
            title: 'Data Analytics',
            description: 'Learn how to analyze data and turn information into useful insights.',
            category: 'Data',
            slug: 'data-analytics',
            level: 'Intermediate',
            duration: '8 weeks',
            icon: 'bx-bar-chart-alt-2'
        },
        {
            title: 'Cybersecurity Fundamentals',
            description: 'Understand the fundamentals of protecting systems, networks, and information.',
            category: 'Security',
            slug: 'cybersecurity',
            level: 'Intermediate',
            duration: '7 weeks',
            icon: 'bx-shield-quarter'
        },
        {
            title: 'Database Management',
            description: 'Learn how to design, manage, and work with relational databases.',
            category: 'Development',
            slug: 'database-management',
            level: 'Intermediate',
            duration: '6 weeks',
            icon: 'bx-data' 
        }
    ]

    const filteredCourses =
        selectedCategory === 'All'
            ? courses
            : courses.filter(
                (course) => course.category === selectedCategory
            )

    return (

        <div className="container mx-auto px-6 py-20">

            {/*ORIGINAL HEADER*/}
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
                Courses
            </h1>

            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                Browse our wide selection of courses and find the perfect one for you.
            </p>


            {/* CATEGORY FILTERS */}
            <div className="flex flex-wrap gap-2 mt-10">

                {categories.map((category) => (

                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`
                            px-4 py-2 rounded-full text-sm font-medium
                            transition-colors
                            ${
                                selectedCategory === category
                                    ? 'bg-blue-500 text-neutral-950'
                                    : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-300 dark:hover:bg-neutral-700'
                            }
                        `}
                    >
                        {category}
                    </button>

                ))}

            </div>


            {/* COURSE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

                {filteredCourses.map((course) => (

                    <div
                        key={course.title}
                        className="
                            group
                            rounded-2xl
                            border border-neutral-200 dark:border-neutral-800
                            bg-white/70 dark:bg-neutral-900/70
                            backdrop-blur-sm
                            p-6
                            hover:-translate-y-1
                            hover:border-blue-400
                            transition-all duration-300
                        "
                    >

                        {/* ICON */}
                        <div className="
                            w-12 h-12
                            rounded-xl
                            bg-blue-500/10
                            flex items-center justify-center
                            mb-5
                        ">
                            <i
                                className={`bx ${course.icon} text-2xl text-blue-500`}
                            ></i>
                        </div>


                        {/* TITLE */}
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                            {course.title}
                        </h2>


                        {/* DESCRIPTION */}
                        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {course.description}
                        </p>


                        {/* DETAILS */}
                        <div className="flex flex-wrap gap-2 mt-5">

                            <span className="
                                px-2.5 py-1
                                rounded-full
                                bg-blue-500/10
                                text-blue-500
                                text-xs
                            ">
                                {course.level}
                            </span>

                            <span className="
                                px-2.5 py-1
                                rounded-full
                                bg-neutral-200 dark:bg-neutral-800
                                text-neutral-600 dark:text-neutral-300
                                text-xs
                            ">
                                {course.duration}
                            </span>

                        </div>


                        {/* VIEW COURSE */}
                        <button
                            onClick={() => navigate(`/courses/${course.slug}`)}
                            className="
                                w-full
                                mt-6
                                py-2.5
                                rounded-lg
                                bg-neutral-900 dark:bg-blue-500
                                text-white dark:text-neutral-950
                                font-medium
                                hover:bg-neutral-800
                                dark:hover:bg-blue-600
                                transition-colors
                                flex items-center justify-center gap-2
                            "
                        >
                            View Course

                            <i className="bx bx-right-arrow-alt text-lg"></i>
                        </button>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Courses