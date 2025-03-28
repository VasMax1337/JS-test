// const name = prompt('Как тебя зовут?')
// alert('Тебя зовут ' + name + '?')

// console.log(name)

// let age = prompt('Сколько тебе лет?')
// alert('Тебе ' + age + ' лет?')

// console.log(age)

// let lastName = prompt('Какая у тебя фамилия?')
// alert('Твоя фамилия ' + lastName + '?')

// console.log(lastName)

// let middleName = prompt('Какое у тебя отчество?')
// alert('Твое отчество ' + middleName + '?')

// console.log(middleName) 

// const birthYear = prompt('В каком году ты родился?')
// alert('Ты родился(а) ' + birthYear + '?')

// console.log(birthYear)

// const country = prompt('В какой стране ты родился?')
// alert('Ты родился(а) в ' + country + '?')

// console.log(country)

// const city = prompt('В каком городе ты родился?')
// alert('Ты родился(а) ' + city + '?')

// console.log(city)

// let cityName = prompt('В каком городе сейчас проживаешь?')
// alert('Сейчас живешь в ' + cityName + '?')

// console.log(cityName)

// let fullName = lastName + " " + name + " " +  middleName
// alert('Твое полное имя ' + fullName + '?')

// console.log(fullName)

// let work = prompt('Где ты сейчас работаешь?')
// alert('Ты сейчас работаешь в ' + work + '?')

// alert('Давай сверим?')

// alert('Из полученной мной информации, ты ' + fullName + ' ,которому ' + age + ' лет, родился в ' + 
// country + ' ,в городе ' + city + ' в ' + birthYear + ' году. Сейчас проживаешь в ' + cityName + ' работая в ' + work + '?')

// const userInfo = ('Из полученной мной информации, ты ' + fullName + ' ,которому ' + age + ' лет, родился в ' + 
// country + ' ,в городе ' + city + ' в ' + birthYear + ' году. Сейчас проживаешь в ' + cityName + ' работая в ' + work + '!')

// console.log(userInfo)




// let age = prompt("Сколько вам лет?")

// if(age<18) {
//     alert("Вы не совершеннолетний!") 
// }else {
//     alert("Вы совершеннолетний")
// }


// let num = 1;

// for (num = 1; num <= 10; num++) {
//     alert(num)
// }


// let day = prompt("Какое сегодня число?")

// switch (Number(day)) {
//     case 1: 
//     case 8: 
//     case 15: 
//     case 22: 
//     case 29:
//         alert("Суббота");
//         break;

//     case 2: 
//     case 9: 
//     case 16: 
//     case 23: 
//     case 30:
//         alert("Воскресенье");
//         break;

//     case 3: 
//     case 10: 
//     case 17: 
//     case 24: 
//     case 31:
//         alert("Понедельник");
//         break;

//     case 4: 
//     case 11: 
//     case 18: 
//     case 25:
//         alert("Вторник");
//         break;

//     case 5: 
//     case 12: 
//     case 19: 
//     case 26:
//         alert("Среда");
//         break;

//     case 6:
//     case 13: 
//     case 20: 
//     case 27:
//         alert("Четверг");
//         break;

//     case 7: 
//     case 14: 
//     case 21: 
//     case 28:
//         alert("Пятница");
//         break;
// }


// let number = prompt("Какой сегодня число?")

// if(number >= 1 && number <= 2) {
//     alert(`${number} относится к первой неделе месяца`)
// }else if(number >= 3 && number <= 9) {
//     alert(`${number} относится ко второй неделе месяца`)
// }else if(number >= 10 && number <= 16) {
//     alert(`${number} относится к третий неделе месяца`)
// }else if(number >= 17 && number <= 23) {
//     alert(`${number} относится к четвертой неделе месяца`)
// }else if(number >= 24 && number <= 30) {
//     alert(`${number} относится к пятой неделе месяца`)
// }else if(number == 31) {
//     alert(`${number} относится к шестой неделе месяца`)
// }else {
//     alert('В месяце максиум 31 день')
// }



// function multiply (a, b) {
//      return  a * b
// }

// console.log(multiply(10, 275))

// multiply()



// let age = Number(prompt("Сколько тебе лет?"))

// function isAdult (age) {

//      if(age >= 18) {
//         return true
//      }
//      return false
// }

// console.log(isAdult(age))

// isAdult()



// let a = Number(prompt("Какое число возвести в квадрат?"))

// const getSquare = () => {
//     return a ** 2
// }

// console.log(getSquare(a))

// getSquare()


const studentNames = ["Анна", "Борис", "Виктор"];
const studentAges = [18, 20, 19];
const studentGrades = [
  [5, 4, 5], // Анна
  [3, 4, 4], // Борис
  [5, 5, 5]  // Виктор
];


