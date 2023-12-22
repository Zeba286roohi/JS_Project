const cont =  document.querySelector(".container")
const select = document.querySelector("select")

let id 

function fetchSecondApi(){
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
        .then((res) =>{
            return res.json()
        }).then((data) =>{
            createCard(data)
            createOptions(data)
            console.log(data)
        })
}

fetchSecondApi()

function fetchApiData(){
    fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then((res) =>{
            return res.json()
        }).then((data) =>{
            // createCard(data)
            console.log(data)
        })
}

function createCard(coins){
   coins.forEach((coin) =>{
      const div = document.createElement("div")
      div.classList.add('card')
      div.innerHTML = `
      
     
            <img src=${coin.image}/>
            <h1>${coin.name}</h1>
            <h1>${coin.id}</h1>
     
      `
      cont.appendChild(div)
   }) 
}

function createOptions(coins){
    coins.forEach((coin) =>{
        const opt = document.createElement('option')
        opt.value = coin.id
        opt.innerHTML = coin.name

        select.appendChild(opt)
    })
}

function optionValue(e){
   id= e.value
   fetchApiData()
}