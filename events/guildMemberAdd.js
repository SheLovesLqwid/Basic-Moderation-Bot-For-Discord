module.exports = {
    name: 'guildMemberAdd',
    execute(member) {
        const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === "welcome");
        if (!welcomeChannel) return;

        welcomeChannel.send(`🎉 Welcome <@${member.id}> to **${member.guild.name}**!`);
        console.log(`✅ User ${member.user.tag} joined the server.`);
    }
};
