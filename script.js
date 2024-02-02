/*
const images = document.querySelectorAll('.image');
let currentImageIndex = 0;

// Oculta todas las imágenes excepto la primera
images.forEach((image, index) => {
  if (index !== 0) {
    image.classList.add('hidden');
  }
});

function changeImage() {
  images.forEach((image) => {
    image.classList.add('hidden');
  });
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.remove('hidden');
}

setInterval(changeImage, 2000);*/