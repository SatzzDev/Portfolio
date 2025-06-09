const tabs = document.querySelectorAll('.tab')
const pages = document.querySelectorAll('.page')
const projectCards = document.querySelectorAll('.project-card')

tabs.forEach(tab => {
tab.addEventListener('click', (e) => {
e.preventDefault()
const target = tab.dataset.page

// Remove active class from all tabs (both desktop and mobile)
tabs.forEach(t => t.classList.remove('tab-active'))
tab.classList.add('tab-active')

// Hide all pages
pages.forEach(p => p.classList.add('hidden-page'))
document.getElementById(target).classList.remove('hidden-page')

// Close mobile dropdown if open
const dropdown = document.querySelector('.dropdown-end [tabindex="0"]')
if (dropdown) {
dropdown.blur()
}

// Smooth scroll to top for mobile
window.scrollTo({
top: 0,
left: 0,
behavior: 'smooth'
})
})
})
projectCards.forEach(card => {
card.addEventListener('click', () => {
const href = card.dataset.href;
if (href) {
window.location.href = href;
} else {
console.error('No href found for this project');
}
});
})

var typed = new Typed('#typ', {
strings: ['SatzzDev.'],
typeSpeed: 50,
backSpeed: 50,
loop: true,
});
