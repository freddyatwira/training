
const TOKEN = "2215224252003220"

const BASE_URL =`https://superheroapi.com/api.php/${TOKEN}`

const myImageDiv = document.getElementById('myImage');

const heroName = document.getElementById('name-el');

const liEl = document.getElementById('li-el');


const getSuperHero = (id) => {
    fetch(`${BASE_URL}/${id}`)
    .then(response => response.json())
    .then(json =>{
        const stats = getStatsHTML(json)
        heroName.innerHTML =` ${json.name}`
        myImageDiv.innerHTML = `<img src=${json.image.url} alt="img" height=250 />`
        liEl.innerHTML = stats;
        
   })
}

document.getElementById('search-btn').onclick = () =>{
    const myNameSearch = document.getElementById('random-input').value;
    const getSuperHeroBySearchName = (myNameSearch) => {
        fetch(`${BASE_URL}/search/${myNameSearch}`)
        .then(response => response.json())
        .then(json =>{
            const stats = getStatsHTML(json.results[0])
            heroName.innerHTML =` ${json.results[0].name}`
            myImageDiv.innerHTML = `<img src=${json.results[0].image.url} alt="img" height=250 />`
            liEl.innerHTML = stats;
       })
      
    }
    getSuperHeroBySearchName(myNameSearch);
    
    
}


const getStatsHTML = (character) =>{
    const stats = Object.keys(character.powerstats).map(stat => {
       return `<p>${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    })

    return stats.join('')
    
}



const randomHero = () =>{
    return Math.floor(Math.random()*731) +1
}

const myBtn = document.getElementById('btn')

myBtn.onclick = () =>getSuperHero(randomHero())
    

