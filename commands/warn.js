const { hasPermissions } = require('../utils/permissions');

module.exports = {
    name: 'warn',
    description: 'Warns a user.',
    execute(message, args) {
        if (!hasPermissions(message, ['MANAGE_MESSAGES'])) return;

        const target = message.mentions.users.first();
        const reason = args.slice(1).join(' ') || "No reason provided.";

        if (!target) return message.reply("❌ Please mention a user to warn.");

        const warnMessage = `⚠️ **Warning:** <@${target.id}> \n**Reason:** ${reason}\n**Moderator:** <@${message.author.id}>`;
        message.channel.send(warnMessage);
        console.log(`⚠️ User ${target.tag} was warned by ${message.author.tag} for: ${reason}`);
    }
};
