// ========== НАСТРОЙКИ FIREBASE ==========
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRgQ7y14HmmNEXXLqNMqjOLMUJzWCoHwc",
    authDomain: "sixsix-b1743.firebaseapp.com",
    projectId: "sixsix-b1743",
    storageBucket: "sixsix-b1743.firebasestorage.app",
    messagingSenderId: "773352016608",
    appId: "1:773352016608:web:a1f825b1751f8cfd085e85",
    measurementId: "G-FNG1JSVFGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// ========================================

(function() {
    // База данных учителей (полная версия)
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

    // Состояние приложения
    let currentSchool = "33";
    let currentCategory = "sexy";
    let selectedTeacher = null;
    let filterSchool = "all";
    
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

    // ===== ФУНКЦИИ FIREBASE =====
    async function loadFromFirebase() {
        try {
            // Загружаем голоса
            const votesRef = ref(db, 'votes');
            const votesSnap = await get(votesRef);
            if (votesSnap.exists()) votes = votesSnap.val();

            // Загружаем комментарии
            const commentsRef = ref(db, 'comments');
            const commentsSnap = await get(commentsRef);
            if (commentsSnap.exists()) comments = commentsSnap.val();

            // Загружаем лайки
            const likesRef = ref(db, 'commentLikes');
            const likesSnap = await get(likesRef);
            if (likesSnap.exists()) commentLikes = likesSnap.val();

            console.log('✅ Загружено из Firebase');
            updateAllDisplays();
        } catch (error) {
            console.error('❌ Ошибка загрузки:', error);
        }
    }

    async function saveToFirebase() {
        try {
            await set(ref(db, 'votes'), votes);
            await set(ref(db, 'comments'), comments);
            await set(ref(db, 'commentLikes'), commentLikes);
            console.log('✅ Сохранено в Firebase');
        } catch (error) {
            console.error('❌ Ошибка сохранения:', error);
        }
    }

    // Подписка на изменения
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
    }

    // ===== ФУНКЦИИ ИНТЕРФЕЙСА =====
    function updateAllDisplays() {
        updateActivityPodium();
        updateWinnersDistrict();
        renderSchoolLeaders();
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
                const saveBtn = document.getElementById('saveVoteBtn');
                if (saveBtn) saveBtn.disabled = false;
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
                            scores[school] += votes[school][cat][teacher].length;
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
            html += `<div class="podium-place place-1"><div class="place-bar"><div class="school-name-podium">Школа ${sorted[0].school}</div><div class="school-score">${sorted[0].score}</div></div></div>`;
        }
        if (sorted[1]) {
            html += `<div class="podium-place place-2"><div class="place-bar"><div class="school-name-podium">Школа ${sorted[1].school}</div><div class="school-score">${sorted[1].score}</div></div></div>`;
        }
        if (sorted[2]) {
            html += `<div class="podium-place place-3"><div class="place-bar"><div class="school-name-podium">Школа ${sorted[2].school}</div><div class="school-score">${sorted[2].score}</div></div></div>`;
        }
        podium.innerHTML = html;
    }

    function getDistrictWinners() {
        const categories = ['sexy', 'good', 'mraz', 'fun', 'chill'];
        const winners = {};
        const raionVotes = votes['raion'] || {};

        categories.forEach(cat => {
            let maxCount = 0;
            let winnerName = 'нет голосов';
            if (raionVotes[cat]) {
                for (let teacher in raionVotes[cat]) {
                    const cnt = raionVotes[cat][teacher].length;
                    if (cnt > maxCount) {
                        maxCount = cnt;
                        winnerName = teacher;
                    }
                }
            }
            winners[cat] = { name: winnerName, votes: maxCount };
        });
        return winners;
    }

    function updateWinnersDistrict() {
        const grid = document.getElementById('winnersGrid');
        if (!grid) return;
        
        const winners = getDistrictWinners();
        const catLabels = ['Секси', 'Добрая', 'Мразота', 'Угарная', 'Чиловый мужик'];
        const icons = ['💋', '😇', '👿', '🔥', '😎'];
        
        let html = '';
        Object.keys(winners).forEach((cat, idx) => {
            html += `
                <div class="winner-card">
                    <div class="winner-icon">${icons[idx]}</div>
                    <div class="winner-category">${catLabels[idx]}</div>
                    <div class="winner-name">${winners[cat].name}</div>
                    <div style="font-size: 14px; color: #ffa5a5;">${winners[cat].votes} голосов</div>
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
                    const cnt = schoolVotes[cat][teacher].length;
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
                    <div style="color:#b77; font-size:14px; text-align:center;">голосов: ${maxCount}</div>
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
            
            const userLike = likes.likes.includes(deviceId) ? 'active-like' : '';
            const userDislike = likes.dislikes.includes(deviceId) ? 'active-dislike' : '';
            
            html += `
                <div class="comment-item" data-comment-id="${commentId}">
                    <span class="comment-nick">${c.nick || 'Аноним'}:</span>
                    <span class="comment-text">${c.text}</span>
                    <div class="comment-likes">
                        <button class="like-btn ${userLike}" data-action="like">👍</button>
                        <span class="like-count">${likes.likes.length}</span>
                        <button class="dislike-btn ${userDislike}" data-action="dislike">👎</button>
                        <span class="dislike-count">${likes.dislikes.length}</span>
                    </div>
                </div>
            `;
        });
        
        if (!html) html = '<div class="comment-item">тишина... напиши что-нибудь</div>';
        list.innerHTML = html;
        
        // Обработчики лайков
        document.querySelectorAll('.like-btn, .dislike-btn').forEach(btn => {
            btn.addEventListener('click', async function(e) {
                e.stopPropagation();
                const commentItem = this.closest('.comment-item');
                const commentId = commentItem.dataset.commentId;
                const action = this.dataset.action;
                
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
            });
        });
    }

    // ===== ОБРАБОТЧИКИ СОБЫТИЙ =====
    document.addEventListener('DOMContentLoaded', function() {
        // Голосование
        const saveBtn = document.getElementById('saveVoteBtn');
        if (saveBtn) {
            saveBtn.addEventListener('click', async function() {
                if (!selectedTeacher) return;
                
                // Проверка, голосовал ли уже
                if (votes[currentSchool]?.[currentCategory]?.[selectedTeacher]?.includes(deviceId)) {
                    alert('Ты уже голосовал в этой категории!');
                    return;
                }

                // Сохраняем голос
                if (!votes[currentSchool]) votes[currentSchool] = {};
                if (!votes[currentSchool][currentCategory]) votes[currentSchool][currentCategory] = {};
                if (!votes[currentSchool][currentCategory][selectedTeacher]) votes[currentSchool][currentCategory][selectedTeacher] = [];
                
                votes[currentSchool][currentCategory][selectedTeacher].push(deviceId);
                
                await saveToFirebase();
                alert(`✅ Голос за ${selectedTeacher} учтён!`);
                
                saveBtn.disabled = true;
                selectedTeacher = null;
                document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
            });
        }

        // Отправка комментария
        const sendCommentBtn = document.getElementById('sendComment');
        if (sendCommentBtn) {
            sendCommentBtn.addEventListener('click', async function() {
                const nickInput = document.getElementById('nickInput');
                const textInput = document.getElementById('commentInput');
                const nick = nickInput.value.trim();
                const text = textInput.value.trim();
                
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
                
                nickInput.value = '';
                textInput.value = '';
            });
        }

        // Переключение школы
        document.querySelectorAll('.school-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.school-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                
                const school = this.dataset.school;
                currentSchool = school;
                selectedTeacher = null;
                filterSchool = "all";
                
                const saveBtn = document.getElementById('saveVoteBtn');
                if (saveBtn) saveBtn.disabled = true;
                
                // Показать/скрыть фильтр
                const filterDiv = document.getElementById('schoolFilter');
                const leadersBlock = document.getElementById('schoolLeadersBlock');
                
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
                        document.getElementById('leadersTitle').innerText = `ЛИДЕРЫ ШКОЛЫ ${school}`;
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
                
                const saveBtn = document.getElementById('saveVoteBtn');
                if (saveBtn) saveBtn.disabled = true;
                
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
                
                const saveBtn = document.getElementById('saveVoteBtn');
                if (saveBtn) saveBtn.disabled = true;
                
                document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
                renderTeacherWheel();
            });
        });

        // Навигация
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', function() {
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active-nav'));
                this.classList.add('active-nav');
                
                const nav = this.dataset.nav;
                const suggestionsSection = document.getElementById('suggestionsSection');
                
                if (nav === 'suggestions') {
                    if (suggestionsSection) suggestionsSection.style.display = 'block';
                } else {
                    if (suggestionsSection) suggestionsSection.style.display = 'none';
                }
            });
        });
    });

    // Таймер до следующего обновления (9:00)
    function updateTimer() {
        const now = new Date();
        const target = new Date();
        
        target.setHours(9, 0, 0, 0);
        
        if (target <= now) {
            target.setDate(target.getDate() + 1);
        }
        
        const diff = target - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) {
            timerDisplay.innerText = `ОБНОВЛЕНИЕ ЧЕРЕЗ: ${hours}ч ${minutes}м`;
        }
    }

    // Инициализация
    async function init() {
        await loadFromFirebase();
        subscribeToUpdates();
        
        renderTeacherWheel();
        renderComments();
        updateAllDisplays();
        
        updateTimer();
        setInterval(updateTimer, 60000);
        
        // Скрываем секцию предложений
        const suggestionsSection = document.getElementById('suggestionsSection');
        if (suggestionsSection) suggestionsSection.style.display = 'none';
    }

    init();
})();
