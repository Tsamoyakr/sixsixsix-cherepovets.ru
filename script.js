// ========== НАСТРОЙКИ FIREBASE ==========
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRgQ7y14HmmNEXXLqNMqjOLMUJzWCoHwc",
    authDomain: "sixsix-b1743.firebaseapp.com",
    databaseURL: "https://sixsix-b1743-default-rtdb.firebaseio.com",
    projectId: "sixsix-b1743",
    storageBucket: "sixsix-b1743.firebasestorage.app",
    messagingSenderId: "773352016608",
    appId: "1:773352016608:web:a1f825b1751f8cfd085e85"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// ========================================

console.log('🔥 Firebase подключен!');

// ===== БАЗА ДАННЫХ УЧИТЕЛЕЙ =====
const teachersDB = {
    "29": [
        "Горчакова Анжелика Николаевна", "Шукова Ольга Анатольевна", "Якунов Даниил Александрович",
        "Алексеевцева Валерия Дмитриевна", "Белоброва Любовь Владимировна", "Воробьева Анастасия Игоревна",
        "Елина Ирина Алексеевна", "Ефремова Галина Валерьевна", "Загоскина Евгения Петровна",
        "Заморкина Светлана Анатольевна", "Занина Ирина Юрьевна", "Зубова Лариса Венеаминовна",
        "Королькова Светлана Геннадьевна", "Кузнецов Николай Константинович", "Мазилова Виктория Вячеславовна",
        "Мегельбей Полина Сергеевна", "Зенкова Татьяна Александровна", "Ольнова Ирина Валентиновна",
        "Петрова Анастасия Викторовна", "Проворова Карина Александровна", "Ратькова Людмила Александровна",
        "Столярова Ольга Александровна", "Таничева Мария Владимировна", "Туманова Ольга Николаевна",
        "Хамова Наталья Михайловна"
    ],
    "33": [
        "Расторопова Алена Игоревна", "Кудряшова Вера Григорьевна", "Ярошенко Наталья Николаевна",
        "Шутова Любовь Сергеевна", "Шкокова Елена Евгеньевна", "Хухарева Елена Юрьевна",
        "Харламова Татьяна Александровна", "Фомина Ирина Ивановна", "Титаренко Оксана Николаевна",
        "Таланова Наталья Александровна", "Скорюкова Екатерина Ивановна", "Ситникова Ольга Викторовна",
        "Сёмина Жанна Николаевна", "Сахарова Валентина Васильевна", "Руденко Любовь Николаевна",
        "Рескова Светлана Юрьевна", "Павлова Ирина Анатольевна", "Оленева Светлана Александровна",
        "Никандрова Наталья Александровна", "Нивина Любовь Николаевна", "Мартынова Наталия Николаевна",
        "Маракова Надежда Алфеевна", "Магомедова Ирина Ивановна", "Лучкинская Ирина Валентиновна",
        "Кустова Аксана Владимировна", "Куликова Елена Леонидовна", "Кузьмина Анна Владимировна",
        "Клочков Алексей Александрович", "Иевлева Татьяна Владимировна", "Жилина Мария Вадимовна",
        "Нестерова Анжелика Михайловна", "Дьякова Елена Павловна", "Плужникова Анна Дмитриевна",
        "Дьякова Юлия Сергеевна", "Иванова Елена Валентиновна", "Викторова Татьяна Анатольевна",
        "Андреева Вера Сергеевна", "Акимова Светлана Петровна"
    ],
    "13": [
        "Агеева Марина Анатольевна", "Антончик Светлана Вячеславовна", "Беляева Анна Павловна",
        "Беляева Ольга Сергеевна", "Билькова Оксана Алексеевна", "Борисова Юлия Викторовна",
        "Булындина Светлана Дмитриевна", "Быстрова Екатерина Сергеевна", "Викторова Ольга Викторовна",
        "Гайдов Владимир Валентинович", "Дурягина Людмила Сергеевна", "Зайцева Виктория Николаевна",
        "Игнатьева Светлана Анатольевна", "Казакова Евгения Николаевна", "Клягина Светлана Михайловна",
        "Короп Лариса Владимировна", "Коряковская Светлана Анатольевна", "Кудрявцева Анастасия Николаевна",
        "Кузнецова Валентина Александровна", "Красильникова Александра Васильевна", "Лыгина Наталия Николаевна",
        "Мальцева Евгения Станиславовна", "Мальцева Мария Олеговна", "Мартынов Павел Сергеевич",
        "Мастакова Светлана Евгеньевна", "Меньшикова Татьяна Константиновна", "Митюкова Елена Анатольевна",
        "Морозова Елена Николаевна", "Морозова Анастасия Владимировна", "Немирович Мария Вячеславовна",
        "Никитенко Яна Валерьевна", "Николина Марина Николаевна", "Неклюдова Алёна Сергеевна",
        "Петухова Татьяна Валерьевна", "Петуховская Наталья Геннадьевна", "Пенькова Анна Александровна",
        "Распутина Ирина Леонидовна", "Расторопова Алена Игоревна", "Сверчкова Наталья Владимировна",
        "Сергеева Елена Николаевна", "Серобабена Галина Васильевна", "Смирнова Елена Вячеславовна",
        "Соловьева Нина Валерьевна", "Сорокина Екатерина Алексеевна", "Степанова Лариса Владимировна",
        "Сиволап Даниил Андреевич", "Таничева Виктория Дмитриевна", "Тикунова Жанна Валерьевна",
        "Торочкова Александра Андреевна", "Тырнова Ольга Владимировна", "Трубаева Людмила Васильевна"
    ]
};

