// Question 2
console.log("Question 2");

const apiKey="1826b7910b474689a2d87f07163cd243";
const url ="https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key="+apiKey;

async function getResults() {
    console.log("Requesting API info...");

    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
            return null;
        }
        console.log("API response length: " + response.status);

        let data = await response.json();
        return data;
    }
    catch(error) {
        console.log("Exception in getResults(): " + error);
    }

    return null
}

async function renderGames() {
    const htmlDiv = document.querySelector(".results");
    if(htmlDiv === null) {
        console.log("Error div <results> not found in html");
        return
    }
    
    let data = await getResults();
    console.log("Games JSON: " + data.count);

    let html = "";
    for(let i=0;i<data.results.length;i++) {
        console.log("Name: " + data.results[i].name);
        console.log(" Rating: " + data.results[i].rating);
        console.log(" Tag counter: " + data.results[i].tags.length);

        html += "Name: " + data.results[i].name + "<br>\n";
        html += "Rating: " + data.results[i].rating + "<br>\n";
        html += "Tag counte: " + data.results[i].name + "<br>\n";
        html += "<br>"

        if(i>=7) break;
    }

    htmlDiv.innerHTML = html;
}

window.onload = renderGames();
