// ========== НАСТРОЙКИ FIREBASE ==========
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue, update } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

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

// ===== НАСТРОЙКИ TELEGRAM =====
const TELEGRAM_TOKEN = '7710917089:AAFmTgJjmWxeQ2eBLiEL8KCifZ994jOUNGA';
const TELEGRAM_CHAT_ID = '1269630089';        // Твой личный ID
const TELEGRAM_GROUP_ID = '-5209718076';      // ID группы (для всех админов)
// ===============================

console.log('🔥 Firebase версия загружена');

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
let currentNav = "ratings"; // Теперь ratings по умолчанию

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

// ===== ФУНКЦИЯ ОТПРАВКИ В TELEGRAM =====
async function sendToTelegram(suggestion) {
    const message = `📝 *Новое предложение!*\n\n` +
                   `👤 *Ник:* ${suggestion.nick}\n` +
                   `🏫 *Школа:* ${suggestion.school}\n` +
                   `💬 *Текст:* ${suggestion.text}\n` +
                   `🕐 *Время:* ${new Date().toLocaleString()}`;
    
    try {
        // Отправляем тебе в личку
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        // Отправляем в группу (для всех админов)
        await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM_GROUP_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        });
        
        console.log('✅ Отправлено в Telegram (личка и группа)');
        return true;
    } catch (error) {
        console.error('❌ Ошибка отправки:', error);
        return false;
    }
}

// ===== ФУНКЦИИ FIREBASE =====
async function loadFromFirebase() {
    try {
        const votesRef = ref(db, 'votes');
        const votesSnap = await get(votesRef);
        if (votesSnap.exists()) {
            votes = votesSnap.val();
        }

        const commentsRef = ref(db, 'comments');
        const commentsSnap = await get(commentsRef);
        if (commentsSnap.exists()) {
            comments = commentsSnap.val();
        }

        const commentLikesRef = ref(db, 'commentLikes');
        const commentLikesSnap = await get(commentLikesRef);
        if (commentLikesSnap.exists()) {
            commentLikes = commentLikesSnap.val();
        }

        console.log('✅ Все данные загружены');
        updateAllDisplays();
    } catch (error) {
        console.error('❌ Ошибка загрузки из Firebase:', error);
    }
}

async function saveToFirebase() {
    try {
        await set(ref(db, 'votes'), votes);
        await set(ref(db, 'comments'), comments);
        await set(ref(db, 'commentLikes'), commentLikes);
        console.log('✅ Все данные сохранены в Firebase');
    } catch (error) {
        console.error('❌ Ошибка сохранения в Firebase:', error);
    }
}

