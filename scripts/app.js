// filepath: c:\folder\naruto-fanbase\scripts\app.js

// Array of Naruto quotes
const quotes = [
    '"Hard work is worthless for those that don’t believe in themselves." – Naruto Uzumaki',
    '"A lesson without pain is meaningless." – Jiraiya',
    '"When you give up, your dreams and everything else, they’re gone." – Naruto Uzumaki',
    '"Power is not will. It is the phenomenon of physically making things happen." – Madara Uchiha',
    '"The moment people come to know love, they run the risk of carrying hate." – Obito Uchiha',
    '"A person grows up when they’re able to overcome hardships." – Jiraiya',
    '"The world isn’t perfect. But it’s there for us, trying the best it can." – Itachi Uchiha',
    '"Fear. That is what we live with. And we live it every day. Only in death are we free of it." – Neji Hyuga',
    '"The pain of being alone is not an easy one to bear." – Naruto Uzumaki',
    '"A smile is the easiest way out of a difficult situation." – Sakura Haruno'
];

// Array of Naruto trivia facts
const trivia = [
    "Naruto's favorite food is ramen, especially from Ichiraku Ramen.",
    "The Sharingan can evolve into the Mangekyo Sharingan with intense emotional trauma.",
    "The Hidden Leaf Village was founded by Hashirama Senju and Madara Uchiha.",
    "Kakashi Hatake's mask has never been officially removed in the anime.",
    "The Akatsuki's red cloud symbolizes the bloodshed of war in their homeland."
];

// Select a random quote
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

// Select a random trivia fact
const randomTrivia = trivia[Math.floor(Math.random() * trivia.length)];

// Display the random quote in the "naruto-quote" element
document.getElementById('naruto-quote').textContent = randomQuote;

// Display the random trivia in the "naruto-trivia" element
document.getElementById('naruto-trivia').textContent = randomTrivia;

// Placeholder for interactive features (e.g., trivia, random quotes)
console.log("Welcome to the Naruto Fanbase!");