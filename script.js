const messageContainer = {
  fortunePrediction: ["You will ear a lot of money", "You will lose a lot of money", "Your loved ones will leave you", "You will meet a new person that might love you a lot", "Many people will serve you", "You will encounter a problem in your work"],
  inspirationalMessage: ["We cannot solve problems with the kind of thinking we employed when we came up with them.", "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.", "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out", "When you change your thoughts, remember to also change your world", "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest", "Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together"],
  randomJoke: ["What do kids play when their mom is using the phone? Bored games", "What do you call an ant who fights crime? A vigilANTe!", "Why are snails slow? Because they’re carrying a house on their back.", "What’s the smartest insect? A spelling bee", "What does a storm cloud wear under his raincoat? Thunderwear.", "What is fast, loud and crunchy? A rocket chip.", "How does the ocean say hi? It waves!"]
};

const randomGenerator = num => {
  return Math.floor(Math.random() * num);
}

console.log(`Your Fortune Prediction = ${messageContainer['fortunePrediction'][randomGenerator(6)]}\n`);
console.log(`Inspirational Jokes For You = ${messageContainer['inspirationalMessage'][randomGenerator(6)]}\n`);
console.log(`A random not so funny joke :P = ${messageContainer['randomJoke'][randomGenerator(6)]}\n`);