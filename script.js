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


// Main Content
// !!! Усі лінки (main, catalog, pricelist) посилаються на одну й ту саму сторінку, а для "shipping and payment" та "contacts" реалізовані дві різні сторінки другого рівня.

const mainContainer = document.querySelector('.main');

const defaultInnerHtml = `
        <div class="main-content">
          <div class="leftblock">
            <ul class="first-list">
              <li><a href="#">Bread</a></li>
              <li>
                <a href="#">Puff Pastry</a>
                <ul class="inner-list">
                  <li><a href="#">Croissants</a></li>
                  <li><a href="#">Cronuts</a></li>
                  <li><a href="#">Cube Croissants</a></li>
                </ul>
              </li>
              <li><a href="#">Cakes</a></li>
              <li><a href="#">Cheesecakes</a></li>
              <li><a href="#">Doughnuts</a></li>
            </ul>
          </div>
          <div class="centerblock">
            <div class="catalog">
              <div class="product-card">
                <img
                  src="https://i.pinimg.com/736x/5e/0d/42/5e0d428c2487a0eb29c26ae90ffd2574.jpg"
                  alt="rose-cake"
                />
                <h3 class="cake-title">Blossom Bliss Cake</h3>
                <h2 class="cake-price">
                  <span class="pounds">£43</span>.99
                  <i class="fa-solid fa-cart-shopping icon"></i>
                </h2>
              </div>
              <div class="product-card">
                <img
                  src="https://preview.redd.it/where-to-buy-aesthetic-cakes-in-ph-v0-8ihpme8hljha1.jpg?width=720&format=pjpg&auto=webp&s=849f9a29c3554d594f337a292f7fe2b6256d101c"
                  alt="rose-cake"
                />
                <h3 class="cake-title">Floral Fantasy Cake</h3>
                <h2 class="cake-price">
                  <span class="pounds">£43</span>.99
                  <i class="fa-solid fa-cart-shopping icon"></i>
                </h2>
              </div>
              <div class="product-card">
                <img
                  src="https://i.pinimg.com/originals/09/b2/62/09b262a4698248f1b18ac9010960ac46.jpg"
                  alt="flowers-cake"
                />
                <h3 class="cake-title">Garden Elegance Cake</h3>
                <h2 class="cake-price">
                  <span class="pounds">£43</span>.99
                  <i class="fa-solid fa-cart-shopping icon"></i>
                </h2>
              </div>
              <div class="product-card">
                <img
                  src="https://i.pinimg.com/1200x/a8/e1/82/a8e1824d817bc5325ea6fcb2dda3fcc9.jpg"
                  alt="birthday-cake"
                />
                <h3 class="cake-title">Petal Perfection Cake</h3>
                <h2 class="cake-price">
                  <span class="pounds">£39</span>.99
                  <i class="fa-solid fa-cart-shopping icon"></i>
                </h2>
              </div>
              <div class="product-card">
                <img
                  src="https://i.pinimg.com/736x/6f/82/9f/6f829fcf94ecaf5deaad2fe6b3ff316e.jpg"
                  alt="birthday-cake"
                />
                <h3 class="cake-title">Bloom Delight Cake</h3>
                <h2 class="cake-price">
                  <span class="pounds">£43</span>.99
                  <i class="fa-solid fa-cart-shopping icon"></i>
                </h2>
              </div>
              <div class="product-card">
                <img
                  src="https://i.pinimg.com/736x/52/51/e8/5251e8fa9fa7daae25abb9cb2e1c5cdf.jpg"
                  alt="birthday-cake"
                />
                <h3 class="cake-title">Rose Radiance Cake</h3>
                <h2 class="cake-price">
                  <span class="pounds">£43</span>.99
                  <i class="fa-solid fa-cart-shopping icon"></i>
                </h2>
              </div>
            </div>
            <div class="pagination">
              <ul class="pagination-list">
                <li class="chosen">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul>
            </div>
            <div class="bakery-story">
              <div>
                Welcome to Viator's Bakery, where every bite tells a story of
                passion and craftsmanship. Nestled in the heart of our bustling
                town, our bakery has been serving up delectable treats for over
                three decades. From our humble beginnings as a family-owned
                establishment to becoming a beloved community staple, we take
                pride in creating mouthwatering pastries, bread, and cakes that
                delight our customers' senses.
              </div>
              <div>
                At Viator's Bakery, we believe in preserving tradition while
                embracing innovation. Our recipes, handed down through
                generations, are infused with love and care, ensuring that each
                bite is a nostalgic journey for our patrons. From our signature
                buttery croissants to our heavenly cakes adorned with intricate
                designs, every creation is a testament to our commitment to
                quality and excellence.Step into our bakery and experience the
                warmth of our inviting ambiance, the aroma of freshly baked
                goods wafting through the air, and the friendly smiles of our
                dedicated staff. Whether you're indulging in a morning pastry or
                celebrating a special occasion with one of our custom cakes, we
                invite you to savor the Viator's Bakery experience, where every
                moment is sweetened with joy.
              </div>
            </div>
          </div>
        </div>`;

