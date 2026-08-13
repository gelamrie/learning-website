import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const UserMenu = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const getUser = async () => {
            const { data } = await supabase.auth.getUser()
            setUser(data.user)
        }

        getUser()

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    const handleLogout = async () => {
        await supabase.auth.signOut()
        navigate('/login')
    }

    // Don't show anything when nobody is logged in
    if (!user) return null

    return (
        <div className='fixed top-3 right-16 lg:top-4 lg:right-16 z-50 flex items-center gap-2'>

            {/* USER */}
            <div className='hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg'>
                <div className='w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center'>
                    <i className='bx bx-user'></i>
                </div>

                <span className='text-sm text-neutral-700 dark:text-neutral-300 max-w-[180px] truncate'>
                    {user.email}
                </span>
            </div>

            {/* LOGOUT */}
            <button
                onClick={handleLogout}
                className='w-10 h-10 flex items-center justify-center rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg hover:scale-105 transition-transform'
                title='Log out'
            >
                <i className='bx bx-log-out text-lg'></i>
            </button>

        </div>
    )
}

export default UserMenu