/*
Question 2
Make a call to the Rawg API.

Go to https://rawg.io/apidocs and get an API key which you’ll use as part of the endpoint you’re making an API call to.
You can use https://noroff.no/ for the URL and Noroff Assignment for the description.

You'll be given an API Key you can add as a "key" parameter in your fetch request.

Make a call to the following API endpoint replacing INSERTAPIKEYHERE with the key given to you from the Rawg API.
https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=INSERTAPIKEYHERE

Loop through the results and display the following properties in HTML, but only for the first eight results:
name
rating
number of tags (not the tag details, just the amount of tags)
The styling for this assignment is not important but loading indicator should be displayed while the API call is in progress.

Be sure to handle any potential errors in the code.

You can use either regular promise or async/await syntax to make the call.

Be sure to arrange all file types appropriately, consult the repos from the lessons for examples.
Submission
Create a repository in your GitHub account called your-name-js1-ma3, for example mary-smith-js1-ma3, and make sure it's public.
Add your answer for question 1 in a file called question-1.js
Add your answer for question 2 in a file called question-2.js
Add, commit and push your files - both .js files and any .html and .css files you may create - to this repo.
Submit the repo link.
Explore RAWG Video Games Database API • RAWG
RAWG.IO ♛ Keep all games in one profile ✔ See what friends are playing, and find your next great game.
Explore RAWG Video Games Database API • RAWG
Noroff - School of technology and digital media | Utdanning på camp...
Noroff Høyskole og Fagskole tilbyr studier på nett eller klasserom i Oslo, Bergen, Stavanger og Kristiansand.

*/

console.log("Question 2");

apiKey="1826b7910b474689a2d87f07163cd243";
const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key="+apiKey;

const resultsDiv = document.querySelector(".results");

async function getResults() {
    console.log("Requesting API info...");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            return;
        }
        console.log("API response length: " + response.status);

        let data = await response.json();
        return data;
    }
    catch(error) {
        console.log("Exception in getResults(): " + error);
    }
}

async function render() {
    let data = await getResults();
    console.log("Games JSON: " + data.count);
    
    for(let i=0;i<data.results.length;i++) {
        console.log("Name: " + data.results[i].name);
        console.log(" Rating: " + data.results[i].rating);
        console.log(" Tags: " + data.results[i].tags.length);

        if(i>=7) break;
    }

}

// load menu automatically..
render();
//window.onload = render();
