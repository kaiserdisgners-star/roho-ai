const chatBox = document.getElementById("chat-box");
const emotionBox = document.getElementById("emotion");
const typing = document.getElementById("typing");

function detectEmotion(text){

  text = text.toLowerCase();

  if(
    text.includes("happy") ||
    text.includes("good") ||
    text.includes("great")
  ){
    return {
      emotion:"Joy 😊",
      reply:"I am happy to hear that 🌟"
    };
  }

  if(
    text.includes("sad") ||
    text.includes("lonely")
  ){
    return {
      emotion:"Sadness 😔",
      reply:"I am here for you 💙"
    };
  }

  if(
    text.includes("angry") ||
    text.includes("mad")
  ){
    return {
      emotion:"Anger 😡",
      reply:"Take a deep breath. I understand."
    };
  }

  if(
    text.includes("fear") ||
    text.includes("scared")
  ){
    return {
      emotion:"Fear 😨",
      reply:"You are safe. Stay calm."
    };
  }

  return {
    emotion:"Neutral 😐",
    reply:"Tell me more about that."
  };
}

function addMessage(text,sender){

  const div = document.createElement("div");

  div.classList.add("message");
  div.classList.add(sender);

  div.innerText = text;

  chatBox.appendChild(div);

  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage(){

  const input = document.getElementById("input");

  const text = input.value.trim();

  if(!text) return;

  addMessage(text,"user");

  input.value = "";

  const result = detectEmotion(text);

  emotionBox.innerText =
    "Emotion: " + result.emotion;

  typing.style.display = "block";

  setTimeout(()=>{

    typing.style.display = "none";

    addMessage(result.reply,"ai");

  },1200);
}

document
.getElementById("input")
.addEventListener("keypress",function(e){

  if(e.key === "Enter"){
    sendMessage();
  }

});
