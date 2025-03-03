const name = prompt('Как тебя зовут?')
alert('Тебя зовут ' + name + '?')

console.log(name)

let age = prompt('Сколько тебе лет?')
alert('Тебе ' + age + ' лет?')

console.log(age)

let lastName = prompt('Какая у тебя фамилия?')
alert('Твоя фамилия ' + lastName + '?')

console.log(lastName)

let middleName = prompt('Какое у тебя отчество?')
alert('Твое отчество ' + middleName + '?')

console.log(middleName) 

const birthYear = prompt('В каком году ты родился?')
alert('Ты родился(а) ' + birthYear + '?')

console.log(birthYear)

const country = prompt('В какой стране ты родился?')
alert('Ты родился(а) в ' + country + '?')

console.log(country)

const city = prompt('В каком городе ты родился?')
alert('Ты родился(а) ' + city + '?')

console.log(city)

let cityName = prompt('В каком городе сейчас проживаешь?')
alert('Сейчас живешь в ' + cityName + '?')

console.log(cityName)

let fullName = lastName + " " + name + " " +  middleName
alert('Твое полное имя ' + fullName + '?')

console.log(fullName)

let work = prompt('Где ты сейчас работаешь?')
alert('Ты сейчас работаешь в ' + work + '?')

alert('Давай сверим?')

alert('Из полученной мной информации, ты ' + fullName + ' ,которому ' + age + ' лет, родился в ' + 
country + ' ,в городе ' + city + ' в ' + birthYear + ' году. Сейчас проживаешь в ' + cityName + ' работая в ' + work + '?')

const userInfo = ('Из полученной мной информации, ты ' + fullName + ' ,которому ' + age + ' лет, родился в ' + 
country + ' ,в городе ' + city + ' в ' + birthYear + ' году. Сейчас проживаешь в ' + cityName + ' работая в ' + work + '!')

console.log(userInfo)
