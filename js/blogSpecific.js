const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogID = urlParams.get('id');

async function blogFetcher() {
    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts/" + blogID + "?per_page=20";
    const response = await fetch(blogRequest);

    if(response.ok) {
        data = await response.json();
        document.getElementById("blogSpecificTitle").innerHTML = 
        `
        <h1>${data["title"]["rendered"]}</h1>
        `;

        document.getElementById("blogSpecificText").innerHTML = 
        `
        <p>${data["content"]["rendered"]}</p>
        `;

        document.getElementById("blogSpecificImage").innerHTML = 
        `
        <img src="${data["title"]["rendered"]}">
        `;
    }

    console.log(data);
}

blogFetcher();