// Список учителей мужского пола
const maleTeachers = [
    "Якунов Даниил Александрович", "Кузнецов Николай Константинович", "Клочков Алексей Александрович",
    "Гайдов Владимир Валентинович", "Мартынов Павел Сергеевич", "Сиволап Даниил Андреевич"
];

// ===== СОСТОЯНИЕ ПРИЛОЖЕНИЯ =====
let currentSchool = "33";
let currentCategory = "sexy";
let selectedTeacher = null;
let filterSchool = "all";
let currentNav = "main";

// ID устройства
let deviceId = localStorage.getItem('deviceId');
if (!deviceId) {
    deviceId = 'device_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
    localStorage.setItem('deviceId', deviceId);
}

// Данные
let votes = { "33": {}, "13": {}, "29": {}, "raion": {} };
let comments = { "33": [], "13": [], "29": [], "raion": [] };
let commentLikes = {};
let suggestions = [];
let suggestionLikes = {};
let polls = [
    {
        id: 1,
        question: "Устроить батл школ?",
        options: ["Да", "Нет", "Воздержусь"],
        votes: { "Да": [], "Нет": [], "Воздержусь": [] }
    },
    {
        id: 2,
        question: "Делать еженедельные битвы?",
        options: ["За", "Против", "Мне всё равно"],
        votes: { "За": [], "Против": [], "Мне всё равно": [] }
    },
    {
        id: 3,
        question: "Делать батлы среди учеников?",
        options: ["Да", "Нет"],
        votes: { "Да": [], "Нет": [] }
    }
];

// ===== ФУНКЦИИ FIREBASE =====
async function loadFromFirebase() {
    try {
        const votesRef = ref(db, 'votes');
        const votesSnap = await get(votesRef);
        if (votesSnap.exists()) votes = votesSnap.val();

        const commentsRef = ref(db, 'comments');
        const commentsSnap = await get(commentsRef);
        if (commentsSnap.exists()) comments = commentsSnap.val();

        const commentLikesRef = ref(db, 'commentLikes');
        const commentLikesSnap = await get(commentLikesRef);
        if (commentLikesSnap.exists()) commentLikes = commentLikesSnap.val();

        const suggestionsRef = ref(db, 'suggestions');
        const suggestionsSnap = await get(suggestionsRef);
        if (suggestionsSnap.exists()) suggestions = suggestionsSnap.val();

        const suggestionLikesRef = ref(db, 'suggestionLikes');
        const suggestionLikesSnap = await get(suggestionLikesRef);
        if (suggestionLikesSnap.exists()) suggestionLikes = suggestionLikesSnap.val();

        const pollsRef = ref(db, 'polls');
        const pollsSnap = await get(pollsRef);
        if (pollsSnap.exists()) polls = pollsSnap.val();

        console.log('✅ Данные загружены');
        updateAllDisplays();
        if (currentNav === 'suggestions') {
            renderSuggestions();
            renderPolls();
        }
    } catch (error) {
        console.error('❌ Ошибка загрузки:', error);
    }
}

