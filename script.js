/*
Hudson Drozdowski
Chose your own adventure game
2026-02-08 
*/

// Contains the current state of the story.
let currentState = "outsideDungeon"

function renderQuestion(currentState){
    
    // Text and image display
    const currentQuestion = document.getElementById("question")
    const roomImage = document.getElementById("room-image")

    // Variables that are set to reflect the current state.
    let stateText = "None"
    let currentImage = ""
    let imageAltText = "None"
    let buttonsTextList = []
    let buttonsNextStateList = []

    switch(currentState){
        // The starting room outside the dungeon.
        case "outsideDungeon":{
            stateText = "You stand outside the dungeon doors."
            currentImage = "images/outsideDungeon.jpg"
            imageAltText = "A large doorway built into the side of a mountain."
            buttonsTextList = [
                "Open the door.",
            ]   
            buttonsNextStateList = [
                "dungeonHall",
            ]
            break;                    
        }
        // Front hall with the three main paths.
        case "dungeonHall" : {
            stateText = "You stand in a large dimly lit box shaped room with stone brick walls. " +
                        "You raise your torch to light up the room in front of you. There are three "+
                         "doors one door is straight ahead, one is on the left wall, and one is on the right wall."
            currentImage = "images/mainHallRoom.jpg"
            imageAltText = "A box shaped room with three doors, one on the left, right, and straight ahead."
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
        // Spider room.
        case "spiderRoom" : {
            stateText = "You open the door, light fills the room just enough to reveal a huge spider web, " +
                        "you see multiple glowing eyes reflect the light being cast in the darkness of the room."
            currentImage = "images/spiderRoom.jpg"
            imageAltText = "An image showing a large spider."
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
        // Spider attack player room. 
        case "spidersAttackRoom" : {
            stateText = "The spiders surround you, you were unable to escape. Game Over!"
            currentImage = "images/spiderRoom.jpg"
            imageAltText = "An image showing a large spider."
            buttonsTextList = [
                "Game Over."
            ]
            buttonsNextStateList = [
                "gameOver"
            ]
            break;
        }
        // The statue and gem room.
        case "statueRoom" : {
            stateText = "You open the door to find a room filled with hundreds of old humanoid statues. " +
                        "They are all facing towards the centre of the room. In the centre a small green gemstone " +
                        "is resting atop a podium."
            currentImage = "images/statueRoom.png"
            imageAltText = "A image showing a shiny green gemstone."
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
        // The statues attack player room.
        case "statuesAttackRoom" : {
            stateText = "You picked up the gem from the podium, the statues ran at you and tackled you to the " +
                        "ground. Game Over!"
            currentImage = "images/gameOver.png"
            imageAltText = "An image displaying the words Game Over in a pixelated font."
            buttonsTextList = [
                "Game Over."
            ]
            buttonsNextStateList = [
                "gameOver"
            ]
            break;
        }
        // The long hallway room.
        case "longHallway" : {
            stateText = "You open the door to find a long dark hallway. Attached to the right " +
                        "side of the wall there is a small wooden lever."
            currentImage = "images/longHallway.jpeg"
            imageAltText = "An image showing a long stone brick hallway."
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
        // Hidden door room.
        case "hiddenDoorRoom" : {
            stateText = "A secret door at the end of the dark hallway slides open revealing a treasure chest!"
            currentImage = "images/hiddenDoorRoom.jpg"
            imageAltText = "An image showing a treasure chest laying a top a pile of golden treasure."
            buttonsTextList = [
                "Collect your reward!"
            ]
            buttonsNextStateList = [
                "winRoom"
            ]
            break;
        }
        // Pitfall trap room.
        case "pitFallTrap" : {
            stateText = "The floor caves in from under you! It was a trap! Game Over."
            currentImage = "images/pitFallTrap.jpg"
            imageAltText = "An image showing a knight falling into a pit."
            buttonsTextList = [
                "Game Over."
            ]
            buttonsNextStateList = [
                "gameOver"
            ]
            break;
        }
        // Win screen.
        case "winRoom" : {
            stateText = "You found the hidden treasure! You Win!"
            currentImage = "images/winRoom.jpg"
            imageAltText = "An image showing a pile of gold treasure."
            buttonsTextList = [
                "Restart?"
            ]
            buttonsNextStateList = [
                "outsideDungeon"
            ]
            break;
        }
        // Game over screen.
        case "gameOver" : {
            stateText = "Game Over!"
            currentImage = "images/gameOver.png"
            imageAltText = "An image displaying the words Game Over in a pixelated font."
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
    roomImage.src = currentImage
    roomImage.alt = imageAltText


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
