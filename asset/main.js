const contactEmail = atob("aW5mb0BjeWJyb3NsYWJzLmNvbQ==");
const emailLinks = document.querySelectorAll('[data-contact-email]');
emailLinks.forEach(link => {
    link.onmouseover = link.ontouchstart = () => link.setAttribute('href', 'mailto:'+contactEmail);
});
const emailTexts = document.querySelectorAll('[data-contact-email-print]');
emailTexts.forEach(link => {
    link.textContent = contactEmail;
});
