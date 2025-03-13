document.addEventListener('DOMContentLoaded', function() {
    // Get all thumbnail images in the right menu
    const thumbnails = document.querySelectorAll('.thumbnail');

    // Get the large image element in the main section
    const largeImage = document.getElementById('largeImage');

    // Add a click event listener to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Get the URL of the large image from the data-large attribute
            const largeImageUrl = this.getAttribute('data-large');
            
            // Get the title attribute for alt text
            const imageTitle = this.getAttribute('title') || this.getAttribute('alt');

            // Fade out effect
            largeImage.style.opacity = 0;
            
            // Update the src and alt after a short delay (for transition effect)
            setTimeout(() => {
                largeImage.src = largeImageUrl;
                largeImage.alt = imageTitle;
                largeImage.style.opacity = 1;
                largeImage.style.display = 'block';  // Make the image visible
            }, 300);
        });
    });
});