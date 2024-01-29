// This is the full version of Javascript (before compressed)

const commentsFile = "comments.json"; // Value will not be changed

$(document).ready(function() {
    // For the Scroll Top Button:
    const scrollTopButton = document.getElementById("scrollTopButton");
    window.addEventListener("scroll", function(){
        if (this.window.scrollY > 150) {
            scrollTopButton.style.display = "flex";
        } else {
            scrollTopButton.style.display = "none";
        }
    });

    // If click the "ScrollTopButton":
    scrollTopButton.addEventListener("click", function() {
        window.scrollTo({
            top:0,
            left:0,
            behavior: "smooth"
        })
        history.replaceState(null, null, ' '); //Change the history entry
    });

    // For the "Show Images" Button:
    const showImagesButton = document.getElementById("show-image-button");
    const showImages = document.getElementById("image-container");
    showImagesButton.addEventListener("click", function() {
        if (showImages.style.display === "none") {
            showImages.style.display = "block";
            showImagesButton.innerHTML = "Hide Images";
        } else if (showImages.style.display === "block") { 
            showImages.style.display = "none"; 
            showImagesButton.innerHTML = "Show Images";
        }
    });
    // For the "Read More" Button:
    const readMoreButton = document.getElementById("read-more");
    const hidden_content = document.getElementById("hidden-content");
    $("#read-more").click(function() {
        if (hidden_content.style.display === "none") {
            readMoreButton.innerHTML = "Read Less";
            hidden_content.style.display = "block";
        } else {
            readMoreButton.innerHTML = "Read More";
            hidden_content.style.display = "none";
        }
    });
})