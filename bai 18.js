// 1. Chức năng Đổi Giao Diện Sáng / Tối (Dark/Light Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    
    if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        themeIcon.className = 'fa-solid fa-moon';
    } else {
        document.body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-sun';
    }
});

// 2. Hiệu ứng cuộn mượt xuất hiện dần (Scroll Reveal)
function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Gọi ngay khi tải trang

// 3. Xử lý Form Liên hệ
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Cảm ơn ${name}! Lời nhắn của bạn đã được gửi đi thành công.`);
    contactForm.reset();
});