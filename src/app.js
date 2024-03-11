const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '6384072559:AAFptkRHdwRTDji3y1RQk_fgxJafe8Vgel0';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
    console.log(msg)

    if (msg.text.toUpperCase() === "EI.") {
        bot.sendMessage(chatId, 'Ei é o caralho, viado!');
    }
    else if (msg.text.toUpperCase() === "QUALÉ"){
        bot.sendMessage(chatId, 'Agora, sim!');
    }
    else {
        bot.sendMessage(chatId, 'Received your message');
    }


  // send a message to the chat acknowledging receipt of their message
  
});