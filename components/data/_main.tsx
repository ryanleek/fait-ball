"use client";

import { useState, useEffect } from "react";
import { Edit2, Save, X } from "lucide-react";
import { UserInfo, dummyData } from "@/lib/interaction/prompts";

export default function DataPage() {
    const [userInfo, setUserInfo] = useState<UserInfo>(dummyData);
    const [isEditing, setIsEditing] = useState(false);
    const [tempInfo, setTempInfo] = useState<UserInfo>(dummyData);

    useEffect(() => {
        // Load saved data from localStorage
        const savedData = localStorage.getItem('userInfo');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            // Merge with dummy data to ensure all fields exist
            const mergedData = { ...dummyData, ...parsed };
            setUserInfo(mergedData);
            setTempInfo(mergedData);
        }
    }, []);

    const handleEdit = () => {
        setTempInfo({ ...userInfo });
        setIsEditing(true);
    };

    const handleSave = () => {
        setUserInfo({ ...tempInfo });
        localStorage.setItem('userInfo', JSON.stringify(tempInfo));
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempInfo({ ...userInfo });
        setIsEditing(false);
    };

    const handleChange = (field: keyof UserInfo, value: string) => {
        setTempInfo(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="w-full max-w-md space-y-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">📋 나의 정보</h2>
                <p className="text-purple-200 text-sm">개인정보를 확인하고 수정할 수 있습니다</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 space-y-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-white">개인정보</h3>
                    {!isEditing ? (
                        <button
                            onClick={handleEdit}
                            className="flex items-center space-x-2 px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                        >
                            <Edit2 className="w-4 h-4" />
                            <span className="text-sm">수정</span>
                        </button>
                    ) : (
                        <div className="flex space-x-2">
                            <button
                                onClick={handleSave}
                                className="flex items-center space-x-1 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
                            >
                                <Save className="w-4 h-4" />
                                <span className="text-sm">저장</span>
                            </button>
                            <button
                                onClick={handleCancel}
                                className="flex items-center space-x-1 px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors duration-200"
                            >
                                <X className="w-4 h-4" />
                                <span className="text-sm">취소</span>
                            </button>
                        </div>
                    )}
                </div>

                <div className="space-y-6">
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-2">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">이름</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        value={tempInfo.name}
                                        onChange={(e) => handleChange('name', e.target.value)}
                                        className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                    />
                                ) : (
                                    <div className="text-white bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                                        <span>{userInfo.name || "정보 없음"}</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80">나이</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={tempInfo.age}
                                    onChange={(e) => handleChange('age', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                />
                            ) : (
                                <div className="text-white bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                                    <span>{userInfo.age || "정보 없음"}</span>
                                </div>
                            )}
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-white/80">성별</label>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={tempInfo.gender}
                                    onChange={(e) => handleChange('gender', e.target.value)}
                                    className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                />
                            ) : (
                                <div className="text-white bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                                    <span>{userInfo.gender || "정보 없음"}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">기타 정보</label>
                        {isEditing ? (
                            <textarea
                                value={tempInfo.otherInfo}
                                onChange={(e) => handleChange('otherInfo', e.target.value)}
                                className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none max-h-64 overflow-y-auto"
                                rows={8}
                            />
                        ) : (
                            <div className="text-white bg-white/5 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10 max-h-64 overflow-y-auto">
                                <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                                    {userInfo.otherInfo || "정보 없음"}
                                </pre>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}