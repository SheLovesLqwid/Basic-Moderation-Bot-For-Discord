
# **🚨 Basic Moderation Bot**  

A simple **Discord moderation bot** that allows server admins to **warn, kick, ban, mute, and unmute users** easily.  

---

## **📌 Features**  
✅ **Warn, Kick, Ban, Mute, and Unmute users**  
✅ **No database required** – Plug and play!  
✅ **Permission-based commands** (only mods/admins can use them)  
✅ **Lightweight and easy to use**  

---

## **📥 Installation**  

### **1️⃣ Prerequisites**  
- ✅ **[Node.js](https://nodejs.org/) v16+**  
- ✅ A **Discord bot token** from the [Discord Developer Portal](https://discord.com/developers/applications)  

### **2️⃣ Install & Run**  
1. **Clone the bot**:  
   ```bash
   git clone https://github.com/SheLovesLqwid/BasicModBot.git
   cd BasicModBot
   ```
2. **Install dependencies**:  
   ```bash
   npm install
   ```
3. **Configure the bot**:  
   - Open **`config.json`** and enter your bot token:  
   ```json
   {
       "token": "your-bot-token",
       "prefix": "!"
   }
   ```
4. **Start the bot**:  
   ```bash
   node bot.js
   ```

---

## **🛠 Commands**  

| Command | Description | Usage |
|---------|------------|--------|
| `!warn @user [reason]` | Warns a user | `!warn @User123 Spamming` |
| `!kick @user [reason]` | Kicks a user | `!kick @User123 Toxic behavior` |
| `!ban @user [reason]` | Bans a user | `!ban @User123 Cheating` |
| `!mute @user` | Mutes a user | `!mute @User123` |
| `!unmute @user` | Unmutes a user | `!unmute @User123` |

---

## **🛠 Troubleshooting**  
**Bot is not responding?**  
✅ Make sure the bot has `MESSAGE_CONTENT` and `GUILD_MESSAGES` intents enabled.  
✅ Check the bot’s role and permissions in Discord.  

---

## **📜 License**  
Free to use and modify!  

---

## **📢 Need Help?**  
Join our **[Discord Server](https://discord.gg/4W9a9ynbuP)** for support! 🚀  
