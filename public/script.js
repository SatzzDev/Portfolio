let lagiPlay = false
let suara = new Audio('/audio.mp3') // isi apa yh
suara.loop = true // biar muter terus
async function maininLagu() {
if (!lagiPlay) {
lagiPlay = true
return suara.play()
} else return
}

// animasi scroll dari AOS biar keren gitu
AOS.init({
once: false,
offset: 100,
duration: 300,
easing: 'ease-in-out',
})

// tombol naik ke atas kalo udah scroll jauh
const tombolUp = document.getElementById('backToTop')

window.addEventListener('scroll', () => {
if (window.pageYOffset > 300) {
tombolUp.classList.remove('opacity-0', 'invisible')
tombolUp.classList.add('opacity-100', 'visible')
} else {
tombolUp.classList.remove('opacity-100', 'visible')
tombolUp.classList.add('opacity-0', 'invisible')
}
})

tombolUp.addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
})
})

// auto scroll pas klik anchor biar smooth
document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', e => {
e.preventDefault()
const tujuan = document.querySelector(link.getAttribute('href'))
if (tujuan) {
window.scrollTo({
top: tujuan.offsetTop - 80,
behavior: 'smooth'
})
}
})
})

// toggle menu kalo di hp
const btnMenu = document.getElementById('mobile-menu-button')
const menuMbl = document.getElementById('mobile-menu')

btnMenu.addEventListener('click', () => {
menuMbl.classList.toggle('hidden')
})

// tutup menu kalo klik link dalem menu
document.querySelectorAll('#mobile-menu a').forEach(link => {
link.addEventListener('click', () => {
menuMbl.classList.add('hidden')
})
})

// indikator scroll section biar user tau lagi di mana
const semuaSection = document.querySelectorAll('section')
const dotIndikator = document.querySelectorAll('.scroll-indicator-dot')

function cekAktifDot() {
let idSekarang = ''
semuaSection.forEach(sec => {
const atas = sec.offsetTop
const tinggi = sec.clientHeight
if (window.scrollY >= atas - 200) {
idSekarang = sec.id
}
})

dotIndikator.forEach(dot => {
dot.classList.remove('active')
if (dot.dataset.section === idSekarang) {
dot.classList.add('active')
}
})
}

// klik dot buat scroll ke section
dotIndikator.forEach(dot => {
dot.addEventListener('click', () => {
const idTujuan = dot.dataset.section
const sectionnya = document.getElementById(idTujuan)
if (sectionnya) {
window.scrollTo({
top: sectionnya.offsetTop,
behavior: 'smooth'
})
}
})
})

// dengerin scroll biar dot aktif update terus
window.addEventListener('scroll', cekAktifDot)
cekAktifDot()