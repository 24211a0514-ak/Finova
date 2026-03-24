function showPage(pageId){

let pages = document.querySelectorAll(".page");

pages.forEach(function(page){
page.style.display = "none";
});

document.getElementById(pageId).style.display = "block";
}


// CHATBOT FUNCTION
function sendMessage() {

let input = document.getElementById("userInput").value;
let chatBox = document.getElementById("chatBox");

let userMessage = document.createElement("div");
userMessage.className = "user";
userMessage.innerText = input;
chatBox.appendChild(userMessage);

let botReply = "";

if(input.toLowerCase().includes("save")){
botReply = "Reduce food and subscription expenses.";
}
else if(input.toLowerCase().includes("spending")){
botReply = "Your spending is higher on weekends.";
}
else{
botReply = "Track expenses regularly.";
}

let botMessage = document.createElement("div");
botMessage.className = "bot";
botMessage.innerText = botReply;
chatBox.appendChild(botMessage);

document.getElementById("userInput").value = "";
}


// SMART INSIGHT
window.onload = function(){

let expense = 32000;
let insight = "";

if(expense > 30000){
insight = "⚠️ You are overspending this month";
}
else{
insight = "✅ Spending is under control";
}

document.getElementById("insightText").innerText = insight;

}