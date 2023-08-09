// 더미 데이터를 이용한 사용자 목록 생성 예시
const userList = ['오지윤', '채수만', '채지선','윤소정']; // 실제 데이터로 대체해야 합니다.

const userListElement = document.getElementById('user-list');
for (const user of userList) {
    const userItem = document.createElement('li');
    userItem.textContent = user;
    userListElement.appendChild(userItem);
}

    const sliderContent = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const slideWidth = slides[0].clientWidth;
        sliderContent.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    const interval = setInterval(nextSlide, 2000); // 5초마다 이미지 변경

    // 마우스 오버 시 슬라이드 멈춤, 벗어날 시 다시 시작
    sliderContent.addEventListener('mouseenter', () => {
        clearInterval(interval);
    });

    sliderContent.addEventListener('mouseleave', () => {
        interval = setInterval(nextSlide, 5000);
    });

    const postForm = document.getElementById('postForm');
    const postInput = document.getElementById('postInput');
    const postList = document.getElementById('postList');

    postForm.addEventListener('submit', (e) => {
        e.preventDefault(); // 폼 제출 기본 동작 방지

        const postText = postInput.value;
        if (postText) {
            const postItem = document.createElement('li');
            postItem.textContent = postText;
            postList.appendChild(postItem);
            postInput.value = '';
        }
    });
