import { useNavigate } from 'react-router-dom'

const Pricing = () => {
    const navigate = useNavigate()

    const plans = [
        {
            name: 'Free',
            description: 'Perfect for getting started.',
            price: '₱0',
            period: '/ month',
            features: [
                'Access to selected courses',
                'Basic learning materials',
                'Track course progress',
                'Community access'
            ],
            button: 'Get Started',
            action: () => {
                localStorage.setItem('selectedPlan', 'Free')
                navigate('/courses')
            },
            popular: false
        },
        {
            name: 'Pro',
            description: 'For regular learners.',
            price: '₱299',
            period: '/ month',
            features: [
                'Access to all courses',
                'Hands-on projects',
                'Track learning progress',
                'Certificates',
                'Priority support'
            ],
            button: 'Start Learning',
            action: () => navigate('/subscription', {
                state: { plan: 'Pro' }
            }),
            popular: true
        },
        {
            name: 'Premium',
            description: 'For dedicated learners.',
            price: '₱499',
            period: '/ month',
            features: [
                'Everything in Pro',
                'Advanced courses',
                'Exclusive resources',
                'Personalized learning features',
                'Premium support'
            ],
            button: 'Choose Premium',
            action: () => navigate('/subscription', {
                state: { plan: 'Premium' }
            }),
            popular: false
        }
    ]

    return (
        <div className='container mx-auto px-6 py-20'>

            {/* HEADER */}
            <div className='text-center mb-14'>
                <h1 className='text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white'>
                    Pricing
                </h1>

                <p className='mt-4 text-lg text-neutral-600 dark:text-neutral-300'>
                    Start learning today with our flexible pricing plans.
                </p>
            </div>

            {/* PRICING CARDS */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch'>
                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`relative flex flex-col rounded-2xl border p-8 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 ${plan.popular
                            ? 'border-blue-500 shadow-lg shadow-blue-500/10'
                            : 'border-neutral-200 dark:border-neutral-800'}`}>

                        {/* MOST POPULAR */}
                        {plan.popular && (
                            <div className='absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-blue-500 text-white text-xs font-semibold'>
                                MOST POPULAR
                            </div>
                        )}

                        {/* PLAN NAME */}
                        <h2 className='text-2xl font-bold text-neutral-900 dark:text-white'>
                            {plan.name}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className='mt-3 text-neutral-600 dark:text-neutral-300'>
                            {plan.description}
                        </p>

                        {/* PRICE */}
                        <div className='mt-8 flex items-baseline'>
                            <span className='text-4xl font-bold text-neutral-900 dark:text-white'>
                                {plan.price}
                            </span>

                            <span className='ml-2 text-sm text-neutral-500 dark:text-neutral-400'>
                                {plan.period}
                            </span>
                        </div>

                        {/* FEATURES */}
                        <div className='mt-8 space-y-4 flex-1'>
                            {plan.features.map((feature) => (
                                <div
                                    key={feature}
                                    className='flex items-center gap-3'>
                                    <i className='bx bx-check text-xl text-blue-500'></i>
                                    <span className='text-sm text-neutral-700 dark:text-neutral-300'>
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <button
                            onClick={plan.action}
                            className={`w-full mt-10 py-3 rounded-lg font-semibold transition-colors
                                ${plan.popular
                                    ? 'bg-blue-500 text-neutral-950 hover:bg-blue-600'
                                    : 'bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-blue-500 dark:text-neutral-950 dark:hover:bg-blue-600'
                                }`}>
                            {plan.button}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing