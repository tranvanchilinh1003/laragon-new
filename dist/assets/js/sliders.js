let index = 0;
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

function update() {
  slider.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) =>
    d.className = `dot w-2 h-2 rounded-full ${i === index ? 'bg-blue-500' : 'bg-gray-300'}`
  );
}

function next() {
  index = (index + 1) % dots.length;
  update();
}

function prev() {
  index = (index - 1 + dots.length) % dots.length;
  update();
}

function goTo(i) {
  index = i;
  update();
}

  // Mobile slider navigation
  let mobileIndex = 0;
  const totalMobileCards = 3;

  function prevMobile() {
    const slider = document.getElementById('slider-mobile');
    if (slider) {
      mobileIndex = (mobileIndex - 1 + totalMobileCards) % totalMobileCards;
      const cardWidth = slider.offsetWidth;
      slider.scrollTo({ left: mobileIndex * cardWidth, behavior: 'smooth' });
      updateMobileDots();
    }
  }

  function nextMobile() {
    const slider = document.getElementById('slider-mobile');
    if (slider) {
      mobileIndex = (mobileIndex + 1) % totalMobileCards;
      const cardWidth = slider.offsetWidth;
      slider.scrollTo({ left: mobileIndex * cardWidth, behavior: 'smooth' });
      updateMobileDots();
    }
  }

  function goToMobile(index) {
    const slider = document.getElementById('slider-mobile');
    if (slider) {
      mobileIndex = index;
      const cardWidth = slider.offsetWidth;
      slider.scrollTo({ left: mobileIndex * cardWidth, behavior: 'smooth' });
      updateMobileDots();
    }
  }

  function updateMobileDots() {
    const dots = document.querySelectorAll('.dot-mobile');
    dots.forEach((dot, i) => {
      dot.className = `dot-mobile w-2 h-2 rounded-full ${i === mobileIndex ? 'bg-blue-500' : 'bg-gray-300'} transition-colors`;
    });
  }

  // Update dots khi scroll
  const sliderMobile = document.getElementById('slider-mobile');
  if (sliderMobile) {
    sliderMobile.addEventListener('scroll', () => {
      const cardWidth = sliderMobile.offsetWidth;
      const newIndex = Math.round(sliderMobile.scrollLeft / cardWidth);
      if (newIndex !== mobileIndex) {
        mobileIndex = newIndex;
        updateMobileDots();
      }
    });
  }

  // FAQ accordion is now handled by Alpine.js, so this code is no longer needed
  // document.querySelectorAll(".faq-btn").forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     const content = btn.nextElementSibling;
  //     const icon = btn.querySelector(".faq-icon");
  //
  //     if (content) {
  //       content.classList.toggle("hidden");
  //     }
  //     if (icon) {
  //       icon.classList.toggle("rotate-180");
  //     }
  //   });
  // });

