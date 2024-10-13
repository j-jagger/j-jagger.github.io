const phrases = [
    "Hello!",            // English
    "Hola!",             // Spanish
    "Bonjour!",          // French
    "Hallo!",            // German
    "Ciao!",             // Italian
    "Olá!",              // Portuguese
    "Hallo!",            // Dutch
    "Hej!",              // Swedish + Danish
    "Hei!"               // Norwegian
];

let currentIndex = 0;

function fadeHeader() {
    const header = document.getElementById('fade-header');
    header.textContent = phrases[currentIndex];
    header.style.opacity = 1;
    
    setTimeout(() => {
        header.style.opacity = 0;
    }, 2000);

    currentIndex = (currentIndex + 1) % phrases.length;
    setTimeout(fadeHeader, 4000);
}

fadeHeader();
