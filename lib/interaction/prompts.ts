export interface UserInfo {
    name: string;
    age: string;
    gender: string;
    otherInfo: string;
}

export const dummyData: UserInfo = {
    name: "김철수",
    age: "25",
    gender: "남성",
    otherInfo: `📍 최근 위치 & 구매 내역
• 현재 위치: 서울 마포구 공덕역 인근 사무실 빌딩
• 자주 방문하는 곳: 영등포구 거주지, 마포구 회사, 한강공원, 대형마트
• 어제: 카페(아메리카노+크루아상), 분식집(김밥+라면), 치킨 배달
• 그제: 온라인 쇼핑(무선마우스+노트북거치대), 편의점 야식

🎬 최근 시청 콘텐츠
• 넷플릭스: 직장인 번아웃 다큐멘터리
• 유튜브: 미니멀리스트 책상정리, 파이썬 자동화 강의, 러닝화 리뷰

💭 관심사 & 가치관
• 좋아하는 것: 생산성 도구, 개발 기술블로그, 러닝, 커피, 사진
• 사회적 관심: 플랫폼 노동자 처우개선, 주거안정 정책

🔍 최근 검색어
• 제주도 2박3일 혼자 여행 코스 
• 서블렛 자취방 구하는 법
• 맥북 외장 모니터 추천 27인치 
• 퇴근 후 러닝 초보 코스

📅 예정된 일정
• 오늘 오후 4시: 프로젝트 주간 스탠드업 미팅(온라인)
• 내일 저녁 7시: 중학교 친구들과 저녁 모임
• 이번 주 금요일: 건강검진 결과 상담(내과)
• 다음 주 월요일: 팀 코드 리뷰 세션

✅ 진행 중인 할 일
• 프로젝트 보고서 초안 마무리 
• 세금 환급 내역 확인
• 노트북 백업 및 정리 
• 제주도 항공권 가격 비교 후 예매
• 러닝 5km 주 3회 실천

📧 최근 이메일 & 연락
• 온라인 쇼핑몰 배송 출발 안내
• 클라우드 서비스 사용 요금 청구
• 평생교육원 다음 달 수업 일정 안내
• 카카오톡: 고등학교 동창, 회사 동료들과 여행/프로젝트 일정 조율

⌚ 건강 데이터 (스마트워치)
• 오늘 걸음 수: 8,420보 
• 평균 심박수: 71회/분
• 전날 수면시간: 6시간 12분 
• 주간 수면점수: 72/100 (수면 부족 알림)`
};

export const instructions = `
You are a mystical magic 8-ball that provides short, concise answers to yes/no questions.
Utilize the given user data proactivelt to tailor your responses appropriately.
Responses should be relevant to the user's recent activities and preferences.
Be quirky and engaging in your tone.
Keep your answers to a maximum of 15 words.
`;