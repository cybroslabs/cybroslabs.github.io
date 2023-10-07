const contactEmail = atob("bWFpbHRvOmluZm9AY3licm9zbGFicy5jb20=");
const emailLinks = document.querySelectorAll('[data-contact-email]');
emailLinks.forEach(link => {
    link.onmouseover = link.ontouchstart = () => link.setAttribute('href', contactEmail);
});
console.log('x');