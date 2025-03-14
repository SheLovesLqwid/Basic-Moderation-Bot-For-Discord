const { PermissionsBitField } = require('discord.js');

module.exports = {
    /**
     * Checks if a user has the required permissions.
     * @param {Interaction} interaction - The interaction from Discord.
     * @param {Array} requiredPermissions - An array of required permissions.
     * @returns {Boolean} - True if the user has permissions, false otherwise.
     */
    hasPermissions: (interaction, requiredPermissions) => {
        if (!interaction.member.permissions.has(requiredPermissions)) {
            interaction.reply({ 
                content: "❌ You don't have permission to use this command.", 
                ephemeral: true 
            });
            return false;
        }
        return true;
    }
};