const shippingAndPaymentInnerHtml = `<div class="shipping-and-payment-container">
        <h1 class="title">Shipping and Payment Information</h1>
        <p class="intro-greetings">
          Thank you for choosing to shop with us at
          <span class="bakery-name">Viator's Bakery</span>. To ensure a smooth
          and enjoyable shopping experience, please review the following
          information regarding shipping and payment:
        </p>
        <h2 class="subinfo-title">Shipping</h2>
        <ul class="list">
          <li>
            <h4>Shipping Options:</h4>
            <p>
              We offer standard and expedited shipping options for your
              convenience. Standard shipping typically takes
              <b>3-5 business days</b>, while expedited shipping delivers within
              <b>1-2 business days</b>.
            </p>
          </li>
          <li>
            <h4>Shipping Rates:</h4>
            <p>
              Shipping rates vary based on the weight of your order and the
              shipping method selected. You can view the shipping cost at
              checkout before completing your purchase.
            </p>
          </li>
          <li>
            <h4>International Shipping:</h4>
            <p>
              We currently offer international shipping to select countries.
              Please note that international shipping rates and delivery times
              may vary.
            </p>
          </li>
          <li>
            <h4>Order Tracking:</h4>
            <p>
              Once your order has been shipped, you will receive a shipping
              confirmation email with a tracking number. You can use this
              tracking number to monitor the status of your delivery.
            </p>
          </li>
        </ul>
        <h2 class="subinfo-title">Payment</h2>
        <ul class="list">
          <li>
            <h4>Payment Methods:</h4>
            <p>
              We accept all major credit cards, including
              <b>Visa, Mastercard, American Express, and Discover</b>. You can
              also choose to pay using <b>PayPal</b> for added convenience.
            </p>
          </li>
          <li>
            <h4>Secure Payment:</h4>
            <p>
              Your payment information is encrypted and processed securely to
              protect your personal and financial data.
            </p>
          </li>
          <li>
            <h4>Order Confirmation:</h4>
            <p>
              After placing your order, you will receive an order confirmation
              email with details of your purchase and payment information.
            </p>
          </li>
        </ul>
      </div>`;

const contactsInnerHtml = `<div class="contacts-container">
        <h1 class="title">Contact Us</h1>
        <p class="greetings">
          Thank you for visiting our bakery! We are delighted to hear from you.
          Please feel free to reach out to us using the contact information
          below.
        </p>
        <h2 class="subtitle">Address</h2>
        <div class="address">
          <p>
            <i
              >147 Bakery Street,<br />
              London, UK, 59921</i
            >
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.599219457551!2d-0.15937222472531642!3d51.52056840974301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a2e67d7%3A0xd458de8d0fdc498e!2sBaker%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sua!4v1714310432058!5m2!1sen!2sua"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h2 class="subtitle">Phone</h2>
        <p class="phone-num"><i>+38(044) 123-45-67</i></p>
        <p class="phone-num"><i>+38(044) 123-45-67</i></p>
        <h2 class="subtitle">Operating Hours</h2>
        <p class="hours">
          <b>Monday - Friday</b>: <i>8:00 AM - 6:00 PM</i> <br />
          <b>Saturday</b>: <i>9:00 AM - 5:00 PM</i> <br />
          <b>Sunday</b>: <b><i>Closed</i></b>
        </p>
      </div>`;

