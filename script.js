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
    let button1Text = "None"
    let button1NextState = "None"
    let button2Text = "None"
    let button2NextState = "None"

    switch(currentState){

        case "startingState":{
            stateText = "The current state is start!"
            button1Text = "option1"
            button2Text = "option2"                        
        }
    };

    // Set the games contents to the current state.
    button1.textContent = button1Text
    button2.textContent = button2Text
    currentQuestion.textContent = stateText
};

document.addEventListener("DOMContentLoaded", (event) => {
    renderQuestion(currentState)
});