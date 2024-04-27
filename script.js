// Slider

const images = [
  'https://readingterminalmarket.org/wp-content/uploads/2022/06/philadelphia-market-bakery.jpg',
  'https://blog.revelsystems.com/hubfs/AdobeStock_111414411.jpeg',
  'https://preview.redd.it/ecgwgndlhqv71.jpg?width=1200&format=pjpg&auto=webp&s=3d8a3b120490d5fe0de6e81ee069444b47ee37d6',
  'https://images.squarespace-cdn.com/content/v1/5f9af72e0bb4570fc03fa143/c5a2e814-667e-40cb-8782-c8e8e3a51ddd/CAM_2430.jpg?format=2500w',
  'https://tlz.ae/wp-content/uploads/2022/11/TZ_featured-image.png',
  'https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/absnwdhp/2622d08a-a54d-4458-87f1-bae380d19348.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/66/Typical_French_bakery_pastries.jpg'
];

let currentIndex = 0;
const sliderImage = document.getElementById('slider-image');

function changeImage() {
  sliderImage.classList.add('fade-out');
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
    sliderImage.classList.remove('fade-out');
  }, 500); 
}

setInterval(changeImage, 4000);

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  sliderImage.src = images[currentIndex];
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  sliderImage.src = images[currentIndex];
});


// Feedback window appearance

const feedbackSection = document.querySelector('.feedback');
const openBtn = document.getElementById('feedback-link');
const closeBtn = document.getElementById('close-btn');

openBtn.addEventListener('click', () => {
  feedbackSection.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  feedbackSection.classList.remove('active');
});

// Feedback form submission

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone-number");
  const emailInput = document.getElementById("email");

  if (!nameInput.value.trim() || !phoneInput.value.trim() || !emailInput.value.trim()) {
    if (!nameInput.value.trim()) {
      nameInput.classList.add('styled-input');
      nameInput.placeholder = 'Name is required';
    } else {
      nameInput.classList.remove('styled-input');
      nameInput.placeholder = '';
    }
    if (!phoneInput.value.trim()) {
      phoneInput.classList.add('styled-input');
      phoneInput.placeholder = 'Phone is required';
    } else {
      phoneInput.classList.remove('styled-input');
      phoneInput.placeholder = '';
    }
    if (!emailInput.value.trim()) {
      emailInput.classList.add('styled-input');
      emailInput.placeholder = 'Email is required';
    } else {
      emailInput.classList.remove('styled-input');
      emailInput.placeholder = '';
    }
  } else {
    feedbackSection.classList.remove('active');
    nameInput.classList.remove('styled-input');
    nameInput.value = '';
    nameInput.placeholder = '';
    phoneInput.classList.remove('styled-input');
    phoneInput.value = '';
    phoneInput.placeholder = '';
    emailInput.classList.remove('styled-input');
    emailInput.value = '';
    emailInput.placeholder = '';

  }
});

// Pagination
const paginationItems = document.querySelectorAll('.pagination-list li');

paginationItems.forEach(item => {
  item.addEventListener('click', () => {
    paginationItems.forEach(item => {
      item.classList.remove('chosen');
    });

    item.classList.add('chosen');
  });
});