async function saveToFirebase() {
    try {
        await set(ref(db, 'votes'), votes);
        await set(ref(db, 'comments'), comments);
        await set(ref(db, 'commentLikes'), commentLikes);
        await set(ref(db, 'suggestions'), suggestions);
        await set(ref(db, 'suggestionLikes'), suggestionLikes);
        await set(ref(db, 'polls'), polls);
        console.log('✅ Данные сохранены');
    } catch (error) {
        console.error('❌ Ошибка сохранения:', error);
    }
}

function subscribeToUpdates() {
    onValue(ref(db, 'votes'), (snapshot) => {
        if (snapshot.exists()) { votes = snapshot.val(); updateAllDisplays(); }
    });
    onValue(ref(db, 'comments'), (snapshot) => {
        if (snapshot.exists()) { comments = snapshot.val(); renderComments(); }
    });
    onValue(ref(db, 'commentLikes'), (snapshot) => {
        if (snapshot.exists()) { commentLikes = snapshot.val(); renderComments(); }
    });
    onValue(ref(db, 'suggestions'), (snapshot) => {
        if (snapshot.exists()) { suggestions = snapshot.val(); if (currentNav === 'suggestions') renderSuggestions(); }
    });
    onValue(ref(db, 'suggestionLikes'), (snapshot) => {
        if (snapshot.exists()) { suggestionLikes = snapshot.val(); if (currentNav === 'suggestions') renderSuggestions(); }
    });
}

// ===== ФУНКЦИИ ИНТЕРФЕЙСА =====
function updateAllDisplays() {
    updateActivityPodium();
    renderWinnersDistrict();
    renderSchoolLeaders();
    renderComments();
}

function getFilteredTeachers() {
    let teachers = [];
    if (currentSchool === 'raion') {
        teachers = filterSchool === 'all' 
            ? [...teachersDB["33"], ...teachersDB["13"], ...teachersDB["29"]]
            : teachersDB[filterSchool] || [];
    } else {
        teachers = teachersDB[currentSchool] || [];
    }
    if (currentCategory === 'chill') {
        teachers = teachers.filter(t => maleTeachers.includes(t));
    }
    return teachers;
}

function renderTeacherWheel() {
    const wheel = document.getElementById('teacherWheel');
    if (!wheel) return;
    
    const teachersList = getFilteredTeachers();
    let html = '';
    teachersList.forEach(teacher => {
        html += `<div class="teacher-option ${selectedTeacher === teacher ? 'selected-teacher' : ''}" data-teacher="${teacher}">${teacher}</div>`;
    });
    wheel.innerHTML = html || '<div class="teacher-option">Нет учителей</div>';

    document.querySelectorAll('.teacher-option').forEach(el => {
        el.addEventListener('click', function() {
            document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
            this.classList.add('selected-teacher');
            selectedTeacher = this.dataset.teacher;
            document.getElementById('saveVoteBtn').disabled = false;
        });
    });
}

function calculateSchoolScores() {
    const scores = { "33": 0, "13": 0, "29": 0 };
    for (let school of ["33", "13", "29"]) {
        if (votes[school]) {
            for (let cat of ['sexy', 'good', 'mraz', 'fun', 'chill']) {
                if (votes[school][cat]) {
                    for (let teacher in votes[school][cat]) {
                        if (votes[school][cat][teacher]?.length) {
                            scores[school] += votes[school][cat][teacher].length;
                        }
                    }
                }
            }
        }
    }
    return scores;
}

function updateActivityPodium() {
    const podium = document.getElementById('activityPodium');
    if (!podium) return;
    
    const scores = calculateSchoolScores();
    const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    
    let html = '';
    if (sorted[0]) html += `<div class="podium-place place-1"><div class="place-bar"><div>Школа ${sorted[0][0]}</div><div class="school-score">${sorted[0][1]}</div></div></div>`;
    if (sorted[1]) html += `<div class="podium-place place-2"><div class="place-bar"><div>Школа ${sorted[1][0]}</div><div class="school-score">${sorted[1][1]}</div></div></div>`;
    if (sorted[2]) html += `<div class="podium-place place-3"><div class="place-bar"><div>Школа ${sorted[2][0]}</div><div class="school-score">${sorted[2][1]}</div></div></div>`;
    podium.innerHTML = html;
}

function getSchoolFromTeacher(teacher) {
    for (let school of ["33", "13", "29"]) {
        if (teachersDB[school].includes(teacher)) return school;
    }
    return "";
}

