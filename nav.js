const openMenu = () => {
    document.querySelector('.backdrop').classList.add('active');
    document.querySelector('aside').classList.add('active');
}

const closeMenu = () => {
    document.querySelector('.backdrop').classList.remove('active');
    document.querySelector('aside').classList.remove('active');
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector('aside button.close').onclick = closeMenu;
document.querySelector('.backdrop').onclick = closeMenu;

const header = document.querySelector('header');

const updateHeaderBackground = () => {
    if (languageDropdown.classList.contains('active')) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    } else {
        header.style.backgroundColor = window.scrollY > 0 ? 'rgba(29, 47, 61, 0.8)' : 'rgba(29, 47, 61, 0)';
    }
};

window.addEventListener('scroll', () => {
    if (!languageDropdown.classList.contains('active')) {
        header.classList.toggle('scrolled', window.scrollY > 0);
        updateHeaderBackground();
    }
});

const globeIconContainer = document.querySelector('.globe-icon-container');
const languageDropdown = document.querySelector('.language-dropdown');
const languageBackdrop = document.querySelector('.language-backdrop');
const navLinks = document.querySelectorAll('nav a');
const logo = document.querySelector('.away');

const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'rgba(200, 200, 200, 0.4)'; // Mörkare grå bakgrund vid hovring
};

const handleMouseOut = (event) => {
    event.target.style.backgroundColor = 'transparent';
};

const toggleLanguageDropdown = () => {
    const isActive = languageDropdown.classList.toggle('active');
    languageBackdrop.classList.toggle('active');
    navLinks.forEach(link => {
        link.style.color = isActive ? '#333333' : 'white';
        if (isActive) {
            link.addEventListener('mouseover', handleMouseOver);
            link.addEventListener('mouseout', handleMouseOut);
        } else {
            link.removeEventListener('mouseover', handleMouseOver);
            link.removeEventListener('mouseout', handleMouseOut);
            link.style.backgroundColor = 'transparent'; // Återställ bakgrundsfärgen
            link.style.color = 'white'; // Återställ textfärgen
        }
    });
    logo.src = isActive ? 'images/sv1 (2).png' : 'images/PNG-02.png';
    const globeIcon = globeIconContainer.querySelector('.globe-icon');
    globeIcon.style.fill = isActive ? '#333333' : 'white';
    updateHeaderBackground();
};

globeIconContainer.addEventListener('click', toggleLanguageDropdown);
languageBackdrop.addEventListener('click', toggleLanguageDropdown);

// Återställ bakgrundsfärgen vid sidladdning
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
    });
    link.addEventListener('mouseout', () => {
        link.style.backgroundColor = 'transparent';
    });
});