// This and 
/* This both the comments are allowed in JavaScript*/
//this ode is to change the image


var myImage = document.querySelector("img");

myImage.onclick = function()
{
	var mySrc = myImage.getAttribute("src");
	if(mySrc === "images/firefox-icon.png")
	{
		myImage.setAttribute("src","images/firefox2.png");
	}
	else
	{
    	myImage.setAttribute("src","images/firefox-icon.png");	
	}
}


var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
	var myName = prompt("Please , Enter your name !");
	localStorage.setItem("name",myName);
	myHeading.textContent = "Mozilla is cool, " + myName ;
}

if(!localStorage.getItem("name"))
{
	setUserName();
}
else
{
	var stoaredName = localStorage.getItem("name");
	myHeading.textContent = "Mozilla is cool, " + stoaredName;
}

myButton.onclick = function(){
	setUserName();
}


// this was old code
/*
var myHeading = document.querySelector("h1");
myHeading.textContent  = "Hello World !";



document.querySelector("html").onclick = function(){
	alert("This was a mouse click");
}*/