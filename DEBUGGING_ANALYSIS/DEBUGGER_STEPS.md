### DEBUGGING 

## Changing states

# outsideDungeon -> dungeonHall
The ChangingStateToHall 1 & 2 screenshots show how when the answer buttons are clicked the state is changed to the next state. It shows that on the first line the currentState = "outsideDungeon" and is then set to the next state based on the button pressed in this case it was equal to "dungeonHall". Then it is rendered based on the currentState. This is important because its the first state change after making a choice.

# Secret Room -> Win Room
The WinToSecret 1 & 2 screenshots show how when the answer buttons are clicked the state is changed to the next state. It shows that on the first line the currentState = "HiddenDoorRoom" and is then set to the next state based on the button pressed in this case it was equal to "winRoom". Then it is rendered based on the currentState. This is a important aspect of the code as its the only way to win the game.

## Updating website based on state
The update website screenshots 1 & 2 show how when the renderQuestion function is called the variables representing the values of the current state are updated. They show how the variables are equal to empty values at first but as the state is updated through the switch case statement they change to represent the state. HTML elements are then updated based on these variables.

 