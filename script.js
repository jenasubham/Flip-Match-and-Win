let cardsArray = [
    {
        'name': 'laugh',
        'img': './img/Laugh.png',
    },
    {
        'name': 'SmilingFace',
        'img': './img/SmilingFace.png',
    },
    {
        'name': 'boared',
        'img': './img/Boared.png',
    },
    {
        'name': 'loveonface',
        'img': './img/Loveonface.png',
    },
    {
        'name': 'cool',
        'img': './img/cool.png',
    },
    {
        'name': 'explosion',
        'img': './img/explosion.png',
    },
    {
        'name': 'confused',
        'img': './img/confused.png',
    },
    {
        'name': 'smile',
        'img': './img/smile.png',
    }
];



const parentDiv = document.querySelector('#card-section')

// to duplicate each card
const gameCards = cardsArray.concat(cardsArray)

// suffle the coards randomly
const suffle =(array)=>{
    for(let i = array.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}
suffle(gameCards)


let clickCount = 0; 
let firstCard = "";
let secondCard = "";

// styling the match card
const card_matches = ()=>{
    let card_selected = document.querySelectorAll('.card_selected')
    card_selected.forEach((curEle)=>{
        curEle.classList.add('card_match')
    })
}

// if 2 cards does not match 
const resetGame = () => {
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem) => {
        curElem.classList.remove('card_selected')
    })

}

parentDiv.addEventListener('click',(event)=>{
    currCard = event.target
    clickCount++;

    if(clickCount <=2 && currCard.id !== "card-section" ){
        if(clickCount ===1){
            firstCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected')
        }
        else{
            secondCard = currCard.parentNode.dataset.name;
            currCard.parentNode.classList.add('card_selected')
        }
        
        if(firstCard !== "" && secondCard !== ""){
        if(firstCard === secondCard){
            setTimeout(()=>{
                card_matches()   
                resetGame()  
            },1000)   
        }
        else{
            setTimeout(() => {
                resetGame()
            }, 1000)
        }
        }
        
    }
})

// add card
for(let i=0; i<gameCards.length; i++){
    const childDiv = document.createElement('div')  

    childDiv.setAttribute('class','card')
    childDiv.dataset.name = gameCards[i].name
    // childDiv.style.backgroundImage = `url(${gameCards[i].img})` 

    const front_div = document.createElement('div')
    front_div.classList.add('front-card')

    const back_div = document.createElement('div')
    back_div.classList.add('back-card')
    back_div.style.backgroundImage = `url(${gameCards[i].img})` 

    childDiv.appendChild(front_div)
    childDiv.appendChild(back_div)
    
    parentDiv.appendChild(childDiv)

}