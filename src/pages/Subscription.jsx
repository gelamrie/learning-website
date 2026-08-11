import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Subscription = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const plan = location.state?.plan

    const planDetails = {
        Pro: {
            price: '₱299',
            description: 'For regular learners.',
            features: [
                'Access to all courses',
                'Hands-on projects',
                'Track learning progress',
                'Certificates',
                'Priority support'
            ]
        },
        Premium: {
            price: '₱499',
            description: 'For dedicated learners.',
            features: [
                'Everything in Pro',
                'Advanced courses',
                'Exclusive resources',
                'Personalized learning features',
                'Premium support'
            ]
        }
    }

    if (!plan || !planDetails[plan]) {
        return (
            <div className='container mx-auto px-6 py-20 text-center'>
                <h1 className='text-3xl font-bold text-neutral-900 dark:text-white'>
                    No Plan Selected
                </h1>

                <p className='mt-3 text-neutral-600 dark:text-neutral-300'>
                    Please choose a subscription plan first.
                </p>

                <button
                    onClick={() => navigate('/pricing')}
                    className='mt-6 px-5 py-2.5 rounded-lg bg-blue-500 text-neutral-950 font-semibold hover:bg-blue-600 transition-colors'>
                    View Pricing
                </button>
            </div>
        )
    }

    const selectedPlan = planDetails[plan]

    return (
        <div className='container mx-auto px-6 py-20'>

            <div className='max-w-2xl mx-auto'>

                {/* HEADER */}
                <div className='text-center'>

                    <h1 className='text-4xl font-bold text-neutral-900 dark:text-white'>
                        Choose {plan}
                    </h1>

                    <p className='mt-4 text-neutral-600 dark:text-neutral-300'>
                        {selectedPlan.description}
                    </p>

                </div>


                {/* SUBSCRIPTION CARD */}
                <div className='mt-10 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm p-8'>

                    {/* PRICE */}
                    <div className='text-center'>
                        <span className='text-5xl font-bold text-neutral-900 dark:text-white'>
                            {selectedPlan.price}
                        </span>

                        <span className='ml-2 text-neutral-500 dark:text-neutral-400'>
                            / month
                        </span>

                    </div>

                    {/* FEATURES */}
                    <div className='mt-8 space-y-4'>
                        {selectedPlan.features.map((feature) => (
                            <div
                                key={feature}
                                className='flex items-center gap-3'>
                                <i className='bx bx-check-circle text-xl text-blue-500'></i>
                                <span className='text-neutral-700 dark:text-neutral-300'>
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* PAYMENT PLACEHOLDER */}
                    <div className='mt-8 rounded-xl border border-dashed border-neutral-300 dark:border-neutral-700 p-6 text-center'>
                        <i className='bx bx-credit-card text-4xl text-blue-500'></i>
                        <h2 className='mt-3 font-semibold text-neutral-900 dark:text-white'>
                            Payment
                        </h2>
                        <p className='mt-2 text-sm text-neutral-500 dark:text-neutral-400'>
                            Payment integration will be added here.
                        </p>

                    </div>

                    {/* CONTINUE BUTTON */}
                    <button
                        onClick={() => {
                            localStorage.setItem('selectedPlan', plan)
                            navigate('/courses')
                        }}
                        className='w-full mt-8 py-3 rounded-lg bg-blue-500 text-neutral-950 font-semibold hover:bg-blue-600 transition-colors'>
                        Confirm {plan} Plan
                    </button>

                    {/* CANCEL */}
                    <button
                        onClick={() => navigate('/pricing')}
                        className='w-full mt-3 py-3 rounded-lg text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors'>
                        Back to Pricing
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Subscription