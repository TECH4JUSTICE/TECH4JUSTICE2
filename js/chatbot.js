function sendMessage(){

let input=document.getElementById("chat-input")
let chat=document.getElementById("chat-window")

let user=document.createElement("div")
user.className="user-message"
user.innerText=input.value

chat.appendChild(user)

let bot=document.createElement("div")
bot.className="bot-message"
bot.innerText="Chatbot integration will be connected later."

chat.appendChild(bot)

chat.scrollTop=chat.scrollHeight

input.value=""

}
