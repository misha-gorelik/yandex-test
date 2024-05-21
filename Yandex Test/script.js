const carousel = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.left-row');
const nextBtn = document.querySelector('.right-row');
const counter = document.querySelector('.counter');
const items = carousel.querySelectorAll('.carousel-item');
const current = document.querySelector('.current');
const all = document.querySelector('.all');

let currentIndex = 0;
all.innerText = items.length;



const autoScroll = () => {
    if (currentIndex == items.length - 1) {
        currentIndex = 0;
        // console.log(currentIndex);
    } else {
        currentIndex++;
        // console.log(currentIndex);
    }
    // carousel.style.transform = `translateX(-${currentIndex * 404}px)`;

    const first = carousel.querySelector('.carousel-item');
    carousel.appendChild(first);
    current.innerText = currentIndex + 1;

};

prevBtn.addEventListener('click', () => {
    if (currentIndex == 0) {
        currentIndex = items.length - 1;
        // console.log(currentIndex);
    } else {
        currentIndex--;
        // console.log(currentIndex);
    }

    const last = carousel.lastChild;
    carousel.insertBefore(last, document.querySelector('.carousel-item'));
    current.innerText = currentIndex + 1;
    // carousel.style.transform = `translateX(${currentIndex * 404}px)`;
})

nextBtn.addEventListener('click', () => {
    if (currentIndex == items.length - 1) {
        currentIndex = 0;
        // console.log(currentIndex);
    } else {
        currentIndex++;
        // console.log(currentIndex);
    }
    // carousel.style.transform = `translateX(-${currentIndex * 404}px)`;

    const first = carousel.querySelector('.carousel-item');
    carousel.appendChild(first);
    current.innerText = currentIndex + 1;
})

setInterval(autoScroll, 4000);

