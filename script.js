const allRoundsData = [
    {
        id: 1,
        realName: "Airbnb (에어비앤비)",
        hiddenTitle: "남의 집 거실 렌탈 서비스",
        pitch: "\"호텔은 너무 비싸요. 낯선 사람 집의 남는 방이나 거실에 에어 매트리스를 깔고 자면 어떨까요? 현지 문화도 느끼고 가격도 저렴합니다.\"\n\n투자자 반응: \"누가 미쳤다고 남의 집에서 자냐! 범죄의 온상이 될 거다.\"라며 7명의 투자자가 거절했습니다.",
        reaction: "매우 부정적",
        industry: "여행/숙박",
        outcome: "success",
        multiplier: 50, // 50배
        profitText: "대박 성공! 🚀",
        insightTitle: "어떻게 성공했나? (Insight)",
        story: "1. '사진'이 핵심이었습니다. 창업자들이 직접 카메라를 들고 호스트 집을 방문해 고퀄리티 사진을 찍어주자 예약률이 2배로 뛰었습니다.\n2. '디자인 컨퍼런스'가 열려 주변 호텔이 매진된 시점을 노려 틈새시장을 공략했습니다.\n3. 초기엔 시리얼 박스를 팔아 운영비를 댈 정도로 처절하게 버텼습니다. \n\n결국 '신뢰'를 디자인하는 시스템을 구축하며 기업가치 100조 원의 여행 공룡이 되었습니다."
    },
    {
        id: 2,
        realName: "Juicero (쥬세로)",
        hiddenTitle: "45만 원짜리 스마트 착즙기",
        pitch: "\"건강을 위해 매일 아침 신선한 주스를 드세요. 이 45만 원짜리 와이파이 연결 착즙기와, 전용 주스 팩(구독형)만 있으면 됩니다. 실리콘밸리 유명 투자사들에게 1,300억 원 투자를 받았습니다.\"",
        reaction: "매우 긍정적",
        industry: "푸드테크",
        outcome: "failure",
        multiplier: 0, // 전액 손실
        profitText: "상장 폐지... 😱",
        insightTitle: "왜 실패했나? (Lesson)",
        story: "1. '오버 엔지니어링'의 대표 사례입니다. 기계 내부엔 400개의 정밀 부품이 들어갔지만, 정작 고객들은 손으로 팩을 짜도 주스가 똑같이 나온다는 걸 발견했습니다.\n2. 블룸버그 통신의 폭로 기사 하나로 신뢰가 바닥으로 떨어졌습니다.\n3. 45만 원이라는 터무니없는 가격은 고객의 '진짜 문제(간편하게 주스 마시기)'보다 '멋져 보이는 기술'에 집중한 결과였습니다."
    },
    {
        id: 3,
        realName: "Slack (슬랙)",
        hiddenTitle: "망한 게임 회사의 사내 채팅툴",
        pitch: "\"우리는 온라인 게임을 만들다가 망했습니다. 게임은 별로였지만, 우리가 일할 때 쓰려고 만든 '채팅 프로그램'이 꽤 쓸만합니다. 이걸 팔아보면 어떨까요?\"",
        reaction: "중립적",
        industry: "SaaS/소프트웨어",
        outcome: "success",
        multiplier: 200, // 200배
        profitText: "초대박 성공! 💎",
        insightTitle: "피벗(Pivot)의 정석",
        story: "1. 게임 'Glitch'는 실패했지만, 창업자 스튜어트 버터필드는 내부에서 쓰던 커뮤니케이션 툴의 가치를 발견했습니다.\n2. 이메일의 고통을 줄여준다는 명확한 가치 제안으로 실리콘밸리 스타트업들의 필수템이 되었습니다.\n3. '장난기 넘치는 봇', '이모지 반응' 등 딱딱한 업무 툴에 '재미'를 더해 팬덤을 만들었습니다."
    },
    {
        id: 4,
        realName: "Twitch (트위치)",
        hiddenTitle: "남의 일상 24시간 생중계",
        pitch: "\"한 남자의 일상을 머리에 달린 카메라로 24시간 생중계하는 서비스(Justin.tv)입니다. 밥 먹는 거, 자는 거 보여줍니다. 나중엔 게임하는 것도 보여줄까 합니다.\"",
        reaction: "부정적 (괴짜 취급)",
        industry: "미디어/스트리밍",
        outcome: "success",
        multiplier: 30, // 30배
        profitText: "성공! 🎉",
        insightTitle: "유저가 정답을 알고 있다",
        story: "1. 초기엔 창업자의 일상만 보여주는 기괴한 사이트였습니다.\n2. 하지만 로그를 분석해보니, 유독 '게임 방송' 카테고리에 트래픽이 몰리는 것을 발견했습니다.\n3. 과감하게 다른 카테고리를 다 버리고 '게이머'들을 위한 기능에만 집중했습니다.\n결국 아마존에 1조 원대에 인수되며 전 세계 1위 스트리밍 플랫폼이 되었습니다."
    },
    {
        id: 5,
        realName: "Quibi (퀴비)",
        hiddenTitle: "10분짜리 할리우드 숏폼 드라마",
        pitch: "\"디즈니 회장 출신이 만듭니다. 2조 원 투자를 받았습니다. 지하철에서 볼 수 있는 10분짜리 고퀄리티 영화/드라마 플랫폼입니다. 넷플릭스를 이길 것입니다.\"",
        reaction: "매우 긍정적 (기대 만발)",
        industry: "OTT/콘텐츠",
        outcome: "failure",
        multiplier: 0, // 0배
        profitText: "6개월 만에 폐업 📉",
        insightTitle: "돈으로 살 수 없는 것",
        story: "1. 2조 원이라는 막대한 자본과 할리우드 스타들을 썼지만 철저히 실패했습니다.\n2. '유료 구독'과 '모바일 전용(TV 송출 불가)' 정책이 치명적이었습니다. 틱톡과 유튜브 같은 강력한 무료 경쟁자가 이미 있었기 때문입니다.\n3. 고객이 원하는 건 '고퀄리티 숏폼'이 아니라 '무료로 즐기는 킬링타임'이었습니다."
    },
    {
        id: 6,
        realName: "Uber (우버)",
        hiddenTitle: "낯선 사람의 차를 타는 콜택시",
        pitch: "\"택시 잡기 힘들죠? 신원 확인된 일반인이 자기 차로 태워주는 건 어떨까요? 앱으로 부르면 5분 안에 벤츠가 옵니다.\"\n\n투자자 반응: \"불법이다. 기사가 살인마면 어쩔 거냐. 택시 노조가 가만있지 않을 것이다.\"",
        reaction: "부정적 (규제 우려)",
        industry: "모빌리티",
        outcome: "success",
        multiplier: 500, // 500배
        profitText: "모빌리티 혁명! 🚕",
        insightTitle: "규제를 돌파하는 실행력",
        story: "1. '규제보다 사용자 경험'을 우선시했습니다. 불법 논란에도 불구하고 폭발적인 사용자 반응을 무기로 법을 바꾸게 만들었습니다.\n2. 초기엔 '블랙 카(고급 리무진)' 서비스로 시작해 부유층의 입소문을 먼저 탔습니다.\n3. 단순히 택시 앱이 아니라 '버튼 하나로 현실 세계를 움직이는(비트 -> 아톰)' 물류 네트워크 비전을 제시했습니다."
    },
    {
        id: 7,
        realName: "Theranos (테라노스)",
        hiddenTitle: "피 한 방울로 200가지 질병 진단",
        pitch: "\"주사기 공포증 있나요? 손가락 끝에서 피 한 방울만 채취하면 암부터 당뇨까지 240가지 질병을 검사할 수 있는 키트 '에디슨'입니다.\"",
        reaction: "열광적 (제2의 스티브 잡스)",
        industry: "바이오/헬스케어",
        outcome: "failure",
        multiplier: 0,
        profitText: "희대의 사기극 🚨",
        insightTitle: "검증 없는 혁신의 최후",
        story: "1. 창업자 엘리자베스 홈즈의 스토리텔링에 전 세계가 속았습니다. 실제로는 기술이 구현되지 않았습니다.\n2. '비밀 유지'를 핑계로 외부 검증을 철저히 차단했습니다. \n3. 내부 고발자와 기자의 끈질긴 추적으로 실체가 드러났고, 기업 가치 10조 원이 0원이 되었습니다."
    },
    {
        id: 8,
        realName: "Netflix (넷플릭스)",
        hiddenTitle: "우편으로 DVD 배달 서비스",
        pitch: "\"비디오 연체료 내기 싫으시죠? 월 정액제만 내면 DVD를 우편으로 집까지 보내드립니다. 연체료도 없고 반납 기한도 없습니다.\"\n\n투자자 반응: \"비디오 대여점(블록버스터)가 골목마다 있는데 누가 우편을 기다리냐?\"",
        reaction: "냉소적",
        industry: "엔터테인먼트",
        outcome: "success",
        multiplier: 300,
        profitText: "미디어 제국 건설 👑",
        insightTitle: "자기 파괴적 혁신",
        story: "1. 경쟁자(블록버스터)가 무시하는 동안 '편리함(연체료 X)'으로 고객을 뺏어왔습니다.\n2. DVD 사업이 잘나갈 때, 과감하게 수익을 포기하고 '스트리밍'으로 사업을 전환했습니다.\n3. '하우스 오브 카드' 등 오리지널 콘텐츠 제작에 올인하며 단순 배급사에서 제작사로 진화했습니다."
    },
    {
        id: 9,
        realName: "Pets.com (펫닷컴)",
        hiddenTitle: "온라인 강아지 사료 배달",
        pitch: "\"무거운 사료 낑낑대며 사오지 마세요. 인터넷으로 주문하면 집 앞까지 배달해 드립니다. 귀여운 양말 인형 마스코트도 있어요!\"",
        reaction: "긍정적 (닷컴버블)",
        industry: "이커머스",
        outcome: "failure",
        multiplier: 0,
        profitText: "배송비가 더 비싸... 🐶",
        insightTitle: "유닛 이코노믹스의 중요성",
        story: "1. 2만 원짜리 사료를 파는 데 배송비가 1만 원이 들었습니다. 팔면 팔수록 손해 보는 구조였습니다.\n2. 슈퍼볼 광고 등 마케팅에 돈을 펑펑 썼지만, 고객 재구매율은 낮았습니다.\n3. '닷컴 버블'의 상징적인 실패 사례로, 수익 모델 없는 성장의 위험성을 보여줍니다."
    },
    {
        id: 10,
        realName: "Instagram (인스타그램)",
        hiddenTitle: "위스키 매니아를 위한 체크인 앱",
        pitch: "\"좋아하는 위스키 사진을 공유하고 위치를 찍는 앱(Burbn)입니다. 친구들과 술 약속 잡기에 딱입니다.\"",
        reaction: "미지근함",
        industry: "SNS",
        outcome: "success",
        multiplier: 100,
        profitText: "SNS의 왕좌 📸",
        insightTitle: "가장 많이 쓰는 기능만 남겨라",
        story: "1. 앱이 너무 복잡했습니다. 하지만 창업자는 유저들이 '사진에 필터 씌우기' 기능만 엄청나게 쓴다는 걸 발견했습니다.\n2. 과감하게 위스키, 체크인 기능을 다 버리고 '사진 공유' 하나만 남겼습니다.\n3. 런칭 2년 만에 페이스북에 1조 원에 인수되는 신화를 썼습니다."
    },
    {
        id: 11,
        realName: "WeWork (위워크)",
        hiddenTitle: "기술 기반 공유 오피스",
        pitch: "\"우리는 부동산 회사가 아닙니다. '공간을 파는 기술 기업'입니다. 전 세계 프리랜서들을 연결하는 오프라인 소셜 네트워크를 만듭니다.\"",
        reaction: "광적인 지지 (소프트뱅크)",
        industry: "부동산/플랫폼",
        outcome: "failure",
        multiplier: 0, // IPO 실패 및 가치 폭락을 failure로 간주
        profitText: "가치 50조 -> 파산 위기 📉",
        insightTitle: "포장지만 화려한 혁신",
        story: "1. '공동체', '의식 고양' 같은 화려한 비전으로 본질(부동산 임대업)을 가렸습니다.\n2. 무리한 확장과 창업자의 방만 경영(전용기 사용 등)으로 막대한 적자를 냈습니다.\n3. 기술 기업처럼 PER(주가수익비율)를 적용받으려 했으나, 결국 시장은 냉정하게 '적자 부동산 회사'로 평가했습니다."
    },
    {
        id: 12,
        realName: "Coinbase (코인베이스)",
        hiddenTitle: "인터넷 가상 화폐 지갑",
        pitch: "\"비트코인이라는 인터넷 돈을 쉽게 사고팔 수 있는 지갑입니다. 지금 비트코인 가격은 6달러(7천원)입니다.\"",
        reaction: "비웃음 (사기 취급)",
        industry: "핀테크/블록체인",
        outcome: "success",
        multiplier: 1000,
        profitText: "코인 떡상! 💰",
        insightTitle: "파도를 일찍 타는 자",
        story: "1. 당시엔 '해커들이나 쓰는 돈' 취급받았지만, 미래 화폐의 가능성을 믿고 가장 쉬운 UX를 만들었습니다.\n2. 규제를 피하지 않고 제도권 안으로 들어가려 노력하며 신뢰를 쌓았습니다.\n3. 암호화폐 붐이 일면서 수수료 수익이 폭발, 미국 나스닥 상장에 성공했습니다."
    },
    {
        id: 13,
        realName: "Fast (패스트)",
        hiddenTitle: "비밀번호 없는 1초 결제 버튼",
        pitch: "\"쇼핑몰마다 로그인하기 귀찮죠? 이 버튼 하나만 달면 전 세계 어디서든 1초 만에 결제가 끝납니다. 아마존 원클릭 결제의 범용 버전입니다.\"",
        reaction: "매우 긍정적",
        industry: "핀테크",
        outcome: "failure",
        multiplier: 0,
        profitText: "매출 0원, 비용 1000억 💸",
        insightTitle: "마케팅이 제품을 앞서갈 때",
        story: "1. 창업자의 화려한 트위터 마케팅으로 1,000억 원 넘게 투자받았습니다.\n2. 하지만 연 매출은 고작 6억 원, 직원은 400명이나 뽑는 방만 경영을 했습니다.\n3. 정작 제품은 경쟁사(스트라이프, 애플페이)보다 차별점이 없었고, 돈이 말라 파산했습니다."
    },
    {
        id: 14,
        realName: "Zoom (줌)",
        hiddenTitle: "또 다른 화상 회의 프로그램",
        pitch: "\"스카이프, 행아웃, 웹엑스... 이미 다 있는 거 압니다. 근데 다 끊기고 복잡하잖아요? 우리는 그냥 '작동하는' 화상 회의를 만듭니다.\"",
        reaction: "무관심 (레드오션)",
        industry: "SaaS",
        outcome: "success",
        multiplier: 100,
        profitText: "팬데믹의 승자 🦠",
        insightTitle: "압도적 제품력이 마케팅이다",
        story: "1. 레드오션이었지만 기존 제품들의 '끊김 현상'과 '복잡함'을 기술력으로 해결했습니다.\n2. 별도 설치 없이 링크 하나로 접속하는 간편함이 바이럴의 핵심이었습니다.\n3. 팬데믹으로 전 세계가 재택근무에 돌입하며 동사(Zooming)가 되었습니다."
    },
    {
        id: 15,
        realName: "MoviePass (무비패스)",
        hiddenTitle: "월 1만 원 영화관 무제한 이용권",
        pitch: "\"넷플릭스처럼 극장도 구독하세요. 월 9.95달러만 내면 매일 영화 한 편을 극장에서 볼 수 있습니다.\"",
        reaction: "소비자 열광",
        industry: "엔터테인먼트",
        outcome: "failure",
        multiplier: 0,
        profitText: "팔수록 손해 🎞️",
        insightTitle: "지속 불가능한 비즈니스",
        story: "1. 극장표 한 장값이 구독료보다 비쌉니다. 회사는 고객이 영화를 볼 때마다 생돈을 물어줬습니다.\n2. '데이터를 모아 팔겠다'는 계획은 있었지만, 적자 속도가 너무 빨랐습니다.\n3. '공짜 점심'을 찾는 체리피커들만 몰려들었고, 자금난으로 서비스를 종료했습니다."
    },
    {
        id: 16,
        realName: "Google (구글)",
        hiddenTitle: "논문 인용 기반 검색 엔진",
        pitch: "\"야후처럼 사람이 웹사이트를 분류하는 건 한계가 있습니다. 다른 사이트가 많이 링크를 걸어준 곳이 좋은 사이트라는 알고리즘(PageRank)으로 검색 결과를 보여줍니다.\"",
        reaction: "중립적 (야후 천하)",
        industry: "IT/소프트웨어",
        outcome: "success",
        multiplier: 10000, // 1만배
        profitText: "전설의 시작 🦖",
        insightTitle: "본질을 꿰뚫은 알고리즘",
        story: "1. 당시 검색 포털들은 '오래 머물기(뉴스, 날씨)'에 집중했지만, 구글은 '빨리 떠나기(정확한 검색 후 이동)'에 집중했습니다.\n2. 광고조차 '검색어 연관 텍스트'로만 넣어 사용자 경험을 해치지 않았습니다.\n3. 야후가 1조 원에 인수하려다 실패했고, 지금은 시가총액 2,000조 원의 기업이 되었습니다."
    }
];

