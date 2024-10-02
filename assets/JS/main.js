'use strict';

// выпадающее меню
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function toggleDropdown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}

function toggleDropdown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}



// слайдер
document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;
    let currentSlide = 0;

    function changeSlide(direction) {
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        const slidesContainer = document.querySelector(".slides");
        slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateElips();
    }


    function updateElips() {
        const elips = document.querySelectorAll('.elip');
        for (let i = 0; i < elips.length; i++) {
            elips[i].className = elips[i].className.replace(' active', '');
        }
        elips[currentSlide].className += ' active';
    }

    updateElips();

    prevButton.onclick = () => changeSlide(-1);
    nextButton.onclick = () => changeSlide(1);
});


// вкладки
function openTab(event, tabName) {

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}


// аккордион
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}



window.onclick = function (event) {
    if (!event.target.matches('.header__btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



// модалка через 3 сек
window.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.getElementById('modal-3s').style.display = 'block';
    }, 3000);
});

document.querySelector('.modal-3s__close').addEventListener('click', function () {
    document.getElementById('modal-3s').style.display = 'none';
});

// модалка с телефоном
const phoneModal = document.getElementById('phoneModal');
const closeModal = document.getElementById('closeModal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('faq')) {
                phoneModal.style.display = 'block';
            }
        }
    });
}, {
    threshold: 0.5
});

observer.observe(document.querySelector('.faq'));


closeModal.addEventListener('click', () => {
    phoneModal.style.display = 'none';
});

