const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Error!');
    }
  }
  const getComputerChoice = computerInput => {
      switch (Math.floor(Math.random()*3)){
      case 0:
      return 'rock';
        break;
      case 1:
      return 'paper';
        break;
      case 2:
      return 'scissors';
        break;
      default:
        console.log('error')
        break;
      }
    }
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice){
      return 'The game is a tie!'
    }
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'Computer wins!'
      } else {
        return 'User wins!'
      }
    }
    if (userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'Computer wins!'
      } else {
        return 'User wins!'
      }
    }
    if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Computer wins!'
      } else {
        return 'User Wins!'
      }
    }
    if (userChoice === 'bomb'){
      return 'User wins GG EZ'
    }
  }
  const playGame = () => {
    const userChoice = getUserChoice('bomb');
    const computerChoice = getComputerChoice();
    console.log('You chose ' + userChoice);
    console.log('Computer chose ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame()
  
  
  
  
  
  
  