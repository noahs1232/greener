// Opens Navigation modal on modal-btn click
const navSlide = () => {
    const modal = document.querySelector('.modal-btn');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    modal.addEventListener('click', () => {
        // toggle the nav bar modal to active
        nav.classList.toggle('nav-active');

        // anonymous funct, animate each link into the modal
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                // delay for each element the navLinkFade animation by factor of 7
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;           
            }

        });

        // modal button animation
        modal.classList.toggle('toggle');
    });
}

// Anonymous function, runs all relevant functs
const app = () => {
    navSlide();
}

app();