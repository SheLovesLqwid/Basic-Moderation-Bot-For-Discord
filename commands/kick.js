const { PermissionsBitField } = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kicks a user.",
    execute(message, args) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.KickMembers)) 
            return message.reply("❌ You do not have permission to kick members.");
        
        const user = message.mentions.members.first();
        if (!user) return message.reply("❌ Please mention a valid user.");

        user.kick().then(() => message.reply(`✅ ${user} has been kicked.`))
            .catch(err => message.reply("❌ Failed to kick user."));
    }
};
