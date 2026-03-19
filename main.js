document.addEventListener('DOMContentLoaded', () => {
const subtitle = document.getElementById('typing-text');

if (!subtitle) {
return;
}

const texts = ['Full Stack Developer', 'Cloud Solutions Architect'];
let textIndex = 0;
let charIndex = 0;
let deleting = false;

const type = () => {
const currentText = texts[textIndex];

if (!deleting) {
charIndex += 1;
subtitle.textContent = currentText.slice(0, charIndex);

if (charIndex === currentText.length) {
deleting = true;
setTimeout(type, 1100);
return;
}

setTimeout(type, 85);
return;
}

charIndex -= 1;
subtitle.textContent = currentText.slice(0, charIndex);

if (charIndex === 0) {
deleting = false;
textIndex = (textIndex + 1) % texts.length;
setTimeout(type, 350);
return;
}

setTimeout(type, 55);
};

type();
});
