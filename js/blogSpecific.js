const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogID = urlParams.get('id');

async function blogFetcher() {
    const blogRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/posts/" + blogID + "?per_page=20";
    const response = await fetch(blogRequest);

    if(response.ok) {

        data = await response.json();

        const imageRequest = "https://www.sheplaystoo.no/wp-json/wp/v2/media/" + data.featured_media;
        const imageResponse = await fetch(imageRequest);

        imageData = await imageResponse.json();

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
        <img src="${imageData.guid.rendered}" alt="Cover of the titled game" id="myImage">
        <div id="myModal" class="modal">
            <span class="close"></span>
            <img class="modalContent" id="modalContent">
        </div>
        `;

        document.title = "ShePlaysToo | " + data["title"]["rendered"];
    }

    /* Modal */

    var modal = document.getElementById("myModal");

    var img = document.getElementById("myImage");
    var modalImg = document.getElementById("modalContent");

    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;    }

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

}

blogFetcher();

