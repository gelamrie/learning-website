import React from 'react'

const Pricing = () => {

    const plans = [
        {
            name: "Free",
            price: "₱0",
            description: "Perfect for getting started.",
            features: [
                "Access to selected courses",
                "Basic learning materials",
                "Track course progress",
                "Community access"
            ],
            button: "Get Started"
        },
        {
            name: "Pro",
            price: "₱299",
            description: "For regular learners.",
            features: [
                "Access to all courses",
                "Hands-on projects",
                "Track learning progress",
                "Certificates",
                "Priority support"
            ],
            button: "Start Learning",
            popular: true
        },
        {
            name: "Premium",
            price: "₱499",
            description: "For dedicated learners.",
            features: [
                "Everything in Pro",
                "Advanced courses",
                "Exclusive resources",
                "Personalized learning features",
                "Premium support"
            ],
            button: "Choose Premium"
        }
    ]

    return (
        <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28">

            {/* EXISTING HEADER */}
            <div className="text-center mb-12">

                <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
                    Pricing
                </h1>

                <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                    Start learning today with our flexible pricing plans.
                </p>

            </div>


            {/* PRICING CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {plans.map((plan) => (
                    <div
                        key={plan.name}
                        className={`
                            relative rounded-2xl p-6 lg:p-8
                            bg-white/70 dark:bg-neutral-900/70
                            backdrop-blur-sm
                            ${plan.popular
                                ? "border-2 border-blue-500 shadow-lg shadow-blue-500/10"
                                : "border border-neutral-200 dark:border-neutral-800"
                            }
                        `}
                    >

                        {/* MOST POPULAR */}
                        {plan.popular && (
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
                                    MOST POPULAR
                                </span>
                            </div>
                        )}

                        {/* PLAN NAME */}
                        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
                            {plan.name}
                        </h2>

                        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                            {plan.description}
                        </p>

                        {/* PRICE */}
                        <div className="mt-6">
                            <span className="text-4xl font-bold text-neutral-900 dark:text-white">
                                {plan.price}
                            </span>

                            <span className="text-sm text-neutral-500 dark:text-neutral-400">
                                {" "}/ month
                            </span>
                        </div>

                        {/* FEATURES */}
                        <div className="mt-6 space-y-3">

                            {plan.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                >
                                    <i className="bx bx-check text-blue-500 text-xl"></i>

                                    <span className="text-sm text-neutral-600 dark:text-neutral-300">
                                        {feature}
                                    </span>
                                </div>
                            ))}

                        </div>

                        {/* BUTTON */}
                        <button
                            className={`
                                w-full mt-8 py-3 rounded-lg font-medium
                                transition-colors
                                ${plan.popular
                                    ? "bg-blue-500 text-neutral-950 hover:bg-blue-600"
                                    : "bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700"
                                }
                            `}
                        >
                            {plan.button}
                        </button>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default Pricing