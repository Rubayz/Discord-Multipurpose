import RandomElementFromArray from "../Util/Text/RandomElementFromArray";

const responses = [
	"It is certain",
	"It is decidedly so",
	"Without a doubt",
	"Yes definitely",
	"You may rely on it",
	"As I see it, yes",
	"Most likely",
	"Outlook Good",
	"Mos def",
	"Signs point to yes",
	"Reply hazy try again",
	"Ask again later",
	"Better not tell you now",
	"Cannot predict now",
	"Concentrate and ask again",
	"Don't count on it",
	"My reply is no",
	"My sources say no",
	"Outlook not so good",
	"Very Doubtful",
];

export default class Random {
	/**
	 * @param question The question you want to ask
	 */
	static eight_ball(question: string) {
		if(!question) throw new Error("Question not provided!");
		const response = RandomElementFromArray(responses);

		return {
			response,
			question,
		};
	}
};