import React, { useState } from "react";

const FaqSec = () => {
    const [copied, setCopied] = useState(false);

    const email = "angeladejuan55@gmail.com";

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
        <div className="container mx-auto px-6 py-20">

            <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
                Frequently Asked Questions
            </h1>

            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
                If you still have any questions, contact our team via{" "}

                <button
                    type="button"
                    onClick={copyEmail}
                    className="text-blue-500 hover:text-blue-600
                               hover:underline cursor-pointer"
                >
                    {email}
                </button>
            </p>

            {/* Copy notification */}
            {copied && (
                <div
                    className="fixed bottom-6 right-6
                               flex items-center gap-2
                               bg-neutral-900 dark:bg-neutral-800
                               text-white
                               px-4 py-3
                               rounded-lg
                               shadow-lg
                               animate-fade-in"
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