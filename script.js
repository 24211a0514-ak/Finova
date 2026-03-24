function showPage(pageId){

let pages = document.querySelectorAll(".page");

pages.forEach(function(page){
page.style.display = "none";
});

document.getElementById(pageId).style.display = "block";
}
function login(){

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;

if(user === "admin" && pass === "1234"){

document.getElementById("loginPage").style.display = "none";
document.getElementById("mainApp").style.display = "block";

}
else{
alert("Invalid login credentials");
}

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
// 📊 PIE CHART
let pieCtx = document.getElementById("pieChart");

new Chart(pieCtx, {
type: 'pie',
data: {
labels: ['Food', 'Rent', 'Travel', 'Subscriptions'],
datasets: [{
data: [5000, 15000, 7000, 5000]
}]
}
});


// 📈 BAR CHART
let barCtx = document.getElementById("barChart");

new Chart(barCtx, {
type: 'bar',
data: {
labels: ['Week1', 'Week2', 'Week3', 'Week4'],
datasets: [{
label: 'Expenses',
data: [8000, 9000, 7000, 8000]
}]
}
});
}