function renderWinnersDistrict() {
    const grid = document.getElementById('winnersGrid');
    if (!grid) return;
    
    const categories = ['sexy', 'good', 'mraz', 'fun', 'chill'];
    const catLabels = ['Секси', 'Добрая', 'Мразота', 'Угарная', 'Чиловый мужик'];
    const icons = ['💋', '😇', '👿', '🔥', '😎'];
    const raionVotes = votes['raion'] || {};
    
    let html = '';
    categories.forEach((cat, idx) => {
        let maxCount = 0, winnerName = 'нет голосов';
        if (raionVotes[cat]) {
            for (let teacher in raionVotes[cat]) {
                const cnt = raionVotes[cat][teacher]?.length || 0;
                if (cnt > maxCount) { maxCount = cnt; winnerName = teacher; }
            }
        }
        const school = winnerName !== 'нет голосов' ? getSchoolFromTeacher(winnerName) : '';
        html += `
            <div class="winner-card">
                <div class="winner-icon">${icons[idx]}</div>
                <div class="winner-category">${catLabels[idx]}</div>
                <div class="winner-name">${winnerName}</div>
                ${school ? `<div class="winner-school">(школа ${school})</div>` : ''}
                <div class="winner-votes">🔥 ${maxCount} голосов 🔥</div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderSchoolLeaders() {
    if (currentSchool === 'raion') return;
    const grid = document.getElementById('leadersGrid');
    if (!grid) return;
    
    const categories = ['sexy', 'good', 'mraz', 'fun', 'chill'];
    const catLabels = ['Секси', 'Добрая', 'Мразота', 'Угарная', 'Чиловый мужик'];
    const schoolVotes = votes[currentSchool] || {};
    
    let html = '';
    categories.forEach((cat, idx) => {
        let maxCount = 0, topTeacher = 'нет голосов';
        if (schoolVotes[cat]) {
            for (let teacher in schoolVotes[cat]) {
                const cnt = schoolVotes[cat][teacher]?.length || 0;
                if (cnt > maxCount) { maxCount = cnt; topTeacher = teacher; }
            }
        }
        html += `
            <div class="leader-cat-block">
                <div class="leader-cat-name">${catLabels[idx]}</div>
                <div class="leader-teacher">${topTeacher}</div>
                <div class="leader-votes">⚡ ${maxCount} голосов ⚡</div>
            </div>
        `;
    });
    grid.innerHTML = html;
}

function renderComments() {
    const list = document.getElementById('commentList');
    if (!list) return;
    
    const schoolComments = comments[currentSchool] || [];
    let html = '';
    
    schoolComments.slice().reverse().forEach((c, idx) => {
        const commentId = `${currentSchool}_${idx}_${c.timestamp}`;
        const likes = commentLikes[commentId] || { likes: [], dislikes: [] };
        html += `
            <div class="comment-item" data-comment-id="${commentId}">
                <span class="comment-nick">${c.nick || 'Аноним'}:</span>
                <span class="comment-text">${c.text || ''}</span>
                <div class="comment-likes">
                    <button class="like-btn ${likes.likes?.includes(deviceId) ? 'active-like' : ''}" data-type="comment" data-action="like">👍</button>
                    <span class="like-count">${likes.likes?.length || 0}</span>
                    <button class="dislike-btn ${likes.dislikes?.includes(deviceId) ? 'active-dislike' : ''}" data-type="comment" data-action="dislike">👎</button>
                    <span class="dislike-count">${likes.dislikes?.length || 0}</span>
                </div>
            </div>
        `;
    });
    
    list.innerHTML = html || '<div class="comment-item">💬 Напиши первый комментарий!</div>';
}

function renderPolls() {
    const pollsGrid = document.getElementById('pollsGrid');
    if (!pollsGrid) return;
    
    let html = '';
    polls.forEach(poll => {
        html += `
            <div class="poll-item" data-poll-id="${poll.id}">
                <div class="poll-question">${poll.question}</div>
                <div class="poll-options">
                    ${poll.options.map(opt => `
                        <button class="poll-btn ${poll.votes[opt]?.includes(deviceId) ? 'active-poll' : ''}" data-option="${opt}">
                            ${opt} (${poll.votes[opt]?.length || 0})
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    });
    pollsGrid.innerHTML = html;
}

function renderSuggestions() {
    console.log('📝 Рендеринг предложений');
    
    const container = document.getElementById('suggestionsContainer');
    const topContainer = document.getElementById('topSuggestions');
    
    if (!container) {
        console.error('❌ Нет контейнера для предложений');
        return;
    }
    
    // Убеждаемся, что данные существуют
    if (!Array.isArray(suggestions)) suggestions = [];
    if (!suggestionLikes || typeof suggestionLikes !== 'object') suggestionLikes = {};
    
    // Топ предложений
    if (topContainer) {
        const suggestionsWithLikes = suggestions.map(s => ({
            ...s,
            likeCount: suggestionLikes[s.id]?.likes?.length || 0
        }));
        
        const top3 = suggestionsWithLikes
            .sort((a, b) => b.likeCount - a.likeCount)
            .slice(0, 3);
        
        let topHtml = '<div class="top-suggestions-title">🔥 ТОП ПРЕДЛОЖЕНИЙ 🔥</div>';
        if (top3.length) {
            top3.forEach(s => {
                topHtml += `
                    <div class="top-suggestion-item">
                        <div class="top-suggestion-author">${s.nick || 'Аноним'} (${s.school || '?'})</div>
                        <div class="top-suggestion-text">${s.text || ''}</div>
                        <div class="top-suggestion-likes">👍 ${s.likeCount}</div>
                    </div>
                `;
            });
        } else {
            topHtml += '<div class="top-suggestion-item">Пока нет предложений</div>';
        }
        topContainer.innerHTML = topHtml;
    }
    
    // Все предложения
    let html = '';
    if (suggestions.length) {
        suggestions.slice().reverse().forEach(s => {
            const likes = suggestionLikes[s.id] || { likes: [], dislikes: [] };
            html += `
                <div class="suggestion-item" data-suggestion-id="${s.id}">
                    <div class="suggestion-meta">
                        <span class="suggestion-author">${s.nick || 'Аноним'}</span>
                        <span class="suggestion-school-tag">${s.school || '?'}</span>
                        <span>${s.timestamp ? new Date(s.timestamp).toLocaleString() : ''}</span>
                    </div>
                    <div class="suggestion-content">${s.text || ''}</div>
                    <div class="suggestion-likes">
                        <button class="like-btn ${likes.likes?.includes(deviceId) ? 'active-like' : ''}" data-type="suggestion" data-action="like">👍</button>
                        <span class="like-count">${likes.likes?.length || 0}</span>
                        <button class="dislike-btn ${likes.dislikes?.includes(deviceId) ? 'active-dislike' : ''}" data-type="suggestion" data-action="dislike">👎</button>
                        <span class="dislike-count">${likes.dislikes?.length || 0}</span>
                    </div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html || '<div class="suggestion-item">Пока нет предложений. Будь первым!</div>';
    console.log('✅ Предложения отрендерены');
}

// ===== ОБРАБОТЧИКИ =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Страница загружена');
    
    // Создаём секцию "О проекте"
    const container = document.querySelector('.container');
    if (container && !document.getElementById('aboutSection')) {
        const aboutSection = document.createElement('div');
        aboutSection.id = 'aboutSection';
        aboutSection.className = 'about-section';
        aboutSection.style.display = 'none';
        aboutSection.innerHTML = `
            <div class="about-content">
                <h2>О ПРОЕКТЕ / МАНИФЕСТ</h2>
                <p>Школа — это ад.<br>Душные уроки, крики по утрам и куча домашнего ада. Но есть в этом филиале преисподней те, кто делает это место чуть менее невыносимым. Или наоборот — превращают его в настоящий кошмар.</p>
                <p>SixSixSix Zaebis — это народный рейтинг учителей, свободный от лицемерия и школьной цензуры.</p>
                <p>Мы не собираем грамоты и не целуем руки. Мы собираем голоса. Здесь ученики решают, кто реально «Zaebis», а кто тянет школу на дно.</p>
                <h3>Как это работает?</h3>
                <p>Находишь учителя в списке → ставишь оценку → комментируешь.</p>
                <div class="about-ad">🔞 ТУТ МОЖЕТ БЫТЬ ТВОЯ РЕКЛАМА 🔥<br><small>пиши в tg боте</small></div>
            </div>
        `;
        container.appendChild(aboutSection);
    }
    
    // Навигация
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active-nav'));
            this.classList.add('active-nav');
            
            const nav = this.dataset.nav;
            currentNav = nav;
            
            const sections = {
                'winners-section': document.querySelector('.winners-section'),
                'info-box': document.querySelector('.info-box'),
                'selection-panel': document.querySelector('.selection-panel'),
                'roulette-container': document.querySelector('.roulette-container'),
                'school-leaders': document.querySelector('.school-leaders'),
                'bottom-panel': document.querySelector('.bottom-panel'),
                'school-activity': document.querySelector('.school-activity'),
                'aboutSection': document.getElementById('aboutSection'),
                'suggestionsSection': document.getElementById('suggestionsSection')
            };
            
            Object.values(sections).forEach(el => { if (el) el.style.display = 'none'; });
            
            if (nav === 'main') {
                if (sections['winners-section']) sections['winners-section'].style.display = 'block';
                if (sections['info-box']) sections['info-box'].style.display = 'block';
                if (sections['selection-panel']) sections['selection-panel'].style.display = 'flex';
                if (sections['roulette-container']) sections['roulette-container'].style.display = 'block';
                if (sections['bottom-panel']) sections['bottom-panel'].style.display = 'flex';
                if (sections['school-activity']) sections['school-activity'].style.display = 'block';
                if (sections['school-leaders'] && currentSchool !== 'raion') sections['school-leaders'].style.display = 'block';
            } else if (nav === 'suggestions') {
                if (sections['suggestionsSection']) {
                    sections['suggestionsSection'].style.display = 'block';
                    renderSuggestions();
                    renderPolls();
                }
            } else if (nav === 'about') {
                if (sections['aboutSection']) sections['aboutSection'].style.display = 'block';
            }
        });
    });

    // Голосование за учителей
    document.getElementById('saveVoteBtn')?.addEventListener('click', async function() {
        if (!selectedTeacher) { alert('Выбери учителя!'); return; }
        if (votes[currentSchool]?.[currentCategory]?.[selectedTeacher]?.includes(deviceId)) {
            alert('Ты уже голосовал!'); return;
        }
        
        if (!votes[currentSchool]) votes[currentSchool] = {};
        if (!votes[currentSchool][currentCategory]) votes[currentSchool][currentCategory] = {};
        if (!votes[currentSchool][currentCategory][selectedTeacher]) votes[currentSchool][currentCategory][selectedTeacher] = [];
        
        votes[currentSchool][currentCategory][selectedTeacher].push(deviceId);
        await saveToFirebase();
        alert(`✅ Голос за ${selectedTeacher} учтён!`);
        document.getElementById('saveVoteBtn').disabled = true;
        selectedTeacher = null;
        document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
    });

    // Отправка комментария
    document.getElementById('sendComment')?.addEventListener('click', async function() {
        const nick = document.getElementById('nickInput')?.value.trim();
        const text = document.getElementById('commentInput')?.value.trim();
        if (!nick || !text) { alert('Введите ник и комментарий!'); return; }
        
        if (!comments[currentSchool]) comments[currentSchool] = [];
        comments[currentSchool].push({ nick, text, deviceId, timestamp: Date.now() });
        await saveToFirebase();
        renderComments();
        document.getElementById('nickInput').value = '';
        document.getElementById('commentInput').value = '';
    });

    // Отправка предложения
    document.getElementById('sendSuggestion')?.addEventListener('click', async function() {
        const nick = document.getElementById('suggestionNick')?.value.trim();
        const school = document.getElementById('suggestionSchool')?.value;
        const text = document.getElementById('suggestionText')?.value.trim();
        
        if (!nick || !school || !text) { alert('Заполни все поля!'); return; }
        
        const newSuggestion = {
            id: 'sugg_' + Date.now() + '_' + Math.random().toString(36).substring(2),
            nick, school, text, deviceId, timestamp: Date.now()
        };
        
        if (!Array.isArray(suggestions)) suggestions = [];
        suggestions.push(newSuggestion);
        
        await saveToFirebase();
        renderSuggestions();
        
        document.getElementById('suggestionNick').value = '';
        document.getElementById('suggestionSchool').value = '';
        document.getElementById('suggestionText').value = '';
        alert('✅ Предложение отправлено!');
    });

    // Лайки/дизлайки
    document.addEventListener('click', async function(e) {
        if (!e.target.classList.contains('like-btn') && !e.target.classList.contains('dislike-btn')) return;
        
        const btn = e.target;
        const type = btn.dataset.type;
        const action = btn.dataset.action;
        const parent = btn.closest(type === 'comment' ? '.comment-item' : '.suggestion-item');
        if (!parent) return;
        
        const id = type === 'comment' ? parent.dataset.commentId : parent.dataset.suggestionId;
        if (!id) return;
        
        const storage = type === 'comment' ? commentLikes : suggestionLikes;
        if (!storage[id]) storage[id] = { likes: [], dislikes: [] };
        
        const likes = storage[id];
        if (action === 'like') {
            if (likes.likes.includes(deviceId)) {
                likes.likes = likes.likes.filter(d => d !== deviceId);
            } else {
                likes.likes.push(deviceId);
                likes.dislikes = likes.dislikes.filter(d => d !== deviceId);
            }
        } else {
            if (likes.dislikes.includes(deviceId)) {
                likes.dislikes = likes.dislikes.filter(d => d !== deviceId);
            } else {
                likes.dislikes.push(deviceId);
                likes.likes = likes.likes.filter(d => d !== deviceId);
            }
        }
        
        await saveToFirebase();
        if (type === 'comment') renderComments(); else renderSuggestions();
    });

    // Голосования в опросах
    document.addEventListener('click', async function(e) {
        if (!e.target.classList.contains('poll-btn')) return;
        
        const btn = e.target;
        const pollItem = btn.closest('.poll-item');
        const pollId = pollItem?.dataset.pollId;
        const option = btn.dataset.option;
        const poll = polls.find(p => p.id == pollId);
        
        if (!poll) return;
        
        for (let opt in poll.votes) {
            if (poll.votes[opt]?.includes(deviceId)) {
                alert('Ты уже голосовал!'); return;
            }
        }
        
        if (!poll.votes[option]) poll.votes[option] = [];
        poll.votes[option].push(deviceId);
        await saveToFirebase();
        renderPolls();
    });

    // Переключение школы
    document.querySelectorAll('.school-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.school-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentSchool = this.dataset.school;
            selectedTeacher = null;
            filterSchool = "all";
            document.getElementById('saveVoteBtn').disabled = true;
            
            const filterDiv = document.getElementById('schoolFilter');
            const leadersBlock = document.getElementById('schoolLeadersBlock');
            
            if (currentSchool === 'raion') {
                if (filterDiv) filterDiv.style.display = 'flex';
                if (leadersBlock) leadersBlock.style.display = 'none';
                document.querySelectorAll('.filter-btn').forEach(f => {
                    f.classList.remove('active-filter');
                    if (f.dataset.filterSchool === 'all') f.classList.add('active-filter');
                });
            } else {
                if (filterDiv) filterDiv.style.display = 'none';
                if (leadersBlock) {
                    leadersBlock.style.display = 'block';
                    document.getElementById('leadersTitle').innerText = `ЛИДЕРЫ ШКОЛЫ ${currentSchool}`;
                    renderSchoolLeaders();
                }
            }
            renderTeacherWheel();
            renderComments();
        });
    });

    // Фильтр для района
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(f => f.classList.remove('active-filter'));
            this.classList.add('active-filter');
            filterSchool = this.dataset.filterSchool;
            selectedTeacher = null;
            document.getElementById('saveVoteBtn').disabled = true;
            renderTeacherWheel();
        });
    });

    // Переключение категории
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active-cat'));
            this.classList.add('active-cat');
            currentCategory = this.dataset.cat;
            selectedTeacher = null;
            document.getElementById('saveVoteBtn').disabled = true;
            document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
            renderTeacherWheel();
        });
    });

    // Таймер
    function updateTimer() {
        const now = new Date();
        const target = new Date();
        target.setDate(target.getDate() + ((1 + 7 - target.getDay()) % 7));
        target.setHours(9, 0, 0, 0);
        if (target < now) target.setDate(target.getDate() + 7);
        
        const diff = target - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) timerDisplay.innerText = `ОБНОВЛЕНИЕ ЧЕРЕЗ: ${days}д ${hours}ч ${minutes}м`;
    }

    // Запуск
    loadFromFirebase();
    subscribeToUpdates();
    renderTeacherWheel();
    updateTimer();
    setInterval(updateTimer, 60000);
});
