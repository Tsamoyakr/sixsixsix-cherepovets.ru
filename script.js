// ========== НАСТРОЙКИ FIREBASE ==========
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

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

console.log('✅ Firebase подключен!');

// Простые переменные
let counter = 0;

// Ждём загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Страница загружена');
    
    // 1. ПРОВЕРКА КНОПОК - добавим тестовую кнопку
    const container = document.querySelector('.container');
    if (container) {
        const testDiv = document.createElement('div');
        testDiv.style.background = '#00aa00';
        testDiv.style.color = 'white';
        testDiv.style.padding = '20px';
        testDiv.style.margin = '10px';
        testDiv.style.borderRadius = '10px';
        testDiv.style.textAlign = 'center';
        testDiv.style.fontSize = '20px';
        testDiv.innerHTML = `
            <div>🔥 ТЕСТОВЫЙ РЕЖИМ 🔥</div>
            <button id="testBtn" style="padding:10px 20px; margin:10px; background:#ff0000; color:white; border:none; border-radius:5px; cursor:pointer;">НАЖМИ МЕНЯ</button>
            <div id="testResult">Кнопка не нажата</div>
        `;
        container.prepend(testDiv);
        
        // Обработчик кнопки
        document.getElementById('testBtn').addEventListener('click', function() {
            counter++;
            document.getElementById('testResult').innerHTML = `✅ Кнопка работает! Нажата ${counter} раз`;
            console.log('✅ Кнопка нажата!');
        });
    }
    
    // 2. ПРОВЕРКА FIREBASE
    const testRef = ref(db, 'test');
    
    // Запись в Firebase
    set(testRef, {
        message: 'Привет от устройства!',
        time: Date.now(),
        deviceId: 'test'
    }).then(() => {
        console.log('✅ Запись в Firebase успешна');
    }).catch(error => {
        console.error('❌ Ошибка записи в Firebase:', error);
    });
    
    // Чтение из Firebase
    get(testRef).then((snapshot) => {
        if (snapshot.exists()) {
            console.log('✅ Данные из Firebase:', snapshot.val());
        }
    }).catch(error => {
        console.error('❌ Ошибка чтения из Firebase:', error);
    });
    
    // 3. ПРОВЕРКА СУЩЕСТВУЮЩИХ КНОПОК
    const saveBtn = document.getElementById('saveVoteBtn');
    if (saveBtn) {
        console.log('✅ Кнопка сохранения найдена');
        saveBtn.addEventListener('click', function() {
            alert('✅ Кнопка СОХРАНИТЬ ВЫБОР работает!');
        });
    } else {
        console.log('❌ Кнопка сохранения НЕ найдена');
    }
    
    const sendCommentBtn = document.getElementById('sendComment');
    if (sendCommentBtn) {
        console.log('✅ Кнопка комментария найдена');
        sendCommentBtn.addEventListener('click', function() {
            alert('✅ Кнопка ОТПРАВИТЬ работает!');
        });
    } else {
        console.log('❌ Кнопка комментария НЕ найдена');
    }
    
    // Проверяем все кнопки школы
    document.querySelectorAll('.school-btn').forEach((btn, index) => {
        console.log(`✅ Кнопка школы ${index} найдена`);
        btn.addEventListener('click', function() {
            alert(`✅ Нажата кнопка: ${this.innerText}`);
        });
    });
});
