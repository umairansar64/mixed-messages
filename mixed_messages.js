
const beginnings = ["Trust me,", "The stars suggest", "As fate has it,", "Believe this,"];
const middles = ["the path is clear.", "proceed with caution.", "great fortune awaits.", "the outcome is uncertain."];
const endings = ["Act without delay.", "Trust your instincts.", "Consult the stars again.", "Choose with your heart."];

const randomBeginning = beginnings[Math.floor(Math.random() * beginnings.length)];
const randomMiddle = middles[Math.floor(Math.random() * middles.length)];
const randomEnding = endings[Math.floor(Math.random() * endings.length)];

const advice = `${randomBeginning}\n${randomMiddle}\n${randomEnding}`;

console.log(advice);