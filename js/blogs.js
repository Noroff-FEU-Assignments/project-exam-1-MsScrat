async function blogFetcher() {
    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts?per_page=15";
    const response = await fetch(blogRequest);

    if (response.ok) {
        data = await response.json();
    }

    console.log(data);
}

blogFetcher()