"use client";

import { Shield, Eye, EyeOff } from "lucide-react";

interface PrivacyToggleProps {
    mode: 'off' | 'hide' | 'substitute';
    onChange: (mode: 'off' | 'hide' | 'substitute') => void;
}

export default function PrivacyToggle({ mode, onChange }: PrivacyToggleProps) {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-md p-2 border border-white/20">
            <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-purple-200" />
                <div className="flex gap-1">
                    <button
                        onClick={() => onChange('off')}
                        className={`w-6 h-6 rounded text-xs transition-all duration-200 ${mode === 'off'
                                ? 'bg-red-500 text-white'
                                : 'bg-white/20 text-white/70 hover:bg-white/30'
                            }`}
                        title="끄기 - 원본 정보 사용"
                    >
                        OFF
                    </button>

                    <button
                        onClick={() => onChange('hide')}
                        className={`w-6 h-6 rounded text-xs transition-all duration-200 ${mode === 'hide'
                                ? 'bg-yellow-500 text-white'
                                : 'bg-white/20 text-white/70 hover:bg-white/30'
                            }`}
                        title="숨기기 - 민감한 정보 숨김"
                    >
                        H
                    </button>

                    <button
                        onClick={() => onChange('substitute')}
                        className={`w-6 h-6 rounded text-xs transition-all duration-200 ${mode === 'substitute'
                                ? 'bg-green-500 text-white'
                                : 'bg-white/20 text-white/70 hover:bg-white/30'
                            }`}
                        title="대체 - 민감한 정보 대체"
                    >
                        S
                    </button>
                </div>
            </div>
        </div>
    );
}