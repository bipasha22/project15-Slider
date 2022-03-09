const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});

// display slide with btns

let count = 0;
nextBtn.addEventListener('click', function () {
  count++;
  carousel();
});

prevBtn.addEventListener('click', function () {
  count--;
  carousel();
});

function carousel() {
  // working with btns
  if (count < slides.length - 1) {
    nextBtn.style.display = 'block';
  } else {
    nextBtn.style.display = 'none';
  }

  if (count > 0) {
    prevBtn.style.display = 'block';
  } else {
    prevBtn.style.display = 'none';
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${count * 100}%)`;
  });

  // working with slides till the end of the slide length

  // if(count === slides.length){
  //     count = 0;
  // }
  // if(count < 0 ){
  //     count = slides.length -1;

  // }
}

// disable prev btn at index 0

prevBtn.style.display = 'none';
