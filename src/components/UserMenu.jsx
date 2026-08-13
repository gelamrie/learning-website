import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const UserMenu = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const [showLogoutModal, setShowLogoutModal] = useState(false)

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
            setShowLogoutModal(false)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    const handleLogout = async () => {
        setShowLogoutModal(false)

        await supabase.auth.signOut()
        navigate("/")
    }

    if (!user) return null

    return (
        <>
            <div className='fixed top-3 right-13.5 sm:top-4 sm:right-15 md:right-20 lg:right-20 z-50 flex items-center gap-2'>
                {/* USER */}
                <div className='hidden lg:flex items-center gap-2 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg'>
                    <div className='w-7 h-7 shrink-0 rounded-full bg-blue-500 text-white flex items-center justify-center'>
                        <i className='bx bx-user'></i>
                    </div>

                    <span className='text-sm text-neutral-700 dark:text-neutral-300 max-w-[100px] md:max-w-[180px] truncate'>
                        {user.email}
                    </span>
                </div>

                {/* LOGOUT */}
                <button
                    onClick={() => setShowLogoutModal(true)}
                    className='w-9.5 h-9.5 flex items-center justify-center rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 shadow-lg hover:scale-105 transition-transform z-50'
                    title='Log out'
                >
                    <i className='bx bx-log-out text-lg'></i>
                </button>

            </div>
            {/* LOGOUT MODAL */}
            {showLogoutModal && (
                <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm'>
                    <div className='w-[90%] max-w-sm rounded-2xl bg-white dark:bg-neutral-900 shadow-2xl border border-neutral-200 dark:border-neutral-800 p-6'>
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center'>
                                <i className='bx bx-log-out text-xl text-blue-500'></i>
                            </div>
                            <h2 className='text-lg font-semibold text-neutral-900 dark:text-white'>
                                Log out?
                            </h2>
                        </div>

                        <p className='text-sm text-neutral-600 dark:text-neutral-400 mb-6'>
                            Are you sure you want to log out of your account?
                        </p>

                        <div className='flex justify-end gap-3'>
                            <button
                                onClick={() => setShowLogoutModal(false)}
                                className='px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition'>
                                Cancel
                            </button>

                            <button
                                onClick={handleLogout}
                                className='px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition'>
                                Log Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserMenu