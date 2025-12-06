"use client";

interface HeaderProps {
    title?: string;
    subtitle?: string;
}

export default function Header({
    title = "🎱 매직 8볼",
    subtitle = "질문을 하고 신비로운 답을 받아보세요"
}: HeaderProps) {
    return (
        <div className="text-center">
            < h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
            < p className="text-purple-200">{subtitle}</p>
        </div >
    );
}