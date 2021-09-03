var choices = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3);
var CompChoice = choices[i];
var UserPoints = 0;
var ComPoints = 0;


function main(UserChoice)
{
	var user = document.getElementById("userResult");
	user.innerHTML = display(UserChoice);
	var comp = document.getElementById("compResult");
	comp.innerHTML = display(CompChoice);

	if(UserChoice === "paper" && CompChoice === "rock" || UserChoice === "rock" && CompChoice === "scissors" ||
	 UserChoice === "scissors" && CompChoice === "paper")
	{
		win();
	}
	else if(UserChoice === CompChoice)
	{
		draw();
	}
	else
	{
		lose();
	}
	function computerGame()
	{
		 i = Math.floor(Math.random() * 3);
		 CompChoice = choices[i];
	}
	setTimeout(computerGame, 1200);

	userScore.innerText = UserPoints;
    compScore.innerText = ComPoints;
}

function display(choose)
{
	if(choose === "rock") 
		return '<img src="img/hand-rock-regular.svg" alt="">';
	else if(choose === "paper") 
		return '<img src="img/hand-paper-regular.svg" alt="">';
	else 
		return '<img src="img/hand-scissors-regular.svg" alt="">';
}

function win()
{
	UserPoints++;
    document.getElementById("result_text").innerHTML = "You win!";
}
function draw()
{
	document.getElementById("result_text").innerHTML = "It's a Draw.";
}
function lose()
{
	ComPoints++;
	document.getElementById("result_text").innerHTML = "You lose!";
}
function myFunction() {
	window.location.reload();
	alert("Do you want to Start New Game");
}