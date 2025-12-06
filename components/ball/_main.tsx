"use client";

import { useState } from "react";
import Header from "@/components/ball/header";
import InputCard from "@/components/ball/input-card";
import MagicBall from "@/components/ball/magic-ball";
import QuestionDisplay from "@/components/ball/question-display";

import {
    createInteraction,
    generateKey,
    getOpenAIChatResponse,
} from "@/lib/interaction/functions";
import {
    instructions,
    dummyData,
    UserInfo
} from "@/lib/interaction/prompts";

export default function BallPage({ user }: { user: string }) {
    const [question, setQuestion] = useState("");
    const [isShaking, setIsShaking] = useState(false);
    const [response, setResponse] = useState("");
    const [isRevealed, setIsRevealed] = useState(false);
    const [askedQuestion, setAskedQuestion] = useState("");
    const [isWaitingForResponse, setIsWaitingForResponse] = useState(false);

    // localStorage에서 사용자 정보 가져오기
    const getUserInfo = (): UserInfo => {
        if (typeof window === 'undefined') return dummyData;

        const savedData = localStorage.getItem('userInfo');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            // dummyData와 병합하여 모든 필드가 존재하도록 보장
            return { ...dummyData, ...parsed };
        }
        return dummyData;
    };

    const handleShake = () => {
        if (!question.trim()) {
            alert("질문을 입력해주세요!");
            return;
        }
        // 질문을 저장하고 입력 필드를 비우기
        const currentQuestion = question.trim();
        setAskedQuestion(currentQuestion);
        setIsShaking(true);
        setIsRevealed(false);
        setQuestion(""); // 입력 필드 비우기

        // AI 응답 생성 로직 실행
        setTimeout(async () => {
            try {
                const userInfo = JSON.stringify(getUserInfo(), null, 2);
                const input = [
                    { role: "system", content: `User Information: ${userInfo}` },
                    { role: "user", content: currentQuestion }
                ];

                const aiResponse = await getOpenAIChatResponse(instructions, input);
                const selectedResponse = aiResponse.text || "답을 찾을 수 없습니다. 다시 시도해주세요.";

                setResponse(selectedResponse);
                createInteraction(currentQuestion, selectedResponse, "ai", generateKey(), user);
                setIsShaking(false);
                setIsWaitingForResponse(true);

                setTimeout(() => {
                    setIsWaitingForResponse(false);
                    setIsRevealed(true);
                }, 500);
            } catch (error) {
                console.error("Error getting AI response:", error);
                // 에러 발생시 기본 응답 제공
                setResponse("응답을 생성하는 중에 오류가 발생했습니다. 다시 시도해주세요.");
                setIsShaking(false);
                setIsWaitingForResponse(true);

                setTimeout(() => {
                    setIsWaitingForResponse(false);
                    setIsRevealed(true);
                }, 500);
            }
        }, 2000);
    };

    return (
        <div className="max-w-md w-full space-y-8">
            <Header />

            <div className="space-y-6">
                <QuestionDisplay
                    question={askedQuestion}
                    isVisible={isRevealed}
                />

                <div className="flex flex-col items-center space-y-6">
                    <MagicBall
                        question={askedQuestion}
                        isShaking={isShaking}
                        response={response}
                        isRevealed={isRevealed}
                        isWaitingForResponse={isWaitingForResponse}
                        onShake={handleShake}
                    />
                </div>

                <InputCard
                    question={question}
                    onQuestionChange={setQuestion}
                    onSubmit={handleShake}
                    disabled={isShaking}
                />
            </div>
        </div>
    );
}
