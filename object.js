// Object

const shoes = {
    name: 'Puma',
    type: 'Кроссовки'
  }
  
  const socks = {
    name: 'Nike',
    type: 'Носки'
  }
  
  const pants = {
    name: 'Outventure',
    type: 'Штаны'
  }
  
  const tShirt = {
    name: 'UNIQLO',
    type: 'Футболка'
  }
  
  const sweater = {
    name: 'Befree',
    type: 'Кофта'
  }
  
  const jacket = {
    name: 'Outventure',
    type: 'Куртка'
  }
  
  const phone = {
    name: 'iPhone',
    model: "12PRO"
  }
  
  const bankCard = {
    name: ['tinloff', 'alfa-bank'],
    type: 'Дебетовая'
  }
  
  const driversLicense = {
    category: 'B',              // Категория прав
    validUntil: 2030            // Действительны до
  }
  
  const bag  = {
    name: 'Nike',
    type: 'Сумка',
    accessories: [phone, bankCard, driversLicense]
  }
  
  
  const myProfile = {
    lastName:'Васильев',
    patronymic:'Александрович', // Отчество
    dob: '05.12.1998',          // Дата рождения (Date of birth)
    phoneNumber:'+79519949444',
    email:'meyra689@yandex.ru',
  }
  
  const address = {
    country: "Россия",     
    city: "Новочеркасск",        
    street: "Гагарино",      
    house: 8/2,           
    apartment: 14        
  };

  const myCar = {
    brand: "Hyundai",            
    model: "Elantra",             
    year: 2010,                  
    manufacturerCountry: "Korea",// Страна-производитель
    engineVolume: 1.6,           // Объем двигателя (л)
    horsepower: 132              // Лошадиные силы
  };
  
  
  const human = {
    name: 'Максим',
    age: 26,
    personalData: [
      myProfile, 
      address
    ],
    wear: [
      shoes, 
      socks, 
      pants, 
      tShirt, 
      sweater, 
      jacket
    ],
    accessories: [
      bag, 
      phone, 
      bankCard, 
      driversLicense
    ],
    car: myCar
  }

/*   Задачи для практики:
🔹 Уровень 1 (Базовый)
Выведи в консоль тип обуви (type) из объекта shoes

Получи массив всех предметов одежды (wear) человека

Проверь, есть ли среди аксессуаров (accessories) объект phone

Выведи страну-производителя автомобиля (manufacturerCountry)*/
/*
🔹 Уровень 2 (Массивы и объекты)
Найди все вещи бренда "Nike" (пройди по wear и accessories)

Посчитай, сколько предметов одежды надето на человека (длина массива wear)

Получи массив названий (name) всех аксессуаров

Выведи, действительны ли права (driversLicense) до 2030 года (сравни с текущим годом)*/
/*
🔹 Уровень 3 (Глубокая работа с данными)
Измени город в адресе (address.city) на "Москва" и проверь, что он изменился и в personalData

Найди все объекты, где type — строка (пройди по всем вложенным свойствам)

Создай массив всех уникальных брендов (из wear, accessories, car)

Проверь, есть ли среди вещей (wear) хотя бы один предмет с названием длиннее 5 символов*/
/*
🔹 Уровень 4 (Комбинированные)
Напиши функцию, которая принимает объект human и возвращает строку:
"Максим из Новочеркасска владеет Hyundai Elantra 2010 года" (данные подставляй динамически)

Добавь новый аксессуар — объект watch (с полями name и price) в массив accessories

Преобразуй массив wear в строку вида:
"Надето: Кроссовки Puma, Носки Nike, Штаны Outventure..."

Проверь, все ли аксессуары (accessories) содержат поле name (верни true/false)*/
/*
🔹 Уровень 5 (Сложные манипуляции)
Найди самый старый предмет одежды (сравни по первому символу в name, как будто это год)

Создай копию объекта human без автомобиля (car) (используй деструктуризацию или Object.assign)
*/

