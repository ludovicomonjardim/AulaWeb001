const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6384072559:AAFptkRHdwRTDji3y1RQk_fgxJafe8Vgel0';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/start/, (msg) => {

    bot.sendMessage(msg.chat.id, "Well come Godim");
    
    console.log(msg.text)
});


// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
    if (msg.text.toUpperCase() === "EI.") {
        bot.sendMessage(chatId, 'Ei é o caralho, viado!');
    }
    else if (msg.text.toUpperCase() === "QUALÉ"){
        bot.sendMessage(chatId, 'Agora, sim');

    }
    else {
        bot.sendMessage(chatId, 'Received your message');
    }


  // send a message to the chat acknowledging receipt of their message
  
});