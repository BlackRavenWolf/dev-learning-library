// Module 04
// Conditionals and Logical Operators
// Covers: if, else, &&, ||, !

const age = 20;
const hasTicket = true;
const isMember = false;

const results = [];

// Basic if / else
if (age >= 18) {
  results.push("Age check: You are an adult.");
} else {
  results.push("Age check: You are a minor.");
}

// Logical AND (&&)
// Both conditions must be true
if (age >= 18 && hasTicket) {
  results.push("Access granted: adult AND ticket.");
}

// Logical OR (||)
// At least one condition must be true
if (isMember || hasTicket) {
  results.push("Entry allowed: member OR ticket.");
}

// Logical NOT (!)
// Reverses a boolean value
if (!isMember) {
  results.push("User is NOT a member.");
}


// --------------------------------
// Console output (voor leren/debuggen)
// --------------------------------

for (let i = 0; i < results.length; i++) {
  console.log(results[i]);
}


// --------------------------------
// Output op de webpagina
// --------------------------------

const output = document.getElementById("output");

for (let i = 0; i < results.length; i++) {
  const li = document.createElement("li");
  li.textContent = results[i];
  output.appendChild(li);
}