function subscribeToUpdates() {
    const votesRef = ref(db, 'votes');
    onValue(votesRef, (snapshot) => {
        if (snapshot.exists()) {
            votes = snapshot.val();
            updateAllDisplays();
        }
    });

    const commentsRef = ref(db, 'comments');
    onValue(commentsRef, (snapshot) => {
        if (snapshot.exists()) {
            comments = snapshot.val();
            renderComments();
        }
    });

    const commentLikesRef = ref(db, 'commentLikes');
    onValue(commentLikesRef, (snapshot) => {
        if (snapshot.exists()) {
            commentLikes = snapshot.val();
            renderComments();
        }
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
        if (filterSchool === 'all') {
            teachers = [...teachersDB["33"], ...teachersDB["13"], ...teachersDB["29"]];
        } else {
            teachers = teachersDB[filterSchool] || [];
        }
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
        const selectedClass = (selectedTeacher === teacher) ? 'selected-teacher' : '';
        html += `<div class="teacher-option ${selectedClass}" data-teacher="${teacher}">${teacher}</div>`;
    });
    
    if (teachersList.length === 0) {
        html = '<div class="teacher-option">Нет учителей в этой категории</div>';
    }
    
    wheel.innerHTML = html;

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
                        if (votes[school][cat][teacher] && Array.isArray(votes[school][cat][teacher])) {
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
    const sorted = Object.entries(scores)
        .map(([school, score]) => ({ school, score }))
        .sort((a, b) => b.score - a.score);
    
    let html = '';
    if (sorted[0]) {
        html += `
            <div class="podium-place place-1">
                <div class="place-number">👑 1 МЕСТО</div>
                <div class="place-bar">
                    <div class="school-name-podium">Школа ${sorted[0].school}</div>
                    <div class="school-score">${sorted[0].score}</div>
                    <div class="podium-stats">🔥 лидер голосования</div>
                </div>
            </div>
        `;
    }
    if (sorted[1]) {
        html += `
            <div class="podium-place place-2">
                <div class="place-number">🥈 2 МЕСТО</div>
                <div class="place-bar">
                    <div class="school-name-podium">Школа ${sorted[1].school}</div>
                    <div class="school-score">${sorted[1].score}</div>
                    <div class="podium-stats">⭐ до первого: ${sorted[0] ? sorted[0].score - sorted[1].score : 0}</div>
                </div>
            </div>
        `;
    }
    if (sorted[2]) {
        html += `
            <div class="podium-place place-3">
                <div class="place-number">🥉 3 МЕСТО</div>
                <div class="place-bar">
                    <div class="school-name-podium">Школа ${sorted[2].school}</div>
                    <div class="school-score">${sorted[2].score}</div>
                    <div class="podium-stats">📈 +${sorted[2].score} голосов</div>
                </div>
            </div>
        `;
    }
    podium.innerHTML = html;
}

function getSchoolFromTeacher(teacher) {
    for (let school of ["33", "13", "29"]) {
        if (teachersDB[school].includes(teacher)) {
            return school;
        }
    }
    return "неизвестно";
}

// ===== ИСПРАВЛЕННАЯ ФУНКЦИЯ - собирает голоса со всех школ =====
function getDistrictWinners() {
    const categories = ['sexy', 'good', 'mraz', 'fun', 'chill'];
    const winners = {};
    
    // Объединяем голоса из всех школ и района
    const allVotes = {
        "33": votes["33"] || {},
        "13": votes["13"] || {},
        "29": votes["29"] || {},
        "raion": votes["raion"] || {}
    };
    
    categories.forEach(cat => {
        // Создаем объект для подсчета голосов по каждому учителю
        const teacherVotes = {};
        
        // Собираем голоса из всех школ
        for (let school of ["33", "13", "29", "raion"]) {
            const schoolVotes = allVotes[school];
            if (schoolVotes && schoolVotes[cat]) {
                for (let teacher in schoolVotes[cat]) {
                    // Добавляем голоса к общему счету учителя
                    if (!teacherVotes[teacher]) {
                        teacherVotes[teacher] = 0;
                    }
                    // Учитываем все голоса (массив или число)
                    if (Array.isArray(schoolVotes[cat][teacher])) {
                        teacherVotes[teacher] += schoolVotes[cat][teacher].length;
                    } else {
                        teacherVotes[teacher] += schoolVotes[cat][teacher] || 0;
                    }
                }
            }
        }
        
        // Находим победителя с максимальным количеством голосов
        let maxCount = 0;
        let winnerName = 'нет голосов';
        
        for (let teacher in teacherVotes) {
            if (teacherVotes[teacher] > maxCount) {
                maxCount = teacherVotes[teacher];
                winnerName = teacher;
            }
        }
        
        // Определяем школу победителя
        const school = winnerName !== 'нет голосов' ? getSchoolFromTeacher(winnerName) : '';
        winners[cat] = { name: winnerName, votes: maxCount, school: school };
    });
    
    return winners;
}

function renderWinnersDistrict() {
    const grid = document.getElementById('winnersGrid');
    if (!grid) return;
    
    const winners = getDistrictWinners();
    const catLabels = ['Секси', 'Добрая', 'Мразота', 'Угарная', 'Чиловый мужик'];
    const icons = ['💋', '😇', '👿', '🔥', '😎'];
    
    let html = '';
    Object.keys(winners).forEach((cat, idx) => {
        const schoolText = winners[cat].school ? `(школа ${winners[cat].school})` : '';
        html += `
            <div class="winner-card">
                <div class="winner-icon">${icons[idx]}</div>
                <div class="winner-category">${catLabels[idx]}</div>
                <div class="winner-name">${winners[cat].name}</div>
                <div class="winner-school">${schoolText}</div>
                <div class="winner-votes">🔥 ${winners[cat].votes} голосов 🔥</div>
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
        let maxCount = 0;
        let topTeacher = 'нет голосов';
        if (schoolVotes[cat]) {
            for (let teacher in schoolVotes[cat]) {
                const cnt = schoolVotes[cat][teacher] ? schoolVotes[cat][teacher].length : 0;
                if (cnt > maxCount) {
                    maxCount = cnt;
                    topTeacher = teacher;
                }
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
    schoolComments.slice().reverse().forEach((c, index) => {
        const commentId = `${currentSchool}_${index}_${c.timestamp}`;
        const likes = commentLikes[commentId] || { likes: [], dislikes: [] };
        
        const userLike = likes.likes && likes.likes.includes(deviceId) ? 'active-like' : '';
        const userDislike = likes.dislikes && likes.dislikes.includes(deviceId) ? 'active-dislike' : '';
        
        html += `
            <div class="comment-item" data-comment-id="${commentId}">
                <span class="comment-nick">${c.nick || 'Аноним'}:</span>
                <span class="comment-text">${c.text || ''}</span>
                <div class="comment-likes">
                    <button class="like-btn ${userLike}" data-type="comment" data-action="like">👍</button>
                    <span class="like-count">${likes.likes ? likes.likes.length : 0}</span>
                    <button class="dislike-btn ${userDislike}" data-type="comment" data-action="dislike">👎</button>
                    <span class="dislike-count">${likes.dislikes ? likes.dislikes.length : 0}</span>
                </div>
            </div>
        `;
    });
    
    if (!html) html = '<div class="comment-item">💬 Напиши первый комментарий!</div>';
    list.innerHTML = html;
}

// ===== ОБРАБОТЧИКИ СОБЫТИЙ =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Страница загружена');
    
    // Навигация по меню
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active-nav'));
            this.classList.add('active-nav');
            
            const nav = this.dataset.nav;
            currentNav = nav;
            
            // Получаем все секции
            const ratingsSection = document.getElementById('ratingsSection');
            const votingSection = document.getElementById('votingSection');
            const suggestionsSection = document.getElementById('suggestionsSection');
            const aboutSection = document.getElementById('aboutSection');
            
            // Скрываем всё
            if (ratingsSection) ratingsSection.style.display = 'none';
            if (votingSection) votingSection.style.display = 'none';
            if (suggestionsSection) suggestionsSection.style.display = 'none';
            if (aboutSection) aboutSection.style.display = 'none';
            
            // Показываем нужное
            if (nav === 'ratings') {
                if (ratingsSection) ratingsSection.style.display = 'block';
            } else if (nav === 'voting') {
                if (votingSection) votingSection.style.display = 'block';
                // Обновляем данные для голосования
                renderTeacherWheel();
                renderComments();
                renderSchoolLeaders();
            } else if (nav === 'suggestions') {
                if (suggestionsSection) suggestionsSection.style.display = 'block';
            } else if (nav === 'about') {
                if (aboutSection) aboutSection.style.display = 'block';
            }
        });
    });

    // Голосование за учителей
    document.getElementById('saveVoteBtn')?.addEventListener('click', async function() {
        if (!selectedTeacher) {
            alert('Выбери учителя!');
            return;
        }
        
        if (votes[currentSchool]?.[currentCategory]?.[selectedTeacher]?.includes(deviceId)) {
            alert('Ты уже голосовал в этой категории!');
            return;
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
        const nickInput = document.getElementById('nickInput');
        const textInput = document.getElementById('commentInput');
        const nick = nickInput?.value.trim();
        const text = textInput?.value.trim();
        
        if (!nick || !text) {
            alert('Введите ник и комментарий!');
            return;
        }
        
        if (!comments[currentSchool]) comments[currentSchool] = [];
        
        comments[currentSchool].push({
            nick: nick,
            text: text,
            deviceId: deviceId,
            timestamp: Date.now()
        });
        
        await saveToFirebase();
        renderComments();
        
        if (nickInput) nickInput.value = '';
        if (textInput) textInput.value = '';
    });

    // Отправка предложения в Telegram
    document.getElementById('sendSuggestion')?.addEventListener('click', async function() {
        console.log('🔥 Кнопка отправки предложения нажата');
        
        const nickInput = document.getElementById('suggestionNick');
        const schoolSelect = document.getElementById('suggestionSchool');
        const textInput = document.getElementById('suggestionText');
        
        const nick = nickInput?.value?.trim();
        const school = schoolSelect?.value;
        const text = textInput?.value?.trim();
        
        console.log('Данные формы:', { nick, school, text });
        
        if (!nick || !school || !text) {
            alert('❌ Заполни все поля!');
            return;
        }
        
        // Создаём предложение
        const newSuggestion = {
            nick: nick,
            school: school,
            text: text
        };
        
        // Отправляем в Telegram
        const sent = await sendToTelegram(newSuggestion);
        
        if (sent) {
            alert('✅ Предложение отправлено в Telegram!');
            
            // Очищаем поля
            if (nickInput) nickInput.value = '';
            if (schoolSelect) schoolSelect.value = '';
            if (textInput) textInput.value = '';
        } else {
            alert('❌ Ошибка при отправке. Попробуй ещё раз.');
        }
    });

    // Обработчики лайков
    document.addEventListener('click', async function(e) {
        if (e.target.classList.contains('like-btn') || e.target.classList.contains('dislike-btn')) {
            const btn = e.target;
            const commentItem = btn.closest('.comment-item');
            const commentId = commentItem?.dataset.commentId;
            const action = btn.dataset.action;
            
            if (!commentId) return;
            
            if (!commentLikes[commentId]) {
                commentLikes[commentId] = { likes: [], dislikes: [] };
            }
            
            const likes = commentLikes[commentId];
            
            if (action === 'like') {
                if (likes.likes.includes(deviceId)) {
                    likes.likes = likes.likes.filter(id => id !== deviceId);
                } else {
                    likes.likes.push(deviceId);
                    likes.dislikes = likes.dislikes.filter(id => id !== deviceId);
                }
            } else {
                if (likes.dislikes.includes(deviceId)) {
                    likes.dislikes = likes.dislikes.filter(id => id !== deviceId);
                } else {
                    likes.dislikes.push(deviceId);
                    likes.likes = likes.likes.filter(id => id !== deviceId);
                }
            }
            
            await saveToFirebase();
            renderComments();
        }
    });

    // Переключение школы
    document.querySelectorAll('.school-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.school-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const school = this.dataset.school;
            currentSchool = school;
            selectedTeacher = null;
            filterSchool = "all";
            
            document.getElementById('saveVoteBtn').disabled = true;
            
            const filterDiv = document.getElementById('schoolFilter');
            const leadersBlock = document.getElementById('schoolLeadersBlock');
            const leadersTitle = document.getElementById('leadersTitle');
            
            if (school === 'raion') {
                if (filterDiv) filterDiv.style.display = 'flex';
                if (leadersBlock) leadersBlock.style.display = 'none';
                
                document.querySelectorAll('.filter-btn').forEach(f => {
                    f.classList.remove('active-filter');
                    if (f.dataset.filterSchool === 'all') {
                        f.classList.add('active-filter');
                    }
                });
            } else {
                if (filterDiv) filterDiv.style.display = 'none';
                if (leadersBlock) {
                    leadersBlock.style.display = 'block';
                    if (leadersTitle) leadersTitle.innerText = `ЛИДЕРЫ ШКОЛЫ ${school}`;
                }
                renderSchoolLeaders();
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

    // Таймер до понедельника 9:00
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
        if (timerDisplay) {
            timerDisplay.innerText = `ОБНОВЛЕНИЕ ЧЕРЕЗ: ${days}д ${hours}ч ${minutes}м`;
        }
    }

    // Инициализация
    loadFromFirebase();
    subscribeToUpdates();
    renderTeacherWheel();
    updateTimer();
    setInterval(updateTimer, 60000);
});
