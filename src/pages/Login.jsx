import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault()

        setError('')
        setLoading(true)

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            setError(error.message)
            setLoading(false)
            return
        }

        navigate('/courses')
    }

    return (
        <div className='min-h-screen flex items-center justify-center px-6 py-20'>
            <div className='w-full max-w-md'>
                {/* TITLE */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-neutral-900 dark:text-white'>
                        Welcome Back
                    </h1>
                    <p className='mt-3 text-neutral-600 dark:text-neutral-400'>
                        Log in to continue learning.
                    </p>
                </div>
                {/* LOGIN CARD */}
                <div className='rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-xl p-8'>
                    <form onSubmit={handleLogin} className='space-y-5'>
                        {/* EMAIL */}
                        <div>
                            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2'>
                                Email
                            </label>

                            <input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='you@example.com'
                                required
                                className='w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label className='block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2'>
                                Password
                            </label>
                            <input
                                type='password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'
                                required
                                className='w-full px-4 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-500'
                            />
                        </div>
                        {/* ERROR */}
                        {error && (
                            <div className='rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-3'>
                                <p className='text-sm text-red-500'>
                                    {error}
                                </p>
                            </div>
                        )}

                        {/* LOGIN BUTTON */}
                        <button
                            type='submit'
                            disabled={loading}
                            className='w-full py-3 rounded-lg bg-blue-500 text-neutral-950 font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>

                    </form>

                    {/* SIGN UP */}
                    <p className='mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400'>
                        Don't have an account?{' '}
                        <button
                            onClick={() => navigate('/signup')}
                            className='text-blue-500 font-medium hover:text-blue-600'
                        >
                            Create one
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login