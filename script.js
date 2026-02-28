console.log('🔥 СКРИПТ ЗАГРУЗИЛСЯ!');

document.addEventListener('DOMContentLoaded', function() {
    console.log('🔥 СТРАНИЦА ЗАГРУЖЕНА!');
    
    // Проверяем, видит ли скрипт кнопки
    const buttons = document.querySelectorAll('button');
    console.log('Найдено кнопок:', buttons.length);
    
    // Добавляем обработчик на все кнопки
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            alert(`Кнопка ${index} нажата: ${this.innerText}`);
            console.log('Клик по кнопке:', this.innerText);
        });
    });
    
    // Добавляем тестовый блок на страницу
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
        testDiv.innerHTML = '✅ СКРИПТ РАБОТАЕТ! Все кнопки должны работать.';
        container.prepend(testDiv);
    }
});