let state = {
    money: 10000000,
    currentRoundIndex: 0,
    history: [],
    gameRounds: [] // 이번 게임에 사용할 라운드 목록
};

// ... (DOM Elements and previous helpers stay the same)

// Fisher-Yates Shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startGame() {
    state.money = 10000000;
    state.currentRoundIndex = 0;
    state.history = [];

    // 전체 데이터에서 랜덤으로 7개만 뽑아서 게임 진행 (매판 다르게)
    state.gameRounds = shuffle(allRoundsData).slice(0, 8);

    loadRound(0);
    switchScreen('game');
}

function loadRound(index) {
    // roundsData[index] 대신 state.gameRounds[index] 사용
    if (index >= state.gameRounds.length) {
        showFinalResult();
        return;
    }

    const data = state.gameRounds[index];
    pitchTitle.innerText = data.hiddenTitle;
    pitchDesc.innerText = data.pitch;
    pitchReaction.innerText = data.reaction;
    pitchIndustry.innerText = data.industry;

    pitchReaction.className = 'value';
    if (data.reaction.includes('부정') || data.reaction.includes('비웃음') || data.reaction.includes('냉소')) pitchReaction.classList.add('negative');
    else if (data.reaction.includes('긍정') || data.reaction.includes('열광')) pitchReaction.classList.add('positive');

    updateUI(state.gameRounds.length);
}

