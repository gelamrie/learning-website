import { useEffect, useState } from 'react'
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
        return null
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