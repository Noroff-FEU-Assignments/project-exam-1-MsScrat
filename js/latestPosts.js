async function blogFetcher() {
    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts?per_page=15";
    const response = await fetch(blogRequest);

    if (response.ok) {
        data = await response.json();

        for (let i=0; i < 12; i++) {
            document.getElementById("box" + i).innerHTML = 
            `
                <a href="#">${data[i].title.rendered}</a>
            `;
        }
    }

    console.log(data);
}

blogFetcher()