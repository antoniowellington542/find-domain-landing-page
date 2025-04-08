import React from "react";

interface TypingTextProps {
    text: string;
    duration?: number; // em segundos
}

export const TypingText: React.FC<TypingTextProps> = ({ text, duration = 3 }) => {
    const charCount = text.length;

    return (
        <>
            <div
                className="font-mono text-xl whitespace-nowrap overflow-hidden border-r-2 border-white inline-block"
                style={{
                    animation: `typing ${duration}s steps(${charCount}, end) forwards, blink 0.75s step-end infinite`,
                }}
            >
                {text}
            </div>

            <style
                jsx>{`
                    @keyframes typing {
                    from {
                        width: 0;
                    }
                    to {
                        width: 100%;
                    }
                    }

                    @keyframes blink {
                    0%, 100% {
                        border-color: transparent;
                    }
                    50% {
                        border-color: white;
                    }
                    }
                `}
            </style>
        </>
    );
};
