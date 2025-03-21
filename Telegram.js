const { axiosInstance } = require("./axios");

function sendMessage(messageObj, messageText){
    return axiosInstance.get("sendMessage", {
        chat_id: messageObj.chat.id,
        text: messageText,
    });
}


function handleMessage(messageObj){
    const messageText = messageObj.text || "";

    if(messageText.charAt(0) === "/"){
       const command = messageText.substr(1);
       switch(command){
           case "start":
               return sendMessage(
                     messageObj,
                     {messageText : "Welcome to the bot. Type /help to get the list of commands"}
               );
    
               default : 
               return sendMessage(messageObj, "I don't understand this command");
            }

    }   

    else{
        return sendMessage(messageObj, messageText);
    }
}


module.exports = {handleMessage};