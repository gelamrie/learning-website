import pythonLessons from './pythonLessons.jsx'
import pythonQuiz from './pythonQuiz.jsx'

import webDevelopmentLessons from './webDevelopmentLessons.jsx'
import webDevelopmentQuiz from './webDevelopmentQuiz.jsx'

import uiUxLessons from './uiUxLessons.jsx'
import uiUxQuiz from './uiUxQuiz.jsx'

import dataAnalyticsLessons from './dataAnalyticsLessons.jsx'
import dataAnalyticsQuiz from './dataAnalyticsQuiz.jsx'

import cyberSecurityLessons from './cyberSecurityLessons.jsx'
import cyberSecurityQuiz from './cyberSecurityQuiz.jsx'

import databaseLessons from './databaseLessons.jsx'
import databaseQuiz from './databaseQuiz.jsx'

const courses = [
    {
        title: 'Python Programming',
        description:
            'Learn programming fundamentals and build practical applications with Python.',
        category: 'Programming',
        level: 'Beginner',
        duration: '6 weeks',
        icon: 'bx-terminal',
        slug: 'python',
        access: 'Free',
        lessons: pythonLessons,
        quiz: pythonQuiz
    },

    {
        title: 'Web Development',
        description:
            'Learn how to build modern and responsive websites using HTML, CSS, and JavaScript.',
        category: 'Development',
        level: 'Beginner',
        duration: '8 weeks',
        icon: 'bx-code-alt',
        slug: 'web-development',
        access: 'Free',
        lessons: webDevelopmentLessons,
        quiz: webDevelopmentQuiz
    },

    {
        title: 'UI/UX Design',
        description:
            'Learn how to create intuitive and engaging digital experiences.',
        category: 'Design',
        level: 'Beginner',
        duration: '5 weeks',
        icon: 'bx-palette',
        slug: 'ui-ux-design',
        access: 'Pro',
        lessons: uiUxLessons,
        quiz: uiUxQuiz
    },

    {
        title: 'Data Analytics',
        description:
            'Learn how to analyze data and turn information into useful insights.',
        category: 'Data',
        level: 'Intermediate',
        duration: '8 weeks',
        icon: 'bx-bar-chart-alt-2',
        slug: 'data-analytics',
        access: 'Pro',
        lessons: dataAnalyticsLessons,
        quiz: dataAnalyticsQuiz
    },

    {
        title: 'Cybersecurity Fundamentals',
        description:
            'Understand the fundamentals of protecting systems, networks, and information.',
        category: 'Security',
        level: 'Intermediate',
        duration: '7 weeks',
        icon: 'bx-shield-quarter',
        slug: 'cybersecurity',
        access: 'Pro',
        lessons: cyberSecurityLessons,
        quiz: cyberSecurityQuiz
    },

    {
        title: 'Database Management',
        description:
            'Learn how to design, manage, and work with relational databases.',
        category: 'Development',
        level: 'Intermediate',
        duration: '6 weeks',
        icon: 'bx-data',
        slug: 'database-management',
        access: 'Pro',
        lessons: databaseLessons,
        quiz: databaseQuiz
    }
]

export default courses