let randomnumber =(parseInt(Math.random()*100+1))

const submitbutton = document.querySelector("#subt")
const userinput = document.querySelector("#guessfield")
const guessslot = document.querySelector(".guesses")
const remaniing  = document.querySelector(".lastResult")
const loworhi = document.querySelector(".loworhi");
const startover = document.querySelector(".resultparas")

const p =document.createElement('p')

let prevguess = [];
let noofguess = 1 ;

let playgame = true ;
if(playgame){
    submitbutton.addEventListener('click',function(event){
        event.preventDefault()
        const guess = parseInt(userinput.value)
        console.log(guess)
        validguess(guess)
    })

}

function validguess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number")
    }
    else if(guess<1){
        alert("please enter avalid number")
    }
    else if (guess>100){
        alert("please enter a number less than 100")
    }
    else{
        prevguess.push(guess)
        if(noofguess===11){
            displayguess(guess)
            displaymessage(`game over. Random number was ${randomnumber}`)
            endgame()
        }
        else{
            displayguess(guess)
            checkguess(guess)

        }
    }


}

function checkguess(guess){
    if (guess===randomnumber){
        displaymessage("you guessed it right")
        endgame()
    }
    else if (guess < randomnumber){
        displaymessage("Number is too low")
    }

    else if (guess>randomnumber){
        displaymessage("number is high")
    }

}

function displayguess(guess){
    userinput.value = ''
    guessslot.innerHTML += `${guess}   `
    noofguess ++ ;
    remaniing.innerHTML = `${11-noofguess}`


}

function displaymessage(message){
    loworhi.innerHTML = `<h2>${message} </h2>`

}



function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">start new game</h2>`
    startover.appendChild(p)
    playgame = false
    newgame()


}
function newgame(){
    let newgamebutton = document.querySelector("#newGame")
    newgamebutton.addEventListener('click',function(e){
        randomnumber =parseInt(Math.random()*100+1)
        prevguess =[]
        noofguess = 1
        guessslot.innerHTML = ''
         remaniing.innerHTML = `${11-noofguess}`
         userinput.removeAttribute('disabled')
         startover.removeChild(p)
         playgame = true

    })


}


