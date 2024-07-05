const ctaButton = document.getElementById('call-button');
const freeButton = document.querySelector('.free-quote');
const contactB = document.querySelector('.contact b')
const contactFormContainer = document.querySelector('.contact-form-container');
const closeButton = document.getElementById('closeButton');
const contactForm = document.getElementById('contactForm');
const tipsContact = document.querySelectorAll('.tips-contact')
const enquiry = document.querySelector('.enquiry')
const mobileNav = document.querySelector('.mobile-nav')
const clickMob = document.querySelector('.container')




function showForm(actionBTN) {
  
  // Show contact form/modal when CTA button is clicked
  actionBTN.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    contactForm.style.display = 'block'; // Show the contact form/modal
    contactFormContainer.style.display = 'block';
  });

  // Close contact form/modal when close button is clicked
  closeButton.addEventListener('click', function() {
    contactForm.style.display = 'none'; // Hide the contact form/modal
    contactFormContainer.style.display = 'none';
});



}

showForm(ctaButton)
showForm(freeButton)
showForm(contactB)
showForm(enquiry)

tipsContact.forEach(tip => {
  showForm(tip)
})

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,

  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 1500,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  
});

var swiper3 = new Swiper(".mySwiper3", {
  grabCursor: true,
  effect: "creative",
  autoplay: {
    delay: 1000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["20%", 0, 1],
    },
    next: {
      translate: ["100%", 0, 0],
    },
    
  },
});


clickMob.addEventListener('click', () => {
  if (mobileNav.style.display === '' || mobileNav.style.display === 'none') {
    mobileNav.style.display = 'grid'
  } else {
    mobileNav.style.display = 'none'
  }

  clickMob.classList.toggle("change", mobileNav.style.display === 'grid')
})



var swiper2 = new Swiper(".showSwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});