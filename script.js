// Hero Slider
let slides = document.querySelectorAll('.hero-slider .slide');
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide+1) % slides.length;
  slides[currentSlide].classList.add('active');
}, 4000);

// Tabs
document.querySelectorAll('.tab-buttons button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-buttons button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// FAQ toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    let ans = item.querySelector('.answer');
    ans.style.display = ans.style.display === 'block' ? 'none' : 'block';
  });
});
