module.exports = {
    name: "clear",
    description: "Deletes messages.",
    execute(message, args) {
        if (!message.member.permissions.has("ManageMessages"))
            return message.reply("❌ You do not have permission to delete messages.");

        const amount = parseInt(args[0]);
        if (!amount || amount < 1 || amount > 100)
            return message.reply("❌ Please specify a number between 1 and 100.");

        message.channel.bulkDelete(amount, true)
            .then(() => message.reply(`✅ Deleted ${amount} messages.`))
            .catch(err => message.reply("❌ Failed to delete messages."));
    }
};
