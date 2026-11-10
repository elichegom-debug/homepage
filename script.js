const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const video = document.getElementById('bg-video');
let currentSlide = 0;
let slideInterval;

function updateSlides(index) {
    // 모든 슬라이드 숨기기
    slides.forEach(slide => {
        slide.classList.remove('opacity-100', 'z-10');
        slide.classList.add('opacity-0', 'z-0');
    });
    
    // 모든 닷 비활성화
    dots.forEach(dot => {
        dot.classList.remove('bg-cyan-500');
        dot.classList.add('bg-slate-500');
    });

    // 선택된 슬라이드 및 닷 활성화
    slides[index].classList.remove('opacity-0', 'z-0');
    slides[index].classList.add('opacity-100', 'z-10');
    dots[index].classList.remove('bg-slate-500');
    dots[index].classList.add('bg-cyan-500');

    // 동영상 제어
    if (index === 0) {
        video.play();
    } else {
        video.pause();
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides(currentSlide);
    resetInterval();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides(currentSlide);
    resetInterval();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides(currentSlide);
    resetInterval();
}

// 자동 슬라이드 기능
function startInterval() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlides(currentSlide);
    }, 5000); // 5초마다 변경
}

function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
}

// 초기화
updateSlides(0);
startInterval();
