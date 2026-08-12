import React, { useState } from 'react'

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([
        {
            role: 'ai',
            content: "Hi! I'm your AI learning assistant. Ask me anything about your course."
        }
    ])

    const handleSend = async () => {
        if (!message.trim()) return

        const userMessage = message.trim()

        // Show user's message immediately
        setMessages((prev) => [
            ...prev,
            {
                role: 'user',
                content: userMessage
            }
        ])

        setMessage('')

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: userMessage
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong')
            }

            // Show AI response
            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    content: data.reply
                }
            ])

        } catch (error) {

            console.error('AI Error:', error)

            setMessages((prev) => [
                ...prev,
                {
                    role: 'ai',
                    content: 'Sorry, I could not connect to the AI right now.'
                }
            ])
        }
    }

    return (
        <>
            {/* CHAT BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='fixed bottom-6 right-6 z-50 w-12.5 h-12.5 rounded-full bg-blue-500 text-neutral-950 shadow-lg hover:bg-blue-600 transition-all duration-300 ease-out hover:scale-105 active:scale-95 flex items-center justify-center'
            >
                <i className={`bx ${isOpen ? 'bx-x' : 'bx-bot'} text-2xl`}></i>
            </button>

            {/* CHAT WINDOW */}
            <div
                className={` fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-2rem)] rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl overflow-hidden origin-bottom-right transition-all duration-300 ease-out ${isOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 translate-y-3 pointer-events-none'
                    }`}
            >

                {/* HEADER */}
                <div className='flex items-center justify-between px-5 py-4 bg-blue-500'>
                    <div className='flex items-center gap-3'>
                        <div className='w-9 h-9 rounded-full bg-white/20 flex items-center justify-center'>
                            <i className='bx bx-bot text-xl text-white'></i>
                        </div>

                        <div>
                            <h2 className='font-semibold text-white'>
                                LearnAI
                            </h2>

                            <p className='text-xs text-white/80'>
                                Your learning assistant
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className='text-white hover:bg-white/10 rounded-lg p-1'
                    >
                        <i className='bx bx-x text-xl'></i>
                    </button>
                </div>

                {/* MESSAGES */}
                <div className='h-80 overflow-y-auto p-4 space-y-3'>

                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex gap-2 ${msg.role === 'user'
                                ? 'justify-end'
                                : 'justify-start'
                                }`}
                        >

                            {msg.role === 'ai' && (
                                <div className='w-8 h-8 shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center'>
                                    <i className='bx bx-bot text-blue-500'></i>
                                </div>
                            )}

                            <div
                                className={`max-w-[80%] rounded-xl px-4 py-3 ${msg.role === 'user'
                                    ? 'bg-blue-500 text-neutral-950'
                                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                                    }`}
                            >
                                <p className='text-sm'>
                                    {msg.content}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>

                {/* INPUT */}
                <div className='border-t border-neutral-200 dark:border-neutral-800 p-3'>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleSend()
                        }}
                        className='flex items-center gap-2'
                    >
                        <input
                            type='text'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='Ask something...'
                            className='flex-1 px-4 py-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-500 outline-none focus:ring-2 focus:ring-blue-500'
                        />

                        <button
                            type='submit'
                            className='w-10 h-10 shrink-0 rounded-lg bg-blue-500 text-neutral-950 flex items-center justify-center hover:bg-blue-600 transition-colors'
                        >
                            <i className='bx bx-send'></i>
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default AIChatbot