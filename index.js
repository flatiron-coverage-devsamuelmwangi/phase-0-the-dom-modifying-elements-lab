// Write your code here!
// Removing the node element here 
document.querySelector("main#main").remove();

// Creating a new element and assigning it to newHeader 
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Samuel is the champion!";
newHeader.className = "victory";
