async function imageFetcher() {
    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts?per_page=15";
    const response = await fetch(blogRequest);

    if (response.ok) {
        data = await response.json();

        for (let i=0; i<12; i++) {

            const imageRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/media/" + data[i].featured_media;
            const imageResponse = await fetch(imageRequest);

            imageData = await imageResponse.json();

            document.getElementById("box" + i).innerHTML =
            `
            <a href="html/blogSpecific.html?id=${data[i].id}"><img src="${imageData.guid.rendered}" alt="Cover of the titled game"></a>
            `;
        }
    }
}

imageFetcher()