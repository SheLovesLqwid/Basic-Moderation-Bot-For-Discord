const config = require('../config.json');

let spamMap = new Map();

module.exports = {
    name: "messageCreate",
    execute(message) {
        if (message.author.bot) return;

        let userSpam = spamMap.get(message.author.id) || { count: 0, lastMessage: Date.now() };
        let timeDiff = Date.now() - userSpam.lastMessage;

        if (timeDiff < config.antiSpamTime) {
            userSpam.count++;
            if (userSpam.count > config.antiSpamLimit) {
                message.member.timeout(60000, "Spamming");
                message.channel.send(`⚠️ ${message.author} has been muted for spam.`);
            }
        } else {
            userSpam.count = 1;
        }

        userSpam.lastMessage = Date.now();
        spamMap.set(message.author.id, userSpam);
    }
};
