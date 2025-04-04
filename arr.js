const tasks = ["Купить продукты", "Сделать зарядку", "Позвонить другу", "Написать код"];


// Твоя задача — реализовать функционал для работы со списком задач, используя разные методы массивов.  

// 1️⃣ Добавление и удаление задач  
// - Добавь новую задачу "Прочитать книгу" в конец списка.  
// - Удали последнюю задачу.  
// - Добавь "Записаться на курс" в начало списка.  
// - Удали первую задачу.  
// - Вставь "Сделать уборку" на второе место в списке.  

// 2️⃣ Поиск задач  
// - Найди индекс задачи "Позвонить другу".  
// - Проверь, есть ли в списке задача "Сходить в зал".  
// - Найди первую задачу, содержащую слово "код".  

// 3️⃣ Перебор задач  
// - Выведи все задачи в консоль с их порядковым номером (используй `forEach`).  

// 4️⃣ Преобразование списка  
// - Создай новый массив, в котором к каждой задаче добавляется "(важно)".  
// - Отсортируй задачи по алфавиту.  
// - Переверни порядок задач.  
// - Объедини массив задач в строку через запятую.  
// - Раздели строку обратно в массив.  

// 5️⃣ Итоговый расчёт  
// - Посчитай общее количество символов во всех задачах вместе.



//  №1️⃣

tasks.push("Прочитать книгу") // 1.1

console.log(tasks)

tasks.pop() // 1.2

console.log(tasks)

tasks.unshift("Записаться на курс") // 1.3

console.log(tasks)

tasks.shift() // 1.4

console.log(tasks)

tasks.splice(2, 0, "Сделать уборку")   // 1.5

console.log(tasks)

 //  №2️⃣

 const tasks2 = tasks.findIndex((task) => {  //2.1
    return task === "Позвонить другу"
 })

 console.log(tasks2)

 const tasks3 = tasks.find((task) => {  //2.2
    if(task === "Сходить в зал") {
        return true
    }
    return false
 })

 console.log(tasks3)

const tasks4 = tasks.filter(title => title.includes('код')) //2.3

console.log(tasks4)

 //  №3️⃣ 

 tasks.forEach((task, index) => {        //3.1
        console.log(`${index} ${task}`)
 })

//  №4️⃣

const tasksImportant = tasks.map(title => `${title} (важно)`) //4.1

console.log(tasksImportant)

tasks.sort((a, b) => a.localeCompare(b, 'ru')) //4.2

console.log(tasks)

tasks.sort((a, b) => b.localeCompare(a, 'ru')) //4.3

console.log(tasks) // также можно через => 

console.log(tasks.reverse()) // перевернуло массив в изначальное состояние, так как метод sort изменяет массив. 

const taskSentences = tasks.join(',')  //4.4

console.log(taskSentences)

const taskArr = taskSentences.split(',') //4.5

console.log(taskArr)

// №5️⃣

const taskSum = tasks.reduce((acc, title) => acc + title.length, 0)

console.log(taskSum)






