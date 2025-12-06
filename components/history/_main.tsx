"use client";

import { useState, useEffect } from "react";
import { InteractionDoc } from "@/models/interaction";
import { fetchInteractions } from "@/lib/interaction/functions";

const mapInteractionDocToDisplay = (interaction: InteractionDoc) => {
    return {
        question: interaction.question,
        response: interaction.response,
        type: interaction.type,
    };
};

export default function HistoryPage({ user }: { user: string }) {
    const [history, setHistory] = useState<Array<{ question: string; response: string; type: string }>>([]);

    useEffect(() => {
        const getInteractions = async () => {
            const res_findInteractions = await fetchInteractions(user);
            const mappedInteractions = res_findInteractions.interactions.map(mapInteractionDocToDisplay);
            setHistory(mappedInteractions);
        };

        getInteractions();
    }, [user]);

    return (
        <div className="w-full max-w-md space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">📈 사용 기록</h2>
                <p className="text-purple-200 text-sm">매직 8볼과의 대화 기록을 확인할 수 있습니다</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 max-h-96 overflow-y-auto">
                {history.length === 0 ? (
                    <div className="p-8 text-center">
                        <div className="text-6xl mb-4">🎱</div>
                        <p className="text-white/60 text-sm">아직 기록이 없습니다</p>
                        <p className="text-white/40 text-xs mt-2">매직 8볼에 질문을 해보세요!</p>
                    </div>
                ) : (
                    <div className="p-4 space-y-4">
                        {history.map((item, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                                <div className="space-y-3">
                                    <div>
                                        <div className="flex items-start space-x-2">
                                            <span className="text-blue-300 text-sm font-medium flex-shrink-0">Q:</span>
                                            <p className="text-white text-sm leading-relaxed">{item.question}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-start space-x-2">
                                            <span className="text-purple-300 text-sm font-medium flex-shrink-0">A:</span>
                                            <p className="text-purple-200 text-sm leading-relaxed font-medium">{item.response}</p>
                                        </div>
                                    </div>
                                    {item.type && (
                                        <div className="flex justify-end">
                                            <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded-full">
                                                {item.type === 'magic-ball' ? '🎱 매직볼' : item.type}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {history.length > 0 && (
                <div className="text-center">
                    <p className="text-xs text-white/50">총 {history.length}개의 질문</p>
                </div>
            )}
        </div>
    );
}