const mainLinks = document.querySelectorAll('#main-ref');
const catalogLinks = document.querySelectorAll('#catalog-ref');
const pricelistLinks = document.querySelectorAll('#pricelist-ref');
const shippingAndPaymentLinks = document.querySelectorAll('#shipping-ref');
const contactsLinks = document.querySelectorAll('#contacts-ref');

const handleCatalogClickEvent = (link) => {
  catalogLinks.forEach(item => {
    item.classList.remove('chosen');
  });
  shippingAndPaymentLinks.forEach(item => {
    item.classList.remove('chosen');
  });
  contactsLinks.forEach(item => {
    item.classList.remove('chosen');
  });

  link.classList.add('chosen');
}

mainLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainContainer.innerHTML = defaultInnerHtml;

    catalogLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    pricelistLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    shippingAndPaymentLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    contactsLinks.forEach(item => {
      item.classList.remove('chosen');
    });

    mainLinks.forEach(link => {
      link.classList.add('chosen')
    });

    const paginationItems = document.querySelectorAll('.pagination-list li');

    paginationItems.forEach(item => {
      item.addEventListener('click', () => {
        paginationItems.forEach(item => {
          item.classList.remove('chosen');
        });

        item.classList.add('chosen');
      });
    });
  });
});

catalogLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainContainer.innerHTML = defaultInnerHtml;

    mainLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    pricelistLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    shippingAndPaymentLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    contactsLinks.forEach(item => {
      item.classList.remove('chosen');
    });

    catalogLinks.forEach(link => {
      link.classList.add('chosen')
    });

    const paginationItems = document.querySelectorAll('.pagination-list li');

    paginationItems.forEach(item => {
      item.addEventListener('click', () => {
        paginationItems.forEach(item => {
          item.classList.remove('chosen');
        });

        item.classList.add('chosen');
      });
    });
  });
});

pricelistLinks.forEach(link => {
  link.addEventListener('click', () => {
    mainContainer.innerHTML = defaultInnerHtml;

    catalogLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    mainLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    shippingAndPaymentLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    contactsLinks.forEach(item => {
      item.classList.remove('chosen');
    });

    pricelistLinks.forEach(link => {
      link.classList.add('chosen')
    }); 
    
    const paginationItems = document.querySelectorAll('.pagination-list li');

    paginationItems.forEach(item => {
      item.addEventListener('click', () => {
        paginationItems.forEach(item => {
          item.classList.remove('chosen');
        });

        item.classList.add('chosen');
      });
    });
  });
});

// Add changing innerHTML of mainContainer
shippingAndPaymentLinks.forEach(link => {
  link.addEventListener('click', () => {
    catalogLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    pricelistLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    mainLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    contactsLinks.forEach(item => {
      item.classList.remove('chosen');
    });

    shippingAndPaymentLinks.forEach(link => {
      link.classList.add('chosen')
    });

    mainContainer.innerHTML = shippingAndPaymentInnerHtml;
  })
});

// Add changing innerHTML of mainContainer
contactsLinks.forEach(link => {
  link.addEventListener('click', () => {
    catalogLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    pricelistLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    shippingAndPaymentLinks.forEach(item => {
      item.classList.remove('chosen');
    });
    mainLinks.forEach(item => {
      item.classList.remove('chosen');
    });

    mainContainer.innerHTML = contactsInnerHtml;
    
    contactsLinks.forEach(link => {
      link.classList.add('chosen')
    });
  })
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
