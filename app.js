const val = 10;
const Chislo = Math.floor(Math.random() * (val + 1)); // 0..10

const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const quoteNumber = document.getElementById("quote-number");


function showQuote(text, author, numberc) {
    quoteText.textContent = text;
    quoteAuthor.textContent = author;
    quoteNumber.textContent = numberc;
}

if (Chislo === 1) {
    showQuote(
        "Хороший код — це код, який легко змінювати.",
        "— Мартін Фаулер",
        "1 з 10"
    );

} else if (Chislo === 2) {
    showQuote(
        "Проблема не в тому, що у вас є баги, а в тому, як швидко ви їх знаходите та виправляєте.",
        "— Стів МакКоннелл",
        "2 з 10"
    );

} else if (Chislo === 3) {
    showQuote(
        "Програмування — це мистецтво змушувати щось працювати, коли ти знаєш, що це не повинно працювати.",
        "— Анонімний розробник",
        "3 з 10"
    );

} else if (Chislo === 4) {
    showQuote(
        "Будь-який дурень може написати код, який зрозуміє комп'ютер. Хороші програмісти пишуть код, який зрозуміє людина.",
        "— Мартін Фаулер",
        "4 з 10"
    );

} else if (Chislo === 5) {
    showQuote(
        "Неважливо, звідки ти, важливо, куди ти прямуєш.",
        "— Брайан Трейсі",
        "5 з 10"
    );

} else if (Chislo === 6) {
    showQuote(
        "Якщо налагодження — це процес видалення багів, то програмування — процес їх впровадження.",
        "— Едсгер Дейкстра",
        "6 з 10"
    );

} else if (Chislo === 7) {
    showQuote(
        "Немає кращого способу вивчити програмування, ніж через гру.",
        "— Алан Тюрінг",
        "7 з 10"
    );

} else if (Chislo === 8) {
    showQuote(
        "У житті, як й в програмуванні, завжди є друга спроба.",
        "— Лінус Торвальдс",
        "8 з 10"
    );

} else if (Chislo === 9) {
    showQuote(
        "Код — це поезія логіки. Пиши його так, щоб він надихав.",
        "— Незнайомий розробник",
        "9 з 10"
    );

} else if (Chislo === 10) {
    showQuote(
        "Найкращий спосіб навчитися — робити помилки та виправляти їх.",
        "— Керміт із Мапет-Шоу",
        "10 з 10"
    );

} else if (Chislo === 0) {
    showQuote(
        "Технології — це лише інструмент. Найголовніше — які ідеї ти в них вкладаєш.",
        "— Стів Джобс",
        "А це 0 з 10! Ти виграв справжній джекпот!"
    );

} else {
    showQuote("Нема такого числа.", "", "");
}
console.log('JACKPOT!!!!!!!!!!!')
