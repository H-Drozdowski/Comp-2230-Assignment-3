/*
Hudson Drozdowski
Chose your own adventure game
2026-02-08 
*/

// Contains the current state of the story.
let currentState = "outsideDungeon"

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

        case "outsideDungeon":{
            stateText = "You stand outside the dungeon doors."
            buttonsTextList = [
                "Open the door.",
            ]   
            buttonsNextStateList = [
                "dungeonHall",
            ]
            break;                    
        }

        case "dungeonHall" : {
            stateText = "You stand in a large box shaped room with stone brick walls. " +
                        "There are three doors in front of you. One door is straight ahead, " +
                        "one is on the left wall, and one is on the right wall."
            buttonsTextList = [
                "Enter the door straight ahead.",
                "Enter the door on the left.",
                "Enter the door on the right."
            ]   
            buttonsNextStateList = [
                "longHallway",
                "spiderRoom",
                "statueRoom"
            ]
            break;      
        }

        case "spiderRoom" : {
            stateText = "You open the door, light fills the room just enough to reveal a huge spider web, " +
                        "you see multiple glowing eyes reflect the light being cast in the darkness of the room."
            buttonsTextList = [
                "Fight the spiders.",
                "Exit the room."
            ]   
            buttonsNextStateList = [
                "spidersAttackRoom",
                "dungeonHall"
            ]
            break;
        }

        case "spidersAttackRoom" : {
            stateText = "The spiders surround you, you were unable to escape. Game Over!"
            buttonsTextList = [
                "Game Over."
            ]
            buttonsNextStateList = [
                "gameOver"
            ]
            break;
        }

        case "statueRoom" : {
            stateText = "You open the door to find a room filled with hundreds of old humanoid statues. " +
                        "They are all facing towards the centre of the room towards a small podium with a gemstone " +
                        "resting atop it."
            buttonsTextList = [
                "Steal the gemstone.",
                "Exit the room."
            ]
            buttonsNextStateList = [
                "statuesAttackRoom",
                "dungeonHall"
            ]
            break;
        }

        case "statuesAttackRoom" : {
            stateText = "You picked up the gem from the podium, the statues ran at you and tackled you to the " +
                        "ground. Game Over!"
            buttonsTextList = [
                "Game Over."
            ]
            buttonsNextStateList = [
                "gameOver"
            ]
            break;
        }

        case "longHallway" : {
            stateText = "You open the door to find a long dark hallway. Attached to the right " +
                        "side of the wall there is a small wooden lever."
            buttonsTextList = [
                "Pull the wooden lever.",
                "Feel the stone brick walls for a secret button."
            ]
            buttonsNextStateList = [
                "pitFallTrap",
                "hiddenDoorRoom"
            ]
            break;
        }

        case "hiddenDoorRoom" : {
            stateText = "A secret door at the end of the dark hallway slides open revealing a treasure chest!"
            buttonsTextList = [
                "Collect your reward!"
            ]
            buttonsNextStateList = [
                "winRoom"
            ]
            break;
        }

        case "pitFallTrap" : {
            stateText = "The floor caves in from under you! It was a trap! Game Over."
            buttonsTextList = [
                "Game Over."
            ]
            buttonsNextStateList = [
                "gameOver"
            ]
            break;
        }

        case "winRoom" : {
            stateText = "You found the hidden treasure! You Win!"
            buttonsTextList = [
                "Restart?"
            ]
            buttonsNextStateList = [
                "outsideDungeon"
            ]
            break;
        }

        case "gameOver" : {
            stateText = "Game Over!"
            buttonsTextList = [
                "Restart?"
            ]
            buttonsNextStateList = [
                "outsideDungeon"
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