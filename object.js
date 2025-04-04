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
    city: 'Новочеркасск'
  }
  
  const address = {
    country: "Россия",     
    city: "Новочеркасск",        
    street: "Гагарино",      
    house: 8/2,           
    apartment: 14        
  };

  const myCar = {
    brand: "Hyundai",            // Марка
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