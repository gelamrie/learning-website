import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import courses from '../data/courses'
import { supabase } from '../lib/supabase'

const Quiz = () => {
    const navigate = useNavigate()
    const { slug } = useParams()

    const course = courses.find(
        (course) => course.slug === slug
    )

    const quiz = course?.quiz || []

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [answers, setAnswers] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [submitting, setSubmitting] = useState(false)

    // COURSE NOT FOUND
    if (!course) {
        return (
            <div className='min-h-[80vh] flex items-center justify-center px-6'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-neutral-900 dark:text-white'>
                        Course Not Found
                    </h1>

                    <button
                        onClick={() => navigate('/courses')}
                        className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'>
                        Back to Courses
                    </button>
                </div>
            </div>
        )
    }

    // QUIZ NOT AVAILABLE
    if (!quiz.length) {
        return (
            <div className='min-h-[80vh] flex items-center justify-center px-6'>
                <div className='text-center'>
                    <div className='mx-auto w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center'>
                        <i className='bx bx-question-mark text-3xl text-blue-500'></i>
                    </div>

                    <h1 className='mt-5 text-2xl font-bold text-neutral-900 dark:text-white'>
                        Quiz Not Available
                    </h1>

                    <p className='mt-2 text-neutral-600 dark:text-neutral-400'>
                        This course does not have a quiz yet.
                    </p>

                    <button
                        onClick={() =>
                            navigate(`/courses/${slug}`)
                        }
                        className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'>
                        Back to Course
                    </button>
                </div>
            </div>
        )
    }

    const question = quiz[currentQuestion]
    const handleAnswer = (answer) => {
        setSelectedAnswer(answer)

        setAnswers((previous) => ({
            ...previous,
            [question.id]: answer
        }))
    }

    const handleNext = () => {
        if (currentQuestion < quiz.length - 1) {
            setCurrentQuestion((previous) => previous + 1)

            const nextQuestion = quiz[currentQuestion + 1]

            setSelectedAnswer(
                answers[nextQuestion.id] || null
            )
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion((previous) => previous - 1)

            const previousQuestion = quiz[currentQuestion - 1]

            setSelectedAnswer(
                answers[previousQuestion.id] || null
            )
        }
    }

    const handleSubmit = async () => {
        if (submitting) return

        setSubmitting(true)

        console.log('Submitting quiz...')
        console.log('Score:', score)
        console.log('Percentage:', percentage)
        console.log('Passed:', passed)
        console.log('Slug:', slug)

        const {
            data: { user },
            error: userError
        } = await supabase.auth.getUser()

        console.log('Current user:', user)
        console.log('User error:', userError)

        if (userError || !user) {
            console.error('No authenticated user:', userError)
            setSubmitting(false)
            return
        }

        const { data, error } = await supabase
            .from('user_progress')
            .upsert(
                {
                    user_id: user.id,
                    course_slug: slug,
                    quiz_score: score,
                    quiz_percentage: percentage,
                    quiz_passed: passed,
                    updated_at: new Date().toISOString()
                },
                {
                    onConflict: 'user_id,course_slug'
                }
            )
            .select('*')

        console.log('Supabase result:', data)
        console.log('Supabase error:', error)

        if (error) {
            console.error('Error saving quiz result:', error)
            setSubmitting(false)
            return
        }

        setSubmitted(true)
        setSubmitting(false)
    }

    // CALCULATE SCORE
    const score = quiz.reduce((total, question) => {
        return (
            total +
            (answers[question.id] === question.answer ? 1 : 0)
        )
    }, 0)

    const percentage = Math.round(
        (score / quiz.length) * 100
    )

    const passed = percentage >= 70

    // RESULT SCREEN
    if (submitted) {
        return (
            <div className='min-h-[80vh] flex items-center justify-center px-6 py-20'>
                <div className='max-w-xl w-full text-center rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-8 lg:p-12 shadow-lg'>
                    <div
                        className={`mx-auto w-20 h-20 rounded-full flex items-center justify-center ${passed
                            ? 'bg-green-500/10'
                            : 'bg-red-500/10'
                            }`}>
                        <i
                            className={`bx ${passed
                                ? 'bx-check-circle text-green-500'
                                : 'bx-x-circle text-red-500'
                                } text-5xl`}></i>
                    </div>
                    <p className='mt-6 uppercase text-xs tracking-widest text-blue-500 font-semibold'>
                        Quiz Result
                    </p>
                    <h1 className='mt-3 text-4xl font-bold text-neutral-900 dark:text-white'>
                        {passed
                            ? 'Quiz Passed!'
                            : 'Keep Practicing!'}
                    </h1>

                    <p className='mt-4 text-neutral-600 dark:text-neutral-300'>
                        You scored
                    </p>

                    <p className='mt-2 text-5xl font-bold text-blue-500'>
                        {percentage}%
                    </p>

                    <p className='mt-3 text-sm text-neutral-500 dark:text-neutral-400'>
                        {score} out of {quiz.length} questions correct
                    </p>

                    <div className='mt-8 text-left space-y-4'>
                        {quiz.map((item, index) => {
                            const userAnswer = answers[item.id]
                            const isCorrect = userAnswer === item.answer

                            return (
                                <div
                                    key={item.id}
                                    className={`p-4 rounded-xl border ${isCorrect
                                            ? 'border-green-500/30 bg-green-500/5'
                                            : 'border-red-500/30 bg-red-500/5'
                                        }`}
                                >
                                    <div className='flex items-start gap-3'>
                                        <i
                                            className={`bx ${isCorrect
                                                    ? 'bx-check-circle text-green-500'
                                                    : 'bx-x-circle text-red-500'
                                                } text-xl mt-0.5`}
                                        ></i>

                                        <div className='flex-1'>
                                            <p className='font-medium text-neutral-900 dark:text-white'>
                                                Question {index + 1}
                                            </p>

                                            <p className='mt-1 text-sm text-neutral-600 dark:text-neutral-300'>
                                                {item.question}
                                            </p>

                                            <p className='mt-3 text-sm'>
                                                <span className='font-medium text-neutral-900 dark:text-white'>
                                                    Your answer:
                                                </span>{' '}
                                                <span className='text-neutral-600 dark:text-neutral-400'>
                                                    {userAnswer}
                                                </span>
                                            </p>

                                            {!isCorrect && (
                                                <p className='mt-1 text-sm'>
                                                    <span className='font-medium text-green-600 dark:text-green-400'>
                                                        Correct answer:
                                                    </span>{' '}
                                                    <span className='text-neutral-600 dark:text-neutral-400'>
                                                        {item.answer}
                                                    </span>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {passed ? (
                        <p className='mt-5 text-neutral-600 dark:text-neutral-300'>
                            Great job! You passed the quiz.
                        </p>
                    ) : (
                        <p className='mt-5 text-neutral-600 dark:text-neutral-300'>
                            You need at least 70% to pass. Review the lessons and try again.
                        </p>
                    )}

                    <div className='flex flex-col sm:flex-row justify-center gap-3 mt-8'>

                        {passed ? (
                            <button
                                onClick={() =>
                                    navigate(`/courses/${slug}/complete`)
                                }
                                className='px-5 py-2.5 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors'>
                                Complete Course
                                <i className='bx bx-check ml-1'></i>
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                        setCurrentQuestion(0)
                                        setSelectedAnswer(null)
                                        setAnswers({})
                                        setSubmitted(false)
                                    }}
                                    className='px-5 py-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors'>
                                    Retry Quiz
                                </button>

                                <button
                                    onClick={() =>
                                        navigate(`/courses/${slug}`)
                                    }
                                    className='px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium hover:bg-blue-600 transition-colors'>
                                    Back to Course
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='container mx-auto px-6 py-24 max-w-3xl'>

            {/* HEADER */}
            <div className='mb-8'>
                <p className='uppercase text-xs tracking-widest text-blue-500 font-semibold'>
                    {course.title}
                </p>

                <h1 className='mt-2 text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white'>
                    Course Quiz
                </h1>

                <p className='mt-2 text-neutral-600 dark:text-neutral-400'>
                    Test what you've learned from this course.
                </p>
            </div>

            {/* PROGRESS */}
            <div className='mb-6'>
                <div className='flex items-center justify-between text-sm'>
                    <span className='text-neutral-500 dark:text-neutral-400'>
                        Question {currentQuestion + 1} of {quiz.length}
                    </span>
                    <span className='font-medium text-blue-500'>
                        {Math.round(
                            ((currentQuestion + 1) / quiz.length) * 100
                        )}%
                    </span>
                </div>

                <div className='mt-2 h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden'>
                    <div
                        className='h-full rounded-full bg-blue-500 transition-all duration-300'
                        style={{
                            width: `${((currentQuestion + 1) / quiz.length) * 100}%`
                        }}
                    ></div>
                </div>
            </div>

            {/* QUESTION CARD */}
            <div className='rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-6 sm:p-8'>
                <h2 className='text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-white'>
                    {question.question}
                </h2>

                {/* OPTIONS */}
                <div className='mt-6 space-y-3'>
                    {question.options.map((option) => {
                        const selected =
                            selectedAnswer === option

                        return (
                            <button
                                key={option}
                                onClick={() =>
                                    handleAnswer(option)
                                }
                                className={`w-full text-left px-4 py-4 rounded-xl border transition-colors ${selected
                                    ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                                    : 'border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-blue-400 hover:bg-blue-500/5'
                                    }`}>
                                <div className='flex items-center gap-3'>
                                    <div
                                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${selected
                                            ? 'border-blue-500'
                                            : 'border-neutral-300 dark:border-neutral-700'
                                            }`}>
                                        {selected && (
                                            <div className='w-2.5 h-2.5 rounded-full bg-blue-500'></div>
                                        )}
                                    </div>

                                    <span>
                                        {option}
                                    </span>
                                </div>
                            </button>
                        )
                    })}

                </div>

                {/* CONTROLS */}
                <div className='mt-8 flex items-center justify-between gap-3'>
                    <button
                        onClick={handlePrevious}
                        disabled={currentQuestion === 0}
                        className='px-4 py-2.5 rounded-lg bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors'>
                        <i className='bx bx-left-arrow-alt mr-1'></i>
                        Previous
                    </button>

                    {currentQuestion === quiz.length - 1 ? (
                        <button
                            onClick={handleSubmit}
                            disabled={!selectedAnswer || submitting}
                            className='px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors'>
                            {submitting ? 'Submitting...' : 'Submit Quiz'}

                            {!submitting && (
                                <i className='bx bx-check ml-1'></i>
                            )}
                        </button>

                    ) : (
                        <button
                            onClick={handleNext}
                            disabled={!selectedAnswer}
                            className='px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors'>
                            Next
                            <i className='bx bx-right-arrow-alt ml-1'></i>
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Quiz