"use strict";

// url =>  https://ehbchatapp.herokuapp.com/

const chat = {
    author: "yourName",
    init() {
        this.fetchMessages();
    },
    sendMessage() {
    },
    fetchMessages() {
        fetch('https://dev2chat.onrender.com/messages')
        .then(function(response){
            return response.json();
        })
        .then(function(all){
            console.log(all);
            let message = all [0];
            console.log(message);
            chat.renderMessage(message);
        })
    },
    renderMessage(message) {
        const htmlString = `
        <div class="messageItem">
          <div class="header">
              <span class="author">${message.author}</span>
              <span class="time">${message.created_at}</span>
          </div>
          <p>
              ${message.message}
          </p>
      </div>
      </div>`
    }

}
chat.init()