const getAverage = (grades) => {
  const result = []

  grades.forEach(gradesOfStudent => {
    const sum = gradesOfStudent.reduce((acc, grade) => acc + grade, 0);

    const average = +(sum / studentGrades.length).toFixed(2)

    result.push(average)
  });
  return result
}

const averages = getAverage(studentGrades)

console.log(getAverage(studentGrades))

const gradesStudentInformation = (names, ages, averages) => {
  names.forEach((name, index) => {
    console.log(`
    Студент: ${name}
    Возраст: ${ages[index]}
    Средняя оценка: ${averages[index]}
    `)
  })
}

gradesStudentInformation(studentNames, studentAges, averages)

const getTopStudent = (names, averages) => {
  let topIndex = 0
  let topAverage = averages[0]

  averages.forEach((average, index) => {
    if(average > topAverage){
      topAverage = average
      topIndex = index
    }
  })
  return names[topIndex]
}

console.log(getTopStudent(studentNames, averages))



const bookTitles = ["Гарри Поттер", "Властелин Колец", "1984"];
const bookAuthors = ["Дж. Роулинг", "Дж. Толкин", "Дж. Оруэлл"];
const bookRatings = [
  [5, 4, 5, 5], // Рейтинги для 1-й книги
  [5, 5, 4, 3], // Для 2-й
  [4, 3, 5, 2]  // Для 3-й
];

// Создаю пустой массив, в который пушим результат среднего рейтинга

const getAverageRating = (ratings) => {
  const result = []

  ratings.forEach(ratingsOfbook => {
    const sum = ratingsOfbook.reduce((acc, rating) => acc + rating, 0)

    const averageReting = +(sum / ratingsOfbook.length).toFixed(2)

    result.push(averageReting)
  });
  return result
};

console.log(getAverageRating(bookRatings))
const avgRatings = getAverageRating(bookRatings)

// Выводим в консоль.лог данные из всех наших массивов

const printBookInfo = (titles, authors, avgRatings) => {
   titles.forEach((title, index) => {
    console.log(`
       Книга: ${title}
       Автор: ${authors[index]}
       Средний рейтинг: ${avgRatings[index]}
    `)
   })
}

printBookInfo(bookTitles, bookAuthors, avgRatings)

// Возвращаем название книге с наибольшим рейтингом

const findTopBook = (titles, avgRatings) => {
  const maxRatings = Math.max(...avgRatings)
  const index = avgRatings.indexOf(maxRatings)

  return titles[index]
}

console.log(findTopBook(bookTitles, avgRatings))

// filter работает с title и возвращает именно его, поэтому когда находит указанного автора, проверят по индексу и возвращает но уже title

const getBooksByAuthor = (authorName, titles, authors) => {
  return titles.filter((_, i) => authors[i] === authorName)
}

console.log(getBooksByAuthor("Дж. Толкин", bookTitles, bookAuthors))







const movieTitles = ["Крестный отец", "Криминальное чтиво", "Форрест Гамп", "Бойцовский клуб"];
const directors = ["Ф. Коппола", "К. Тарантино", "Р. Земекис", "Д. Финчер"];
const ratings = [
  [5, 5, 5, 4],  // Рейтинги для "Крестный отец"
  [5, 4, 5, 3],  // Для "Криминальное чтиво"
  [4, 5, 5, 5],  // Для "Форрест Гамп"
  [5, 5, 4, 5]   // Для "Бойцовский клуб"
];



const getAverageRatings = (ratings) => {
  const result = []

  ratings.forEach(ratingMovi => {
    const sum = ratingMovi.reduce((acc, rating) => acc + rating, 0)

    const averageReting = +(sum / ratingMovi.length).toFixed(2)

    result.push(averageReting)
  });
  return result
}

const avgRatingsMovi = getAverageRatings(ratings)

console.log(getAverageRatings(ratings))



const printMoviesAboveRating = (titles, avgRatings, threshold) => {
  titles.forEach((title, index) => {
    if (avgRatings[index] >= threshold) {
      console.log(`Фильм: ${title} Рейтигн: ${avgRatings[index]} `)
    }
  })
}

printMoviesAboveRating(movieTitles, avgRatingsMovi, 4.5)



const findMoviesByDirector = (titles, directors, directorName) => {
   return titles.filter((_, i) => directors[i] === directorName)
}

console.log(findMoviesByDirector(movieTitles, directors, "К. Тарантино"))



const getTopRatedDirector = ( directors, avgRatings) => {
     const maxRatings = Math.max(...avgRatings)
     const index = avgRatings.indexOf(maxRatings)

     return directors[index]
}

console.log(getTopRatedDirector(directors, avgRatingsMovi))