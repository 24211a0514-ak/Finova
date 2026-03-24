function sendMessage() {

let input = document.getElementById("userInput").value;

let chatBox = document.getElementById("chatBox");

let userMessage = document.createElement("div");
userMessage.className = "user";
userMessage.innerText = input;

chatBox.appendChild(userMessage);

let botMessage = document.createElement("div");
botMessage.className = "bot";
botMessage.innerText = "AI response coming soon...";

chatBox.appendChild(botMessage);

document.getElementById("userInput").value = "";
}