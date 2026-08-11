import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const courseData = {
    python: {
        title: 'Python Programming',
        description:
            'Learn programming fundamentals and build practical applications with Python.',
        level: 'Beginner',
        duration: '6 weeks',
        lessons: 24,
        icon: 'bx-terminal',

        topics: [
            'Python fundamentals',
            'Variables and data types',
            'Conditional statements',
            'Loops',
            'Functions',
            'Lists and dictionaries',
            'Object-oriented programming',
            'Practical Python projects'
        ]
    },

    'web-development': {
        title: 'Web Development',
        description:
            'Learn how to build modern and responsive websites using HTML, CSS, and JavaScript.',
        level: 'Beginner',
        duration: '8 weeks',
        lessons: 32,
        icon: 'bx-code-alt',

        topics: [
            'HTML fundamentals',
            'CSS styling',
            'Responsive design',
            'JavaScript basics',
            'DOM manipulation',
            'Forms and validation',
            'Modern web development',
            'Final website project'
        ]
    },

    'ui-ux-design': {
        title: 'UI/UX Design',
        description:
            'Learn how to create intuitive and engaging digital experiences.',
        level: 'Beginner',
        duration: '5 weeks',
        lessons: 20,
        icon: 'bx-palette',

        topics: [
            'Design fundamentals',
            'Color theory',
            'Typography',
            'Wireframing',
            'User research',
            'Prototyping',
            'Design systems',
            'Usability testing'
        ]
    },

    'data-analytics': {
        title: 'Data Analytics',
        description:
            'Learn how to analyze data and turn information into useful insights.',
        level: 'Intermediate',
        duration: '8 weeks',
        lessons: 28,
        icon: 'bx-bar-chart-alt-2',

        topics: [
            'Introduction to data analytics',
            'Data collection',
            'Data cleaning',
            'Data visualization',
            'Statistical analysis',
            'Working with datasets',
            'Creating reports',
            'Data analytics project'
        ]
    },

    cybersecurity: {
        title: 'Cybersecurity Fundamentals',
        description:
            'Understand the fundamentals of protecting systems, networks, and information.',
        level: 'Intermediate',
        duration: '7 weeks',
        lessons: 26,
        icon: 'bx-shield-quarter',

        topics: [
            'Cybersecurity fundamentals',
            'Network security',
            'Authentication',
            'Access control',
            'Common security threats',
            'Security best practices',
            'Risk management',
            'Security awareness'
        ]
    },

    'database-management': {
        title: 'Database Management',
        description:
            'Learn how to design, manage, and work with relational databases.',
        level: 'Intermediate',
        duration: '6 weeks',
        lessons: 24,
        icon: 'bx-data',

        topics: [
            'Database fundamentals',
            'Relational databases',
            'SQL basics',
            'Creating tables',
            'Queries',
            'Relationships',
            'Database design',
            'Database project'
        ]
    }
}

const CourseDetails = () => {

    const { courseId } = useParams()
    const navigate = useNavigate()

    const course = courseData[courseId]

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

    return (
        <div className="container mx-auto px-6 py-20">

            {/* Back button */}
            <button
                onClick={() => navigate('/courses')}
                className="flex items-center gap-2 mb-8
                           text-sm text-neutral-600
                           dark:text-neutral-300
                           hover:text-blue-500
                           transition-colors"
            >
                <i className="bx bx-arrow-back"></i>
                Back to Courses
            </button>


            <div className="max-w-4xl mx-auto">

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl
                                bg-blue-500/10
                                flex items-center justify-center
                                mb-6">

                    <i
                        className={`bx ${course.icon}
                                   text-3xl text-blue-500`}
                    ></i>

                </div>


                {/* Title */}
                <h1 className="text-4xl lg:text-5xl font-bold
                               text-neutral-900 dark:text-white">
                    {course.title}
                </h1>


                {/* Description */}
                <p className="mt-4 text-lg
                              text-neutral-600
                              dark:text-neutral-300">
                    {course.description}
                </p>


                {/* Course information */}
                <div className="flex flex-wrap gap-3 mt-6">

                    <span className="px-3 py-1.5 rounded-full
                                     bg-blue-500/10
                                     text-blue-500 text-sm">
                        {course.level}
                    </span>

                    <span className="px-3 py-1.5 rounded-full
                                     bg-neutral-200
                                     dark:bg-neutral-800
                                     text-neutral-600
                                     dark:text-neutral-300
                                     text-sm">
                        <i className="bx bx-time-five mr-1"></i>
                        {course.duration}
                    </span>

                    <span className="px-3 py-1.5 rounded-full
                                     bg-neutral-200
                                     dark:bg-neutral-800
                                     text-neutral-600
                                     dark:text-neutral-300
                                     text-sm">
                        <i className="bx bx-book-open mr-1"></i>
                        {course.lessons} lessons
                    </span>

                </div>


                {/* What you'll learn */}
                <div className="mt-12">

                    <h2 className="text-2xl font-bold
                                   text-neutral-900 dark:text-white">
                        What you'll learn
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2
                                    gap-4 mt-6">

                        {course.topics.map((topic) => (

                            <div
                                key={topic}
                                className="flex items-center gap-3 p-4
                                           rounded-xl
                                           border border-neutral-200
                                           dark:border-neutral-800
                                           bg-white/70
                                           dark:bg-neutral-900/70"
                            >
                                <i className="bx bx-check-circle
                                              text-blue-500 text-xl"></i>

                                <span className="text-neutral-700
                                                 dark:text-neutral-300">
                                    {topic}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Start learning */}
                <button
                    onClick={() =>
                        navigate(`/courses/${courseId}/lesson/1`)
                    }
                    className="mt-10 px-6 py-3 rounded-lg
               bg-blue-500
               text-neutral-950
               font-medium
               hover:bg-blue-600
               transition-colors"
                >
                    Start Learning
                    <i className="bx bx-right-arrow-alt ml-2"></i>
                </button>

            </div>

        </div>
    )
}

export default CourseDetails