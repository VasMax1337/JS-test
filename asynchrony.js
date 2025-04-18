function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

delay(10000).then(()=> console.log("Прошло 10 секунд"));

async function delayTime() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Готово");
}

delayTime()

async function delayOrder() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(1)
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(2)
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log(3)
}

delayOrder()



const api = "https://www.swapi.tech/api/";


async function getPlanets() {
    try {
        const response = await fetch(api);
        const data = await response.json();
        console.log(data)

        const planetsURL = data.result.planets;
        console.log(planetsURL)

        const planetsResponse = await fetch(planetsURL);
        const planetsData = await planetsResponse.json();

        console.log(planetsData.results);
    } catch (error) {
        console.error("Ошибка:", error);
    }
}

getPlanets()


async function getPeople() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)

        const peopleURL = data.result.people
        console.log(peopleURL)

        const peopleResponse = await fetch(peopleURL)
        const peopleData = await peopleResponse.json()

        console.log(peopleData.results)

    } catch (error) {
        console.error("Ошибка:", error);
    }
}

getPeople()


async function getFilms() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)

        const filmsURL = data.result.films
        console.log(filmsURL)

        const filmsResponse = await fetch(filmsURL)
        const filmsData = await filmsResponse.json()

        console.log(filmsData)

    }catch (error) {
        console.error('Ошибка:', error);
    }
}

getFilms()


async function getStarships() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)

        const starshipsUrl = data.result.starships
        console.log(starshipsUrl)

        const starshipsResponse = await fetch(starshipsUrl)
        const starshipsData = await starshipsResponse.json()

        console.log(starshipsData.results)

    }catch (error) {
        console.error("Ошибка:", error);
    }
}

getStarships()


async function getVehicles() {
    try {
        const response = await fetch(api)
        const data = await response.json()
        console.log(data)

        const vehiclesUrl = data.result.vehicles
        console.log(vehiclesUrl)

        const vehiclesResponse = await fetch(vehiclesUrl)
        const vehiclesData = await vehiclesResponse.json()

        console.log(vehiclesData.results)

    } catch (error) {
        console.error("Ошибка:", error);
    }
}

getVehicles()

