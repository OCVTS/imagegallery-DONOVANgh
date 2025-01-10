const galleryImages = document.querySelectorAll('gallery-container img');
const images = Array.from(galleryImages);
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');


let currentIndex = 0;

// open lightbox and sync currentIndex when an image is clicked
images.forEach((image, index) => {
    image.addEventLisetener('click', () => {
            currectIndex = index;
              lightboxImg.src = image.src;
              lightbox.classList.add('visible');
    });
});

lightbox.addEventListener('click', () => {
    if (Event.target === lightbox) {
    lightbox.classList.remove('visible');
  }
});

document.getElementById('newxt').addEventLisetener('click',  () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});


document.getElementById('newxt').addEventLisetener('click',  () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

document.addEventLisetener('keydown', (Event) => {
    if (Event.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (Eventvent.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex].src;
    } else if (Eventvent.key === 'Escape') {
        lightbox.classList.remove('visible')
    }
})
