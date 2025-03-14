const { PermissionsBitField } = require('discord.js');
const config = require('../config.json');

module.exports = {
    name: "mute",
    description: "Mutes a user.",
    execute(message, args) {
        if (!message.member.permissions.has(PermissionsBitField.Flags.ManageRoles)) 
            return message.reply("❌ You do not have permission to mute members.");
        
        const user = message.mentions.members.first();
        if (!user) return message.reply("❌ Please mention a valid user.");

        let muteRole = message.guild.roles.cache.find(role => role.name === config.muteRole);
        if (!muteRole) return message.reply("❌ Mute role not found. Please create one.");

        user.roles.add(muteRole).then(() => message.reply(`✅ ${user} has been muted.`))
            .catch(err => message.reply("❌ Failed to mute user."));
    }
};
