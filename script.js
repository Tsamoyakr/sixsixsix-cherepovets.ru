// ========== НАСТРОЙКИ JSONBIN.IO ==========
const JSONBIN_API_KEY = '$2a$10$OLVwLt5ONbFpOgZUbv6fkehFBawNpJaUs3DSacLpWgVNZ6W5j.x7m';
const JSONBIN_BIN_ID = '69a341ffd0ea881f40e2a19a';
// =========================================

(function() {
    // База данных учителей
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
    let currentNav = "main";
    
    // ID устройства
    let deviceId = localStorage.getItem('deviceId');
    if (!deviceId) {
        deviceId = 'device_' + Math.random().toString(36).substring(2) + Date.now().toString(36);
        localStorage.setItem('deviceId', deviceId);
    }

    // Данные, которые будут загружаться с сервера
    let votes = { "33": {}, "13": {}, "29": {}, "raion": {} };
    let comments = { "33": [], "13": [], "29": [], "raion": [] };
    let commentLikes = {};
    let suggestions = [];
    let polls = [
        {
            id: 1,
            question: "Устроить батл школ?",
            options: ["Да", "Нет", "Воздержусь"],
            votes: { "Да": [], "Нет": [], "Воздержусь": [] }
        },
        {
            id: 2,
            question: "Добавить номинацию Самая стрёмная?",
            options: ["Да", "Нет"],
            votes: { "Да": [], "Нет": [] }
        },
        {
            id: 3,
            question: "Сделать еженедельные битвы?",
            options: ["За", "Против", "Мне всё равно"],
            votes: { "За": [], "Против": [], "Мне всё равно": [] }
        }
    ];

    // ========== ФУНКЦИИ ДЛЯ РАБОТЫ С JSONBIN.IO ==========

    // Загрузка данных с сервера
    async function loadFromServer() {
        try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}/latest`, {
                headers: {
                    'X-Master-Key': JSONBIN_API_KEY
                }
            });
            
            if (!response.ok) {
                throw new Error('Ошибка загрузки');
            }
            
            const data = await response.json();
            
            // Обновляем все данные
            if (data.record.votes) votes = data.record.votes;
            if (data.record.comments) comments = data.record.comments;
            if (data.record.commentLikes) commentLikes = data.record.commentLikes;
            if (data.record.suggestions) suggestions = data.record.suggestions;
            if (data.record.polls) polls = data.record.polls;
            
            console.log('Данные загружены с сервера');
            updateAllDisplays();
        } catch (error) {
            console.error('Ошибка загрузки с сервера:', error);
            // Загружаем из localStorage как запасной вариант
            loadFromLocalStorage();
        }
    }

    // Сохранение данных на сервер
    async function saveToServer() {
        try {
            const dataToSave = {
                votes: votes,
                comments: comments,
                commentLikes: commentLikes,
                suggestions: suggestions,
                polls: polls,
                lastUpdate: Date.now()
            };
            
            const response = await fetch(`https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': JSONBIN_API_KEY
                },
                body: JSON.stringify(dataToSave)
            });
            
            if (!response.ok) {
                throw new Error('Ошибка сохранения');
            }
            
            console.log('Данные сохранены на сервер');
            
            // Сохраняем локально как резервную копию
            saveToLocalStorage();
        } catch (error) {
            console.error('Ошибка сохранения на сервер:', error);
            // Сохраняем только локально
            saveToLocalStorage();
        }
    }

    // Резервное копирование в localStorage
    function saveToLocalStorage() {
        localStorage.setItem('votesStorage', JSON.stringify(votes));
        localStorage.setItem('commentsStorage', JSON.stringify(comments));
        localStorage.setItem('commentLikes', JSON.stringify(commentLikes));
        localStorage.setItem('suggestions', JSON.stringify(suggestions));
        localStorage.setItem('polls', JSON.stringify(polls));
    }

    function loadFromLocalStorage() {
        votes = JSON.parse(localStorage.getItem('votesStorage')) || { "33": {}, "13": {}, "29": {}, "raion": {} };
        comments = JSON.parse(localStorage.getItem('commentsStorage')) || { "33": [], "13": [], "29": [], "raion": [] };
        commentLikes = JSON.parse(localStorage.getItem('commentLikes')) || {};
        suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
        polls = JSON.parse(localStorage.getItem('polls')) || polls;
        
        updateAllDisplays();
    }

    // Обновление всех дисплеев
    function updateAllDisplays() {
        updateActivityPodium();
        updateWinnersDistrict();
        renderSchoolLeaders();
        renderComments();
        if (currentNav === 'suggestions') {
            renderSuggestions();
            renderPolls();
        }
    }

    // Переопределяем функции сохранения
    function saveVotes() {
        saveToServer(); // Теперь сохраняет на сервер
    }
    
    function saveComments() {
        saveToServer();
    }
    
    function saveCommentLikes() {
        saveToServer();
    }
    
    function saveSuggestions() {
        saveToServer();
    }
    
    function savePolls() {
        saveToServer();
    }

    // ========== ОСТАЛЬНОЙ КОД ==========
    // Фильтр учителей для рулетки
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
        
        // Для категории "чиловый мужик" оставляем только мужчин
        if (currentCategory === 'chill') {
            teachers = teachers.filter(t => maleTeachers.includes(t));
        }
        
        return teachers;
    }

    // Рендер рулетки
    function renderTeacherWheel() {
        const wheel = document.getElementById('teacherWheel');
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
                if (this.getAttribute('data-teacher')) {
                    document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
                    this.classList.add('selected-teacher');
                    selectedTeacher = this.getAttribute('data-teacher');
                    document.getElementById('saveVoteBtn').disabled = false;
                }
            });
        });
    }

    // Проверка возможности голосования
    function canVote(teacher) {
        if (!teacher) return false;
        
        const school = currentSchool;
        const cat = currentCategory;
        
        if (!votes[school]) votes[school] = {};
        if (!votes[school][cat]) votes[school][cat] = {};

        const votersInCat = votes[school][cat];
        for (let t in votersInCat) {
            if (Array.isArray(votersInCat[t]) && votersInCat[t].includes(deviceId)) {
                return false;
            }
        }
        return true;
    }

    // Подсчет голосов для рейтинга школ
    function calculateSchoolScores() {
        const scores = { "33": 0, "13": 0, "29": 0 };
        const categories = ['sexy', 'good', 'mraz', 'fun', 'chill'];
        
        for (let school of ["33", "13", "29"]) {
            if (votes[school]) {
                for (let cat of categories) {
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

    // Обновление пьедестала активности школ
    function updateActivityPodium() {
        const scores = calculateSchoolScores();
        const podium = document.getElementById('activityPodium');
        
        // Сортируем школы по голосам
        const sorted = Object.entries(scores)
            .map(([school, score]) => ({ school, score }))
            .sort((a, b) => b.score - a.score);
        
        let html = '';
        
        // Первое место (центр)
        if (sorted[0]) {
            html += `
                <div class="podium-place place-1">
                    <div class="place-number">👑 1 МЕСТО</div>
                    <div class="place-bar">
                        <div class="school-name-podium">Школа ${sorted[0].school}</div>
                        <div class="school-score">${sorted[0].score}</div>
                    </div>
                </div>
            `;
        }
        
        // Второе место (слева)
        if (sorted[1]) {
            html += `
                <div class="podium-place place-2">
                    <div class="place-number">🥈 2 МЕСТО</div>
                    <div class="place-bar">
                        <div class="school-name-podium">Школа ${sorted[1].school}</div>
                        <div class="school-score">${sorted[1].score}</div>
                    </div>
                </div>
            `;
        }
        
        // Третье место (справа)
        if (sorted[2]) {
            html += `
                <div class="podium-place place-3">
                    <div class="place-number">🥉 3 МЕСТО</div>
                    <div class="place-bar">
                        <div class="school-name-podium">Школа ${sorted[2].school}</div>
                        <div class="school-score">${sorted[2].score}</div>
                    </div>
                </div>
            `;
        }
        
        podium.innerHTML = html;
    }

    // Получение победителей района
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

    // Обновление победителей района
    function updateWinnersDistrict() {
        const winners = getDistrictWinners();
        const grid = document.getElementById('winnersGrid');
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

    // Рендер лидеров школы
    function renderSchoolLeaders() {
        if (currentSchool === 'raion') return;
        
        const grid = document.getElementById('leadersGrid');
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

    // Голосование
    document.getElementById('saveVoteBtn').addEventListener('click', function() {
        if (!selectedTeacher) return;
        
        if (!canVote(selectedTeacher)) {
            alert('Ты уже голосовал в этой категории!');
            return;
        }

        const school = currentSchool;
        const cat = currentCategory;
        
        if (!votes[school]) votes[school] = {};
        if (!votes[school][cat]) votes[school][cat] = {};
        if (!votes[school][cat][selectedTeacher]) votes[school][cat][selectedTeacher] = [];
        
        votes[school][cat][selectedTeacher].push(deviceId);
        saveVotes();
        
        alert(`Голос за ${selectedTeacher} учтён!`);
        document.getElementById('saveVoteBtn').disabled = true;
        
        // Сброс выбора
        selectedTeacher = null;
        document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
    });

    // Переключение школы
    document.querySelectorAll('.school-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.school-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const school = this.getAttribute('data-school');
            currentSchool = school;
            selectedTeacher = null;
            filterSchool = "all";
            
            document.getElementById('saveVoteBtn').disabled = true;
            
            // Показать/скрыть фильтр
            const filterDiv = document.getElementById('schoolFilter');
            if (school === 'raion') {
                filterDiv.style.display = 'flex';
                document.querySelectorAll('.filter-btn').forEach(f => {
                    f.classList.remove('active-filter');
                    if (f.getAttribute('data-filter-school') === 'all') {
                        f.classList.add('active-filter');
                    }
                });
                document.getElementById('schoolLeadersBlock').style.display = 'none';
            } else {
                filterDiv.style.display = 'none';
                document.getElementById('schoolLeadersBlock').style.display = 'block';
                document.getElementById('leadersTitle').innerText = `ЛИДЕРЫ ШКОЛЫ ${school}`;
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
            filterSchool = this.getAttribute('data-filter-school');
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
            currentCategory = this.getAttribute('data-cat');
            selectedTeacher = null;
            document.getElementById('saveVoteBtn').disabled = true;
            document.querySelectorAll('.teacher-option').forEach(opt => opt.classList.remove('selected-teacher'));
            renderTeacherWheel();
        });
    });

    // Комментарии с лайками
    function renderComments() {
        const list = document.getElementById('commentList');
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
        
        // Добавляем обработчики лайков
        document.querySelectorAll('.like-btn, .dislike-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const commentItem = this.closest('.comment-item');
                const commentId = commentItem.getAttribute('data-comment-id');
                const action = this.getAttribute('data-action');
                
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
                
                saveCommentLikes();
                renderComments();
            });
        });
    }

    // Отправка комментария
    document.getElementById('sendComment').addEventListener('click', function() {
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
        
        saveComments();
        renderComments();
        
        nickInput.value = '';
        textInput.value = '';
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
        
        document.getElementById('timerDisplay').innerText = 
            `ОБНОВЛЕНИЕ ЧЕРЕЗ: ${hours}ч ${minutes}м`;
    }

    // Навигация по меню
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active-nav'));
            this.classList.add('active-nav');
            
            const nav = this.getAttribute('data-nav');
            currentNav = nav;
            
            // Показываем/скрываем секции
            const suggestionsSection = document.getElementById('suggestionsSection');
            const winnersSection = document.querySelector('.winners-section');
            const infoBox = document.querySelector('.info-box');
            const selectionPanel = document.querySelector('.selection-panel');
            const rouletteContainer = document.querySelector('.roulette-container');
            const schoolLeaders = document.querySelector('.school-leaders');
            const bottomPanel = document.querySelector('.bottom-panel');
            
            if (nav === 'suggestions') {
                suggestionsSection.style.display = 'block';
                winnersSection.style.display = 'none';
                infoBox.style.display = 'none';
                selectionPanel.style.display = 'none';
                rouletteContainer.style.display = 'none';
                schoolLeaders.style.display = 'none';
                bottomPanel.style.display = 'none';
                renderSuggestions();
                renderPolls();
            } else {
                suggestionsSection.style.display = 'none';
                winnersSection.style.display = 'block';
                infoBox.style.display = 'block';
                selectionPanel.style.display = 'flex';
                rouletteContainer.style.display = 'block';
                bottomPanel.style.display = 'flex';
                
                if (currentSchool !== 'raion') {
                    schoolLeaders.style.display = 'block';
                }
            }
        });
    });

    // Рендер голосований
    function renderPolls() {
        const pollsGrid = document.getElementById('pollsGrid');
        
        let html = '';
        polls.forEach(poll => {
            html += `
                <div class="poll-item" data-poll-id="${poll.id}">
                    <div class="poll-question">${poll.question}</div>
                    <div class="poll-options">
                        ${poll.options.map(opt => {
                            const hasVoted = poll.votes[opt] && poll.votes[opt].includes(deviceId);
                            return `
                                <button class="poll-btn ${hasVoted ? 'active-poll' : ''}" data-option="${opt}">
                                    ${opt} (${poll.votes[opt] ? poll.votes[opt].length : 0})
                                </button>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;
        });
        
        pollsGrid.innerHTML = html;
        
        // Обработчики голосований
        document.querySelectorAll('.poll-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const pollItem = this.closest('.poll-item');
                const pollId = pollItem.getAttribute('data-poll-id');
                const option = this.getAttribute('data-option');
                const poll = polls.find(p => p.id == pollId);
                
                if (!poll) return;
                
                // Проверяем, голосовал ли уже
                for (let opt in poll.votes) {
                    if (poll.votes[opt].includes(deviceId)) {
                        alert('Ты уже голосовал в этом опросе!');
                        return;
                    }
                }
                
                if (!poll.votes[option]) {
                    poll.votes[option] = [];
                }
                
                poll.votes[option].push(deviceId);
                savePolls();
                renderPolls();
            });
        });
    }

    // Рендер предложений
    function renderSuggestions() {
        const container = document.getElementById('suggestionsContainer');
        
        // Показываем только предложения автора или админов
        const userSuggestions = suggestions.filter(s => 
            s.deviceId === deviceId || deviceId.startsWith('admin_')
        );
        
        let html = '';
        userSuggestions.reverse().forEach(s => {
            html += `
                <div class="suggestion-item">
                    <div class="suggestion-meta">
                        <span class="suggestion-author">${s.nick}</span>
                        <span class="suggestion-school-tag">${s.school}</span>
                        <span>${new Date(s.timestamp).toLocaleString()}</span>
                    </div>
                    <div class="suggestion-content">${s.text}</div>
                </div>
            `;
        });
        
        if (!html) {
            html = '<div class="suggestion-item">Пока нет предложений</div>';
        }
        
        container.innerHTML = html;
    }

    // Отправка предложения
    document.getElementById('sendSuggestion').addEventListener('click', function() {
        const nickInput = document.getElementById('suggestionNick');
        const schoolInput = document.getElementById('suggestionSchool');
        const textInput = document.getElementById('suggestionText');
        
        const nick = nickInput.value.trim();
        const school = schoolInput.value.trim();
        const text = textInput.value.trim();
        
        if (!nick || !school || !text) {
            alert('Заполни все поля!');
            return;
        }
        
        suggestions.push({
            nick: nick,
            school: school,
            text: text,
            deviceId: deviceId,
            timestamp: Date.now()
        });
        
        saveSuggestions();
        renderSuggestions();
        
        nickInput.value = '';
        schoolInput.value = '';
        textInput.value = '';
    });

    // Инициализация
    async function init() {
        // Сначала пробуем загрузить с сервера
        await loadFromServer();
        
        renderTeacherWheel();
        renderComments();
        updateWinnersDistrict();
        updateActivityPodium();
        renderSchoolLeaders();
        
        // Таймер обновления
        updateTimer();
        setInterval(updateTimer, 60000); // Обновляем каждую минуту
        
        // Скрываем секцию предложений
        document.getElementById('suggestionsSection').style.display = 'none';
        
        // Загружаем данные каждые 30 секунд
        setInterval(loadFromServer, 30000);
    }

    // Запуск
    init();
})();