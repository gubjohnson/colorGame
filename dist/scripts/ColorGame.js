var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
	}
});

resetButton.addEventListener("click", function(){
	//change new random color number.
	colors = generateRandomColors(numSquares);
	//pick the new color for practice.
	pickedColor = pickColor();
	//show the new color number in colorDisplay.
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	//change all 6 squares to new colors.
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];

	}
	//change h1 back to dark grey color.
	h1.style.backgroundColor = "steelblue";

});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		
		var clickedColor =  this.style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try agian";
		}

	});
}

function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make a array.
	var arr = [];
	//get random number and put in this array.
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return the array to colors.
	return arr;
}

function randomColor(){
	//grab red color from 0 to 255.
	var r = Math.floor(Math.random() * 256);
	//grab green color from 0 to 255.
	var g = Math.floor(Math.random() * 256);
	//grab blue color from 0 to 255.
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}