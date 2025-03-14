const { PermissionsBitField } = require('discord.js');

module.exports = {
    name: "ban",
    description: "Bans a user.",
    execute(message, args) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.BanMembers)) 
            return message.reply("❌ You do not have permission to ban members.");
        
        const user = message.mentions.members.first();
        if (!user) return message.reply("❌ Please mention a valid user.");

        user.ban().then(() => message.reply(`✅ ${user} has been banned.`))
            .catch(err => message.reply("❌ Failed to ban user."));
    }
};
