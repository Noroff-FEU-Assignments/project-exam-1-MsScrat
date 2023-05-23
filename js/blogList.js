var pageLimit = 10;

async function blogFetcher(n) {

    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts?per_page=" + n;
    const response = await fetch(blogRequest);

    if (response.ok) {
        data = await response.json();

        document.getElementById("blogList").innerHTML = ""

        for (let i=0; i < n; i++) {
            document.getElementById("blogList").innerHTML += 
            `
                <p>${data[i].title.rendered}</p>
            `;
        }
    }
}

blogFetcher(pageLimit)

function showMore(){
    pageLimit += 10;

    blogFetcher(pageLimit);
}
