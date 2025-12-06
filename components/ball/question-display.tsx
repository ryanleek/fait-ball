"use client";

interface QuestionDisplayProps {
    question: string;
    isVisible: boolean;
}

export default function QuestionDisplay({ question, isVisible }: QuestionDisplayProps) {
    if (!question || !isVisible) return null;

    return (
        <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-fade-in">
            <h3 className="text-lg font-semibold text-white mb-2">당신의 질문:</h3>
            <p className="text-xl text-purple-200 font-medium">"{question}"</p>
        </div>
    );
}