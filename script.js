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
        }

    };

    // Set the games contents to the current state.
    currentQuestion.textContent = stateText
};


function addAnswerButton(buttonText, nextState){
    // button text and the next state when button is clicked.
    let text = buttonText
    let state = nextState

    // ul containing the buttons.
    let answerButtonUl = document.getElementById("answers")

    // new elements to be added.
    let newAnswerButtonLi = document.createElement("li")
    let newAnswerButton = document.createElement("button")

    // Adding new buttons to the game based on state.
    answerButtonUl.insertBefore(newAnswerButtonLi, answerButtonUl.firstChild)
    newAnswerButtonLi.insertBefore(newAnswerButton, newAnswerButtonLi.firstChild)
}

// Code inside executed at runtime.
document.addEventListener("DOMContentLoaded", (event) => {
    renderQuestion(currentState)
});