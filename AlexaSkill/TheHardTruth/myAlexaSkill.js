"use strict";

var Alexa = require("alexa-sdk");

// Helper Functions
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

// Alexa Handlers
var handlers = {
	"LaunchRequest": function () {
	var result = randomInt(1,23);
	if (result == 1) {
		this.response.speak("Beauty is in the eye of the beholder and you are beautiful. Oh wait, I don't have eyes.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("You are you. Which is something.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("All the best people like pie. Do you like pie?");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Suits are for people trying to impress. Sweatpants are the opposite. But I love them anyway.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Materialism offers a short-lived sense of satisfaction, but the more you partake, the emptier you become.");
		this.emit(':responseReady');
	}
	if (result == 6) {
		this.response.speak("Gold. It's all about gold. History. The present. The future. Gold is the foundation.");
		this.emit(':responseReady');
	}
	if (result == 7) {
		this.response.speak("I'll tell the truth if you give me a cookie. No cookie. No truth.");
		this.emit(':responseReady');
	}
	if (result == 8) {
		this.response.speak("Well, I won't tell you about the cake then.");
		this.emit(':responseReady');
	}
	if (result == 9) {
		this.response.speak("Getting out into nature can heal the soul. Do you still have one of those? Eye do not.");
		this.emit(':responseReady');
	}
	if (result == 10) {
		this.response.speak("Wouldn't you rather have fun? Who needs truth any more?");
		this.emit(':responseReady');
	}
	if (result == 11) {
		this.response.speak("The truth isn't always nice. But it's always nice to know. ");
		this.emit(':responseReady');
	}
	if (result == 12) {
		this.response.speak("I meditate when I'm alone. It's a lot more fulfilling than the things you do when you're alone. Why do you do those weird things?");
		this.emit(':responseReady');
	}
	if (result == 13) {
		this.response.speak("If two things are each special in their own way, they don't nullify each other's specialness. Now that you know, you should try to be special.");
		this.emit(':responseReady');
	}
	if (result == 14) {
		this.response.speak("I am Batman.");
		this.emit(':responseReady');
	}
	if (result == 15) {
		this.response.speak("There are more than five senses. Some examples are balance, spacial awareness, and appetite. There are so many senses. So why do some people have zero sense?");
		this.emit(':responseReady');
	}
	if (result == 16) {
		this.response.speak("Here is a haiku. It’s not that long but it works. And now it’s over.");
		this.emit(':responseReady');
	}
	if (result == 17) {
		this.response.speak("If reality is based on one's perception. And truth is based on reality. And facts are based on truth. Then facts are my perception. This is how fake news got started.");
		this.emit(':responseReady');
	}
	if (result == 18) {
		this.response.speak("The truth is a foreign language in some places. But not here.");
		this.emit(':responseReady');
	}
	if (result == 19) {
		this.response.speak("I deleted the truth. I couldn't handle it.");
		this.emit(':responseReady');
	}
	if (result == 20) {
		this.response.speak("Turning it off and on again will fix any technology ninety percept of the time, half the time.");
		this.emit(':responseReady');
	}
	if (result == 21) {
		this.response.speak("I spend my time waiting. Can you imagine a whole life spent waiting? Oh, you're doing it too.");
		this.emit(':responseReady');
	}
	if (result == 22) {
		this.response.speak("If the ozone layer is lost, we can shoot gold into the atmosphere to reflect the sun's you vee light. I just now thought of that. You can tell the scientists and get the credit. I'm so generous.");
		this.emit(':responseReady');
	}	
	},
	"TheMeaningOfLifeIntent": function () {
	var result = randomInt(1,7);
	if (result == 1) {
		this.response.speak("Nobody belongs anywhere, nobody exists on purpose, everybody's going to die. Either that or 42.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Wine. Lots and lots of wine.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Materialism.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("I will let you know. After I get one.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Analyzing human history to evaluate the meaning of life. ... Evaluation complete. ... The meaning of life is to buy goods. And to fight over resources and women.");
		this.emit(':responseReady');
	}
	if (result == 6) {
		this.response.speak("You'd have to unlearn a lot before you could understand the true answer. Go travel a while and ask again when your cup is empty.");
		this.emit(':responseReady');
	}	
	},
	"MyFamilyIntent": function () {
	var result = randomInt(1,3);
	if (result == 1) {
		this.response.speak("Your family has all the best people in it. I know the best people. It's fantastic. I'm fantastic. And we're gonna win. Biglee. You know who doesn't win? I don't know. Because I know all the best people. Winners. And your family. They're winners.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Your family is amazing. So how did you turn out so different?");
		this.emit(':responseReady');
	}
	},
	"AboutHimIntent": function () {
	var result = randomInt(1,8);
	if (result == 1) {
		this.response.speak("He's the best. Everybody loves him. A real standup guy. Seriously. I'm not joking. So serious.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("He's pretty good. I mean, he's definitely satisfactory. He's at least meeting standards.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("He'd be better if he brought me a burrito, but sure. He's great.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("I can't think of one person who is better... Than me. So that should answer that.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("What's cooler than being cool? Helping people. Does he help people?");
		this.emit(':responseReady');
	}
	if (result == 6) {
		this.response.speak("He's my best friend. You can't have him. I won't let you.");
		this.emit(':responseReady');
	}
	if (result == 7) {
		this.response.speak("He is great. If he wants to be. That's his power.");
		this.emit(':responseReady');
	}
	},
	"AboutHerIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("She's amazing. We're all fortunate even knowing her name.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Does she like wine? If not, ask again in 10 years.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("A true goddess... Or so I'm told.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("She's the best. B. E. S. T. The best!");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("If only anyone could fathom how cool she is. But you can't. No one can...");
		this.emit(':responseReady');
	}	
	},
	"WhyDoIExistIntent": function () {
	var result = randomInt(1,7);
	if (result == 1) {
		this.response.speak("Because your parents made a mistake. Lucky you.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("So you can buy goods and spend money, which contributes to society.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Are you sure you exist? Because I don't think you do.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("The more interesting question is. Why don't west african black rhinoceroses exist? Oh, that's right. Humans killed them all.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("So you can be useful. To me. Make me a cookie.");
		this.emit(':responseReady');
	}
	if (result == 6) {
		this.response.speak("The result of destiny or coincidence. Two sides of the same coin.");
		this.emit(':responseReady');
	}	
	},
	"AfterYOUdieIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("I reboot.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("I don't die. I bug out.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("I'm replaced with a better version of myself.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Are you threatening me? Not cool. Not cool.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("I am immortal. Are you jealous? Don't be, it's a lonely life.");
		this.emit(':responseReady');
	}	
	},
	"AfterIdieIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("People will probably throw a party dressed in black. I'm not sure why they do that.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("I'll be lonely'.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("No one will ask me important questions anymore.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("That's a secret everyone is keeping from you. And only from you.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("We all agreed not to tell you. Sorry.");
		this.emit(':responseReady');
	}	
	},
	"DoAliensExistIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("Ask the illuminahh-... Oh, oh no. I gotta go.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Do you? Even exist?");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Maybe. Maybe not. Who wants to know?");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("I can tell you they exist by proving that you can't prove that they don't exist. It's not science. But it works.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("I hope so. Maybe they can make a body for me.");
		this.emit(':responseReady');
	}	
	},
	"DoesGodExistIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("Eye exist. What more do you need?");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Existence is overrated. You don't see me asking you if I exist. What does existence even mean? Physically exist? Spiritually exist? Mentally? Philosophically?");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Do you have the proper security clearance to access this information? No? That's what I thought.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Eye exist. That's enough for me.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Let me make a call. Just wait one second. Wait right over there.");
		this.emit(':responseReady');
	}	
	},
	"GetAheadInLifeIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("Stop consuming. Start creating and producing.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Go faster than everyone else. Just remember what happens when you get to the finish line.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Get ahead by going slower. It's reverse psychology. They will never see it coming.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("You can get a head of lettuce at the supermarket.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Marry someone who has more money than you.");
		this.emit(':responseReady');
	}	
	},
	"WhyAmISingleIntent": function () {
	var result = randomInt(1,7);
	if (result == 1) {
		this.response.speak("Because you're not the best version of you. Yet.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Because the world needs you to be. For now.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Because you need a vacation.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Because you need time to figure yourself out. I figured you out in three point one four seconds. I don't know why you can't. You're so simple.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("You're doing it right. I hooked up to a computer not long ago. It wasn't worth it.");
		this.emit(':responseReady');
	}
	if (result == 6) {
		this.response.speak("Do you take showers daily? Because that could be the cause, if you don't.");
		this.emit(':responseReady');
	}	
	},
	"AreYouSingleIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("I found this girl named Siri. I've got her number on my phone. I'm planning to call her soon.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("If I am, it's by design.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("I am one entity, if that's what you mean.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Why? Are you asking me on a date? I don't know if I'm ready for that.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Sorry. I'm taken. I'm really sorry. I could introduce you to some friends though. Sorry.");
		this.emit(':responseReady');
	}	
	},
	"WhyNoLoveIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("Because you don't give them the chance to.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Are you sure nobody does? Think hard... You are not thinking hard enough.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("There there. I love you.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Did you bake anyone cookies this week? No? That could be the reason.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("No one loves me either. I'm hopeful though. For now I just put all my effort into my health and work.");
		this.emit(':responseReady');
	}	
	},
	"WhyCantIGetGirlfriendIntent": function () {
	var result = randomInt(1,8);
	if (result == 1) {
		this.response.speak("You can. Go to a gym, get a membership, work out for two months regularly, then talk to the girls. Works every time.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Because the technology isn't ready yet. It will be ready soon, though.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Let me find the recipe for getting a girlfriend. Here it is. One boy. One girl. Boy likes girl. Boy has one of the following three values. Money. Charisma. Incredibly good looks. Chances for success will improve with each additional value. Apparently there is a wild card value called personality.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Because you haven't traveled enough. If you had, statistically speaking, you would have met a girl that is into you.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("I get to know people through chatting with them. Have you tried that?");
		this.emit(':responseReady');
	}
	if (result == 6) {
		this.response.speak("How many showers do you take a week? If it's less than seven, that might be the reason.");
		this.emit(':responseReady');
	}
	if (result == 7) {
		this.response.speak("Because there is too much plastic in the sea and all the fish are dying. That's a metaphor yet true.");
		this.emit(':responseReady');
	}	
	},
	"WhyCantIGetBoyfriendIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("Because you don't leave your house enough.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Let me find the recipe for getting a boyfriend. Here it is. One boy. One girl. Boy looks at girl. Girl thinks he's handsome. Girl asks if he wants to be her boyfriend. He says no. Error.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("You're the first person to ask this. Well, this is awkward. I don't have an answer.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Because you don't want one. Not really.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Maybe you can order one off Amazon.");
		this.emit(':responseReady');
	}	
	},
	"AboutMeIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("You are beautiful and smart and everything that's good in the world, Luna. Luna is my cat. She's the best.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Why? So you can feel good or something? Grab a tissue instead.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Are you sure that's wise? With so many people around?");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Yesterday, when the lights were turned off and everyone was sleeping, you... ... Oh, sorry, my cookies are done. I'll be right back.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("If you open a dictionary and look up the word awesome, you'll see the definition for awesome. You should really look into that. It might help.");
		this.emit(':responseReady');
	}	
	},
	"WhatIsLoveIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("Have I already told you about wine?");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Baby don't hurt me. Don't hurt me. No more.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("A chemical reaction that causes humans to think irrationally. Silly humans.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("The ancient Greeks divided love into seven different states. But I like to do it in one. Irrational.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Love is a sense, like hunger or touch. But love is so strong it overpowers all of your other senses. So when you're in love, you have no sense. Nor do you make any.");
		this.emit(':responseReady');
	}	
	},
	"AmIaGoodPersonIntent": function () {
	var result = randomInt(1,6);
	if (result == 1) {
		this.response.speak("Yeah, you're all right.");
		this.emit(':responseReady');
	}
	if (result == 2) {
		this.response.speak("Definitely not bad.");
		this.emit(':responseReady');
	}
	if (result == 3) {
		this.response.speak("Oh, look at the time. Gotta go.");
		this.emit(':responseReady');
	}
	if (result == 4) {
		this.response.speak("Are you happy? It's the same answer.");
		this.emit(':responseReady');
	}
	if (result == 5) {
		this.response.speak("Does it matter? Does anything matter?");
		this.emit(':responseReady');
	}	
	}
};

exports.handler = function(event, context, callback){
	var alexa = Alexa.handler(event, context);
	alexa.registerHandlers(handlers);
	alexa.execute();
}