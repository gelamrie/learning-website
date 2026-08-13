import React, { useEffect, useState } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'

const ProtectedRoute = ({ children }) => {
    const location = useLocation()

    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getSession = async () => {
            const { data } = await supabase.auth.getSession()

            setSession(data.session)
            setLoading(false)
        }

        getSession()

        const {
            data: { subscription }
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setLoading(false)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <p className='text-neutral-600 dark:text-neutral-400'>
                    Loading...
                </p>
            </div>
        )
    }

    if (!session) {
        return (
            <Navigate
                to='/login'
                state={{ from: location }}
                replace
            />
        )
    }

    return children
}

export default ProtectedRoute