"use client";

interface InputCardProps {
    question: string;
    onQuestionChange: (question: string) => void;
    onSubmit: () => void;
    disabled?: boolean;
}

export default function InputCard({ question, onQuestionChange, onSubmit, disabled = false }: InputCardProps) {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !disabled) {
            onSubmit();
        }
    };

    return (
        <div>
            <input
                type="text"
                value={question}
                onChange={(e) => onQuestionChange(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="질문을 입력하세요..."
                className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                disabled={disabled}
            />
        </div>
    );
}