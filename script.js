/*
Hudson Drozdowski
Chose your own adventure game
2026-02-08 
*/

// Contains the current state of the story.
let currentState = "startingState"

function renderQuestion(currentState){
    
    // buttons
    const currentQuestion = document.getElementById("question")
    const button1 = document.getElementById("button-1")
    const button2 = document.getElementById("button-2")

    // Variables that are set to reflect the current state.
    let stateText = "None"
    let buttonsTextList = []
    let buttonsNextStateList = []

    switch(currentState){

        case "startingState":{
            stateText = "The current state is start!"

            buttonsTextList = [
                "test room 1",
                "test room 2"
            ]   
            buttonsNextStateList = [
                "testRoom1",
                "testRoom2"
            ]
            break;                    
        }

        case "testRoom1" : {
            stateText = "The current state is testRoom1!"
            buttonsTextList = [
                "option 1",
                "option 2"
            ]   
            buttonsNextStateList = [
                "option-1",
                "option-2"
            ]
            break;      
        }

        case "testRoom2" : {
            stateText = "The current state is testRoom2!"
            buttonsTextList = [
                "option 1",
                "option 2"
            ]   
            buttonsNextStateList = [
                "option-1",
                "option-2"
            ]
            break;      
        }

    };

    // Set the games contents to the current state.
    currentQuestion.textContent = stateText

    // removes all buttons before adding the new ones for the current state.
    clearButtons()

    // add the buttons to the game based on current state.
    for (let num in buttonsTextList){
        addAnswerButton(buttonsTextList[num], buttonsNextStateList[num])
    }

};

// clears the buttons so the new ones can be added when changing states.
function clearButtons(){

    // gets a list of all li holding buttons
    let buttonsLiList = document.getElementsByClassName("answer-button-li")
    
    // the ul holding the li's
    let buttonsUl = document.getElementById("answers")

    // removes each li containing the buttons from the website.
    while (buttonsLiList.length > 0){

        console.log(buttonsLiList[0])
        buttonsUl.removeChild(buttonsLiList[0])
    }
}

function addAnswerButton(buttonText, nextState){

    // ul containing the buttons.
    let answerButtonUl = document.getElementById("answers")

    // new elements to be added.
    let newAnswerButtonLi = document.createElement("li")
    let newAnswerButton = document.createElement("button")

    // setting the buttons contents
    newAnswerButton.textContent = buttonText

    // Adding new buttons to the game based on state.
    answerButtonUl.insertBefore(newAnswerButtonLi, answerButtonUl.firstChild)
    newAnswerButtonLi.insertBefore(newAnswerButton, newAnswerButtonLi.firstChild)

    newAnswerButtonLi.className = "answer-button-li"

    newAnswerButton.addEventListener("click", () =>{
        currentState = nextState
        renderQuestion(currentState)
    })
}

// Code inside executed at runtime.
document.addEventListener("DOMContentLoaded", (event) => {
    renderQuestion(currentState)
});