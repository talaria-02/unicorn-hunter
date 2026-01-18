// allRoundsData is loaded from data.js

let state = {
    money: 10000000,
    currentRoundIndex: 0,
    history: [],
    gameRounds: []
};

// ... (DOM Elements and shuffle function remain the same)

// Fisher-Yates Shuffle
function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// LocalStorage Helper
function getSeenIds() {
    const seen = localStorage.getItem('seenCompanyIds');
    return seen ? JSON.parse(seen) : [];
}

function saveSeenIds(ids) {
    const current = getSeenIds();
    const newSet = new Set([...current, ...ids]);
    localStorage.setItem('seenCompanyIds', JSON.stringify([...newSet]));
}

function clearSeenIds() {
    localStorage.removeItem('seenCompanyIds');
}

function startGame() {
    // 1. 파산 상태 체크 (게임 오버 후 재시작 시 자금 초기화 필요, 하지만 '이어하기'가 아니므로 항상 초기화)
    state.money = 10000000;
    state.currentRoundIndex = 0;
    state.history = [];

    // 2. 안 본 기업 필터링
    const seenIds = getSeenIds();
    // 만약 데이터 대부분을 봤으면(남은 게 8개 미만), 기록 초기화
    let availableData = allRoundsData.filter(item => !seenIds.includes(item.id));

    if (availableData.length < 8) {
        alert("모든 기업을 다 보셨네요! 기업 목록을 초기화하고 다시 섞습니다. 🔄");
        clearSeenIds();
        availableData = [...allRoundsData];
    }

    // [HARDCORE MODE] 성공 1개 + 실패 7개
    const successCases = availableData.filter(item => item.outcome === 'success');
    const failureCases = availableData.filter(item => item.outcome === 'failure');

    // 성공/실패 풀이 부족할 경우 대비 (Mock 데이터가 많아서 괜찮겠지만 안전장치)
    let pickS = [], pickF = [];

    if (successCases.length >= 1) {
        pickS = shuffle(successCases).slice(0, 1);
    } else {
        // 남은 것 중에 성공이 없으면 전체 데이터에서라도 가져옴
        pickS = shuffle(allRoundsData.filter(i => i.outcome === 'success')).slice(0, 1);
    }

    if (failureCases.length >= 7) {
        pickF = shuffle(failureCases).slice(0, 7);
    } else {
        pickF = shuffle(allRoundsData.filter(i => i.outcome === 'failure')).slice(0, 7);
    }

    const deck = [...pickS, ...pickF];
    state.gameRounds = shuffle(deck);

    // 이번 게임에 나온 애들은 '본 것'으로 처리
    saveSeenIds(state.gameRounds.map(i => i.id));

    loadRound(0);
    switchScreen('game');
}

function startGame() {
    state.money = 10000000;
    state.currentRoundIndex = 0;
    state.history = [];

    // [HARDCORE MODE] 성공 1개(12.5%) + 실패 7개(87.5%) 강제 조합

    // 1. 성공/실패 그룹으로 나누기
    const successCases = allRoundsData.filter(item => item.outcome === 'success');
    const failureCases = allRoundsData.filter(item => item.outcome === 'failure');

    // 2. 랜덤하게 뽑기
    // 성공에서 1개
    const pickedSuccess = shuffle(successCases).slice(0, 1);
    // 실패에서 7개
    const pickedFailures = shuffle(failureCases).slice(0, 7);

    // 3. 합치고 다시 섞기 (유저가 순서를 모르게)
    const deck = [...pickedSuccess, ...pickedFailures];
    state.gameRounds = shuffle(deck);

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
    // 파산 체크: 최소 베팅금(100만)보다 적으면 게임 오버
    if (state.money < 1000000) {
        showGameOver();
        return;
    }

    state.currentRoundIndex++;
    if (state.currentRoundIndex >= state.gameRounds.length) {
        showFinalResult();
    } else {
        loadRound(state.currentRoundIndex);
        switchScreen('game');
    }
}

function showGameOver() {
    switchScreen('final');
    document.getElementById('final-money').innerText = `₩${state.money.toLocaleString()}`;
    document.getElementById('final-rate').innerText = "파산 (Bankruptcy) 💀";
    document.getElementById('final-rank-text').innerText = "자금이 바닥났습니다. 더 이상 투자할 돈이 없네요.";
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
