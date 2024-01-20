var messages = [];

function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var messageText = messageInput.value;

    if (messageText.trim() !== "") {
        var senderName = "Sender";
        var senderColor = getRandomColor(); // للحصول على لون عشوائي

        var newMessage = {
            sender: senderName,
            text: messageText,
            timestamp: new Date().toLocaleString(),
            color: senderColor
        };

        messages.push(newMessage);
        displayMessages();
        messageInput.value = "";
        scrollToBottom();
    }
}

function displayMessages() {
    var chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";

    messages.forEach(function (message) {
        var messageContainer = document.createElement("div");
        messageContainer.className = "message";

        var avatar = document.createElement("div");
        avatar.className = "avatar";
        avatar.style.backgroundColor = message.color;

        var senderInfo = document.createElement("div");
        senderInfo.className = "sender-info";
        senderInfo.textContent = message.sender + " - " + message.timestamp;

        var messageText = document.createElement("div");
        messageText.className = "message-text";
        messageText.textContent = message.text;

        messageContainer.appendChild(avatar);
        messageContainer.appendChild(senderInfo);
        messageContainer.appendChild(messageText);

        chatMessages.appendChild(messageContainer);
    });
}

function scrollToBottom() {
    var chatMessages = document.getElementById("chat-messages");
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
