// JavaScript for changing main image when thumbnail is clicked
function changeImage(thumbnail) {
    document.getElementById("main-image").src = thumbnail.src;
}

// Simple zoom functionality (e.g., using CSS to scale image on click)
document.getElementById("main-image").addEventListener("click", function() {
    this.classList.toggle("zoomed");
});