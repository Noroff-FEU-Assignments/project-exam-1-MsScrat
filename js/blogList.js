var pageLimit = 5;

async function blogFetcher(n) {

    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts?per_page=" + n;
    const response = await fetch(blogRequest);

    if (response.ok) {
        data = await response.json();

        document.getElementById("blogList").innerHTML = ""

        for (let i=0; i < n; i++) {
            document.getElementById("blogList").innerHTML += 
            `
            <a class="blogListContainer" href="blogSpecific.html?id=${data[i].id}"><div class="blogListPost">${data[i].title.rendered}</div></a>
            `;
        }
    }
}

blogFetcher(pageLimit)

function showMore(){
    pageLimit += 5;

    blogFetcher(pageLimit);
}
