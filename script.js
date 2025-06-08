const tabs = document.querySelectorAll('.tab-btn')
const pages = document.querySelectorAll('.page')
const projectCards = document.querySelectorAll('.project-card')
document.querySelectorAll('.tab-btn').forEach(btn => {
btn.addEventListener('click', () => {
const page = btn.getAttribute('data-page');
});
});
tabs.forEach(tab => {
tab.addEventListener('click', () => {
const target = tab.dataset.page
tabs.forEach(t => t.classList.remove('active'))
tab.classList.add('active')
pages.forEach(p => p.classList.add('hidden-page'))
document.getElementById(target).classList.remove('hidden-page')
window.scrollTo(0,0)
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