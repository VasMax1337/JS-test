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



function multiply (a, b) {
     return  a * b
}

console.log(multiply(10, 275))

multiply()



let age = Number(prompt("Сколько тебе лет?"))

function isAdult (age) {

     if(age >= 18) {
        return true
     }
     return false
}

console.log(isAdult(age))

isAdult()



let a = Number(prompt("Какое число возвести в квадрат?"))

const getSquare = () => {
    return a ** 2
}

console.log(getSquare(a))

getSquare()