//🔹 Уровень 1

console.log(shoes.type) // 1.1

console.log(human.wear) // 1.2

const accessoriesPhone = human.accessories.find((accessory) => { // 1.3
   if (accessory === phone) {
    return true
   }
   return false
})

console.log(accessoriesPhone)

console.log(myCar.manufacturerCountry) // 1.4

//🔹 Уровень 2

const wearNike = human.wear.filter(title => title.name === 'Nike')  // 2.1
const accessoriesNike = human.accessories.filter(title => {
  if(!title.name) return false
  if(Array.isArray(title.name)) {
    return title.name.includes( 'Nike')
  }
  return  title.name === 'Nike'
})

const accessoriesWearNike = [...wearNike, ...accessoriesNike]
console.log(accessoriesWearNike)


console.log(human.wear.length)  // 2.2


const accessoriesName = human.accessories // 2.3
.filter(title => title.name)
.map(title => {  
  if(Array.isArray(title.name)) {
    return title.name.join(',')
  }
  return title.name
}) 

console.log(accessoriesName)



const currentYear = new Date().getFullYear(); // 2.4

const isLicenseValidUntil2030 = human.accessories
.filter(title => title.validUntil >= currentYear)

console.log(isLicenseValidUntil2030)

//🔹 Уровень 3

const cityObj = human.personalData.find((title) => title.city) // 3.1

cityObj.city = 'Москва'

console.log(human.personalData)



const allItems = [...human.accessories, ...human.wear] // 3.2

const typeString = allItems.filter(title => title.type && typeof title.type === 'string')

console.log(typeString)



const uniqueBrands = allItems // 3.3
.filter(title => title.name)
.map(title => title.name)

const allBrands = [human.car.brand, ...uniqueBrands]

const newSetBrands = [...new Set(allBrands)]

console.log([...newSetBrands])



const hasLongName = human.wear.some(title => title.name.length > 5) // 3.4

console.log(hasLongName)

//🔹 Уровень 4

const getUserInfo = (human) => {  // 4.1
     return `${human.name} из ${human.personalData[1].city} владеет ${human.car.brand} ${human.car.model} ${human.car.year} года`
}

console.log(getUserInfo(human))



const watch = {  // 4.2
  name: 'apple',
  price: 30000
}

human.accessories.push(watch)

console.log(human.accessories)



const wearText = human.wear.map(title => `${title.name} ${title.type}`).join(', ') // 4.3

console.log(wearText)



const allHaveNames = human.accessories.every(title => title.name) // 4.4

console.log(allHaveNames)

//🔹 Уровень 5

// const oldestItem = human.wear
// .map(title => title.name[0])
// .sort((a, b) => a.localeCompare(b))

// console.log(oldestItem)

const clothes = human.wear // 5.1

const oldestClothing = clothes.reduce((oldest, current) => {
  let oldestChar = oldest.name[0].toLocaleLowerCase()
  let currentChar = current.name[0].toLocaleLowerCase()

  if(currentChar < oldestChar) {
    return current
  }
  return oldest
})

console.log(oldestClothing)

// 5.2
// Способ 1: Деструктуризация + rest-оператор (...)

const {car, ...humanCopy} = human

console.log(humanCopy)

// Способ 2: Object.assign + удаление свойства

const userCopy = Object.assign({}, human)

delete userCopy.car

console.log(userCopy)

// Способ 3: Современный structuredClone (глубокая копия)

const humanClon = structuredClone(human)

delete humanClon.car

console.log(humanClon)

// Способ 4: Использование JSON.parse + JSON.stringify

const userString = JSON.stringify(human, ['name', 'age', 'personalData', 'wear', 'accessories'])
const userParse = JSON.parse(userString)

console.log(userParse)

// Способ 5: Функция omit (аналог Lodash) ПОЗЖЕ!!!!

