function handleBet(amountStr) {
    const currentRoundData = state.gameRounds[state.currentRoundIndex];
    let betAmount = 0;

    if (amountStr === 'all') {
        betAmount = state.money;
    } else {
        betAmount = parseInt(amountStr);
    }

    if (betAmount > state.money) betAmount = state.money;

    const multiplier = currentRoundData.multiplier;
    const remainingMoney = state.money - betAmount;
    const returnMoney = betAmount * multiplier;

    const profit = returnMoney - betAmount;
    state.money = remainingMoney + returnMoney;

    showResult(currentRoundData, profit, multiplier, betAmount);
}

function nextRound() {
    state.currentRoundIndex++;
    if (state.currentRoundIndex >= state.gameRounds.length) {
        showFinalResult();
    } else {
        loadRound(state.currentRoundIndex);
        switchScreen('game');
    }
}

function updateUI() {
    moneyDisplay.innerText = `₩${state.money.toLocaleString()}`;
    roundDisplay.innerText = `Round ${state.currentRoundIndex + 1}/${state.gameRounds.length}`;
    const progress = ((state.currentRoundIndex) / state.gameRounds.length) * 100;
    progressBar.style.width = `${progress}%`;
}

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    result: document.getElementById('result-screen'),
    final: document.getElementById('final-screen')
};

