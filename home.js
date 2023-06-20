const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const progressBar = document.querySelector('.progress-bar');

// Calculate the initial progress based on checked checkboxes
let checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
let progress = Math.round((checkedCount / checkboxes.length) * 100);
progressBar.style.width = progress + '%';

// Update progress bar when a checkbox is clicked
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    checkedCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    progress = Math.round((checkedCount / checkboxes.length) * 100);
    progressBar.style.width = progress + '%';
    progressBar.setAttribute('aria-valuenow', progress);
  });
});
// Update progress bar when a checkbox is clicked THIS FOR CONFETTI
checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('click', function() {
    let checkedCount = document.querySelectorAll('input[type=checkbox]:checked').length;
    let progress = Math.round((checkedCount / checkboxes.length) * 100);
    progressBar.style.width = progress + '%';

    // Check if progress is 100% and trigger confetti effect
    if (progress === 100) {
      confetti({
        particleCount: 400,
        spread: 80,
        colors: ['#6f00ff', '#FF0000', '#FFFF00']
      });
    }
  });
});

