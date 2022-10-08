

function getRemainderOrg(a,b) {
   return a % b;
}

// Convert to an arrow function
console.log("Oppgave 1:");

const getRemainder = (a,b) => a % b;

console.log("Reminder Org: " + getRemainderOrg(13, 5) );
console.log("Reminder: " + getRemainder(13, 5) );

