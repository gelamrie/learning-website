import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

            {/* Base background */}
            <div className="absolute inset-0 bg-white dark:bg-neutral-950" />

            {/* Blue glow */}
            <div
                className='
                    absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl opacity-20'
                
            />

            {/* Grid */}
            <div
                className="absolute inset-0 opacity-30 dark:hidden"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            to right,
                            rgba(0, 0, 0, 0.05) 1px,
                            transparent 1px
                        ),
                        linear-gradient(
                            to bottom,
                            rgba(0, 0, 0, 0.05) 1px,
                            transparent 1px
                        )
                    `,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Dots */}
            <div
                className="absolute inset-0 dark:hidden"
                style={{
                    backgroundImage:
                        'radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
            />

        </div>
    );
};

export default Background;