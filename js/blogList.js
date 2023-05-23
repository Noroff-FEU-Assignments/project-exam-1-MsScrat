var pageLimit = 5;

async function blogFetcher(n) {

    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts?per_page=" + n;
    const response = await fetch(blogRequest);

    if (response.ok) {
        data = await response.json();

        document.getElementById("blogList").innerHTML = ""

        for (let i=0; i < n; i++) {

            const imageRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/media/" + data[i].featured_media;
            const imageResponse = await fetch(imageRequest);

            imageData = await imageResponse.json();

            document.getElementById("blogList").innerHTML += 
            `
            <div class="blogListContainer">
                <div>
                    <img src="${imageData.guid.rendered}">
                </div>
                <div class="blogListContent">
                    <h3 class="blogListPost">${data[i].title.rendered}</h3>
                    ${data[i]["excerpt"]["rendered"]}
                    <a href="blogSpecific.html?id=${data[i].id}">Read more</a>
                </div>
            </div>
            `;
        }
    }
}

blogFetcher(pageLimit)

function showMore(){
    pageLimit += 5;

    blogFetcher(pageLimit);
}

