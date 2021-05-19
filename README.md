# **Discord Multipurpose**

This is a package to help make development of Discord.js bots easier. Also has Type Declarations!

# Installation
```sh
$npm i discord-multipurpose@latest
```

That should install the package to your project

# Modules & Usage

- #### Discord Emoji
```js
const { DiscordEmoji } = require("discord-multipurpose");

console.log(DiscordEmoji.food.apple);
// Logs "🍎"
```

- #### Discord Image Manipulation
	- Methods
		- **ping**: 
			- Draws a Discord ping across the user's image
			- **Parameters**: 
				- avatar *(Type: string | Buffer, Required: true)*: The avatar of the user
				<imb src="/Tests/Image/Ping.png" alt="Ping">

		- **fakeReply**:
			- Draws a fake reply yk
			- **Parameters**:
				- avatar1 *(Type: string | Buffer, Required: true)*: The avatar of the user who is replying
				- avatar2 *(Type: string | Buffer, Required: true)*: The avatar of the user being replied to
				- username1 *(Type: string, Required: true)*: The nickname/username of the user who is replying
				- username2 *(Type: string, Required: true)*: The nickname/username of the user who is being replied to
				- messageText *(Type: string, Required: true)*: The content of the sent message
				- replyText *(Type: string, Required: true)*: The content of the replied message
				- hex1 *(Type: string, Required: false)*: The colour of the role of the replying user
				- hex2 *(Type: string, Required: false)*: The colour of the role of the replying user
				- mode *(Type: string, Options: 'light', 'dark', Required: false, default: dark)*: The mode you want the stuff to be displayed in
				<img src="/Tests/Image/FakeReply-light.png" alt="FakeReply-light">
				<img src="/Tests/Image/FakeReply-dark.png" alt="FakeReply-dark">
	- Example
		```js
		const { Image } = require("discord-multipurpose");
		const { Client, MessageAttachment } = require("discord.js");

		const client = new Client();

		client.on("ready", () => console.log(`Logged in as ${client.user.tag}!`));

		client.on("message", async (message) => {
			if(message.author.bot) return;

			if(message.content.toLowerCase() === ">ping") {
				const ping = await Image.ping(message.author.displayAvatarURL({ format: 'png' }));
				return message.channel.send(new MessageAttachment(ping, "ping.png"));
			}
		});
		```


# Post Script
> ### ℹ️ Contact me at `SpiderBro#8604`

> Feel free to make an issue or a PR in the GitHub [Repository](https://github.com/SpiderMath/Discord-Multipurpose)