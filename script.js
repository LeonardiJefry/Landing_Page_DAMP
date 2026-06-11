// Mengaktifkan Swiper Slider
const swiper = new Swiper(".mySwiper", {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    speed: 1000,
    parallax: true, // Efek teks & gambar ikut bergerak sedikit saat digeser
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function () {
            const activeSlide = this.slides[this.activeIndex];
            if (activeSlide) {
                const theme = activeSlide.getAttribute("data-theme");
                document.body.className = theme; // Mengubah warna background otomatis
            }
        },
    },
});