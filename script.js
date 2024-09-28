document.getElementById("infojs").style.backgroundColor = "orange";
document.getElementById("infojs").style.fontSize = "150%";

document.getElementById("header-title").innerText = "Trains For Sale";
document.querySelector("#description1").style.textAlign = "justify";
document.querySelector(".description1").style.textAlign = "justify";


let submit = document.getElementById("rating");
let newDiv = document.createElement("div");
let newButton = document.createElement("button");
newButton.textContent = "Rate Me!";
newButton.style.color = "black";
newButton.style.border = "1px";
newButton.style.marginTop= "10px";
newButton.style.padding = "10px";
newButton.style.borderRadius = "15px";
newButton.style.backgroundColor = "orange";
newButton.style.fontWeight = "bold";
newButton.style.fontSize = ".8em";

submit.appendChild(newDiv);
newDiv.appendChild(newButton);

function rating(){
    alert("Choooo Choooo!");
}

newButton.addEventListener('click', rating);