// Elements to update
const moneyDisplay = document.getElementById('money-display');
const roundDisplay = document.getElementById('round-display');
const progressBar = document.getElementById('progress-bar');

const pitchTitle = document.getElementById('pitch-title');
const pitchDesc = document.getElementById('pitch-desc');
const pitchReaction = document.getElementById('pitch-reaction');
const pitchIndustry = document.getElementById('pitch-industry');

const revealName = document.getElementById('company-reveal-name');
const resultBadge = document.getElementById('result-badge');
const profitText = document.getElementById('profit-text');
const resultStory = document.getElementById('result-story');

// Buttons
document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('next-btn').addEventListener('click', nextRound);
document.getElementById('restart-btn').addEventListener('click', startGame);

document.querySelectorAll('.btn-bet').forEach(btn => {
    btn.addEventListener('click', (e) => handleBet(e.target.dataset.amount));
});

// Functions
function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function showResult(data, profit, multiplier, betAmount) {
    revealName.innerText = data.realName;

    // 1. 성공/실패 여부 및 투자 여부에 따른 메시지 분기
    const container = resultBadge;
    container.className = 'badge result-badge'; // reset class

    // 수익률 계산 (배팅했을 때만 의미 있음)
    let profitRate = 0;
    if (betAmount > 0) {
        // (최종가치 - 투자금) / 투자금 * 100
        // multiplier 50배 -> (50 - 1) * 100 = 4900%
        profitRate = (multiplier - 1) * 100;
    }

    if (data.outcome === 'success') {
        if (betAmount > 0) {
            // 성공한 기업에 투자함 (Good)
            container.style.backgroundColor = '#00b894';
            container.innerText = data.profitText;
            profitText.innerText = `+${profit.toLocaleString()}원 (+${profitRate.toLocaleString()}%) 📈`;
            profitText.classList.remove('loss');
        } else {
            // 성공한 기업에 투자 안 함 (Miss)
            container.style.backgroundColor = '#fdcb6e'; // 
            container.style.color = '#2d3436';
            container.innerText = "아까비! 대박을 놓쳤어요 😭";
            profitText.innerText = "0원 (투자 안 함)";
            profitText.classList.remove('loss');
        }
    } else {
        // 실패한 기업
        if (betAmount > 0) {
            // 실패한 기업에 투자함 (Bad)
            container.style.backgroundColor = '#d63031';
            container.style.color = '#fff';
            container.innerText = data.profitText;
            profitText.innerText = `${profit.toLocaleString()}원 (-100%) 💸`;
            profitText.classList.add('loss');
        } else {
            // 실패한 기업을 잘 피함 (Good)
            container.style.backgroundColor = '#0984e3'; // Blue for wisdom
            container.style.color = '#fff';
            container.innerText = "휴~ 똥 밟을 뻔했네요! 🛡️";
            profitText.innerText = "0원 손실 방어 성공!";
            profitText.classList.remove('loss');
        }
    }

    // Story 업데이트
    const storyBox = document.querySelector('.story-box');
    storyBox.innerHTML = `<h3>${data.insightTitle || 'Behind Story'}</h3><p>${data.story.replace(/\n/g, '<br>')}</p>`;

    switchScreen('result');
}

function showFinalResult() {
    switchScreen('final');
    document.getElementById('final-money').innerText = `₩${state.money.toLocaleString()}`;

    const initial = 10000000;
    const rate = ((state.money - initial) / initial) * 100;
    document.getElementById('final-rate').innerText = `수익률 ${rate.toFixed(0)}%`;

    const rankText = document.getElementById('final-rank-text');
    if (state.money > 1000000000) {
        rankText.innerText = "🏆 당신은 투자의 신입니다! (워렌 버핏급)";
    } else if (state.money > 100000000) {
        rankText.innerText = "🥇 훌륭한 안목을 가졌군요! (상위 1%)";
    } else if (state.money > initial) {
        rankText.innerText = "🥈 나쁘지 않은 수익입니다. (안전 제일)";
    } else if (state.money > 0) {
        rankText.innerText = "🥉 수업료를 좀 냈네요... (살아남은 게 다행)";
    } else {
        rankText.innerText = "💀 파산했습니다... (다시 도전하세요)";
    }
}
