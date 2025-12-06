
"use client";

import { Move3d } from "lucide-react";

interface MagicBallProps {
    question: string;
    isShaking: boolean;
    response: string;
    isRevealed: boolean;
    isWaitingForResponse: boolean;
    onShake?: () => void;
}

export default function MagicBall({ question, isShaking, response, isRevealed, isWaitingForResponse, onShake }: MagicBallProps) {


    const shakeBall = () => {
        if (onShake) {
            onShake();
        }
    };

    return (
        <div
            className={`relative w-64 h-64 rounded-full bg-gradient-to-br from-black to-gray-800 shadow-2xl cursor-pointer transition-all duration-300 ${isShaking ? 'animate-bounce scale-110' : 'hover:scale-105'
                }`}
            onClick={shakeBall}
        >
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-700 to-black shadow-inner">
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
                    {isShaking ? (
                        <div className="flex items-center justify-center">
                            <Move3d className="w-8 h-8 text-white animate-spin" />
                        </div>
                    ) : isWaitingForResponse ? (
                        <div className="text-white/50 text-center">
                            <p className="text-sm animate-pulse">답을 준비 중...</p>
                        </div>
                    ) : response && isRevealed ? (
                        <div className="w-32 h-24 bg-blue-900 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg animate-fade-in">
                            <p className="text-white text-sm text-center px-2 leading-tight font-medium">
                                {response}
                            </p>
                        </div>
                    ) : (
                        <div className="text-white/30 text-center">
                            <p className="text-lg font-bold mb-1">8</p>
                            <p className="text-xs">클릭하여<br />흔들기</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}