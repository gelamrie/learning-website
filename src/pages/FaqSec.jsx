import React, { useState } from "react";

const FaqSec = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [copied, setCopied] = useState(false);

    const email = "angeladejuan55@gmail.com";

    const faqs = [
        {
            question: "What is this platform?",
            answer:
                "Our platform is an online learning website designed to help you develop new skills through accessible courses and learning resources.",
        },
        {
            question: "How do I start a course?",
            answer:
                "Simply go to Explore Courses, choose a course that interests you, and follow the available lessons and learning materials.",
        },
        {
            question: "Do I need an account to access the courses?",
            answer:
                "Some courses may be available without an account, while an account may be required to access features such as saving your progress and managing your learning activities.",
        },
        {
            question: "Can I learn at my own pace?",
            answer:
                "Yes. You can study at your own pace and revisit learning materials whenever you need to.",
        },
        {
            question: "Are the courses suitable for beginners?",
            answer:
                "Yes. Our courses can include beginner-friendly topics and progressively introduce more advanced concepts.",
        },
        {
            question: "Can I access the website on my phone?",
            answer:
                "Yes. The website is designed to work across different screen sizes, including desktops, tablets, and mobile devices.",
        },
        {
            question: "Is there a pricing plan?",
            answer:
                "Visit the View Pricing page to see the available plans and their features.",
        },
        {
            question: "How can I contact the team?",
            answer:
                "If you have additional questions, you can contact our team through the email address below.",
        },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
        } catch (error) {
            const textArea = document.createElement("textarea");
            textArea.value = email;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        }

        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="relative min-h-screen">

            <div className="container mx-auto px-6 py-20 md:py-24 lg:py-28 max-w-4xl">

                {/* Heading */}
                <div className="text-center mb-10">

                    <p className="uppercase text-xs tracking-widest text-blue-500 font-medium mb-3">
                        Need help?
                    </p>

                    <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-white">
                        Frequently Asked Questions
                    </h1>

                    <p className="mt-4 text-base lg:text-lg text-neutral-600 dark:text-neutral-300">
                        Find answers to common questions about our platform.
                    </p>

                </div>


                {/* FAQ Accordion */}
                <div className="space-y-3">

                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-xl border border-neutral-200
                                       dark:border-neutral-800
                                       bg-white/70 dark:bg-neutral-900/70
                                       backdrop-blur-sm overflow-hidden"
                        >

                            {/* Question */}
                            <button
                                onClick={() => toggleFaq(index)}
                                className="w-full flex items-center justify-between
                                           px-5 py-4 lg:px-6 lg:py-5
                                           text-left
                                           text-neutral-900 dark:text-white
                                           hover:bg-neutral-100/70
                                           dark:hover:bg-neutral-800/70
                                           transition-colors"
                            >

                                <span className="font-medium">
                                    {faq.question}
                                </span>

                                <i
                                    className={`bx bx-chevron-down
                                        text-xl text-blue-500
                                        transition-transform duration-300
                                        ${
                                            openIndex === index
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                ></i>

                            </button>


                            {/* Answer */}
                            <div
                                className={`grid transition-all duration-300 ease-in-out
                                    ${
                                        openIndex === index
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">

                                    <p className="px-5 pb-5 lg:px-6
                                                  text-sm lg:text-base
                                                  leading-relaxed
                                                  text-neutral-600
                                                  dark:text-neutral-300">
                                        {faq.answer}
                                    </p>

                                </div>
                            </div>

                        </div>
                    ))}

                </div>


                {/* Contact */}
                <div className="text-center mt-12">

                    <p className="text-sm text-neutral-500 dark:text-neutral-400">
                        Still have questions?
                    </p>

                    <p className="mt-2 text-sm lg:text-base text-neutral-700 dark:text-neutral-300">
                        Contact our team via{" "}

                        <button
                            type="button"
                            onClick={copyEmail}
                            className="text-blue-500 hover:text-blue-600
                                       hover:underline cursor-pointer
                                       transition-colors"
                        >
                            {email}
                        </button>
                    </p>

                </div>

            </div>


            {/* Copy notification */}
            {copied && (
                <div
                    className="fixed bottom-6 right-6 z-50
                               flex items-center gap-2
                               bg-neutral-900 dark:bg-neutral-800
                               text-white
                               px-4 py-3
                               rounded-lg
                               shadow-lg"
                >
                    <i className="bx bx-check-circle text-blue-400 text-xl"></i>

                    <span className="text-sm">
                        Email copied!
                    </span>
                </div>
            )}

        </div>
    );
};

export default FaqSec;