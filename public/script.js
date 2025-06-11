let audio = new Audio('audio.mp3')
audio.loop = true
let started = false

document.onclick = () => {
if (!started) {
audio.play()
started = true
}
}
document.addEventListener('DOMContentLoaded', () => {
let lastScrollTop = 0;
let scrollDirection = 'down';

// Fungsi untuk membuat partikel di hero section
function initParticles() {
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 60;
const colors = ['#6c63ff', '#ff6584', '#4a44b5', '#ffffff'];

// Buat partikel
for (let i = 0; i < particleCount; i++) {
particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
radius: Math.random() * 4 + 1,
color: colors[Math.floor(Math.random() * colors.length)],
speed: Math.random() * 0.5 + 0.1,
angle: Math.random() * Math.PI * 2,
opacity: Math.random() * 0.5 + 0.3,
rotation: Math.random() * 360,
rotationSpeed: Math.random() * 2 - 1
});
}

// Fungsi menggambar partikel
function drawParticles() {
ctx.clearRect(0, 0, canvas.width, canvas.height);

particles.forEach(particle => {
ctx.beginPath();
ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
ctx.fillStyle = particle.color;
ctx.globalAlpha = particle.opacity;
ctx.fill();

// Update posisi partikel
particle.x += Math.cos(particle.angle) * particle.speed;
particle.y += Math.sin(particle.angle) * particle.speed;
particle.rotation += particle.rotationSpeed;

// Jika partikel keluar dari layar, munculkan di sisi lain
if (particle.x < -particle.radius) particle.x = canvas.width + particle.radius;
if (particle.x > canvas.width + particle.radius) particle.x = -particle.radius;
if (particle.y < -particle.radius) particle.y = canvas.height + particle.radius;
if (particle.y > canvas.height + particle.radius) particle.y = -particle.radius;

// Gambar efek cahaya
const gradient = ctx.createRadialGradient(
particle.x, particle.y, 0,
particle.x, particle.y, particle.radius * 3
);
gradient.addColorStop(0, particle.color);
gradient.addColorStop(1, 'transparent');

ctx.beginPath();
ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2);
ctx.fillStyle = gradient;
ctx.fill();
});

requestAnimationFrame(drawParticles);
}

drawParticles();

// Animasi partikel dengan Anime.js
anime({
targets: particles,
opacity: [
{ value: 0.8, duration: 1500 },
{ value: 0.3, duration: 1500 }
],
easing: 'easeInOutSine',
loop: true,
delay: anime.stagger(50)
});
}

// Deteksi arah scroll
window.addEventListener('scroll', function() {
const st = window.pageYOffset || document.documentElement.scrollTop;
if (st > lastScrollTop) {
scrollDirection = 'down';
} else {
scrollDirection = 'up';
}
lastScrollTop = st <= 0 ? 0 : st;

// Tampilkan/tutup tombol scroll-to-top
const scrollTopBtn = document.querySelector('.scroll-top');
if (window.scrollY > 500) {
scrollTopBtn.classList.add('visible');
} else {
scrollTopBtn.classList.remove('visible');
}
});

// Animasi untuk scroll-to-top
document.querySelector('.scroll-top').addEventListener('click', () => {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

// Animasi berdasarkan arah scroll
const animations = {
home: ({targets, direction}) => {
anime({ targets: '#home', opacity: [0,1], duration: 600, easing: 'easeOutQuad' });

if (direction === 'down') {
// Animasi untuk scroll down
anime.timeline()
.add({ targets: targets.avatar, opacity: [0,1], translateY: [100,0], duration: 1200, easing: 'easeOutElastic(1, .8)' })
.add({ targets: targets.homeTitle, opacity: [0,1], translateX: [-50,0], duration: 800 }, '-=1000')
.add({ targets: targets.homeDesc, opacity: [0,1], duration: 600 }, '-=800')
.add({ targets: targets.homeBtn, opacity: [0,1], scale: [0.8,1], duration: 800, easing: 'easeOutBack' }, '-=600');
} else {
// Animasi untuk scroll up
anime.timeline()
.add({ targets: targets.avatar, opacity: [0,1], rotate: [-30,0], duration: 1000, easing: 'easeOutBack' })
.add({ targets: targets.homeTitle, opacity: [0,1], translateY: [-30,0], duration: 800 }, '-=800')
.add({ targets: targets.homeDesc, opacity: [0,1], translateX: [50,0], duration: 700 }, '-=700')
.add({ targets: targets.homeBtn, opacity: [0,1], scale: [1.2,1], duration: 700, easing: 'easeOutQuad' }, '-=600');
}
},
about: ({targets, direction}) => {
anime({ targets: '#about', opacity: [0,1], duration: 600, easing: 'easeOutQuad' });

if (direction === 'down') {
// Animasi untuk scroll down
anime({ targets: targets.aboutImg, opacity: [0,1], translateY: [100,0], rotate: [15,0], duration: 1200, easing: 'easeOutElastic(1, .8)' });
anime({ targets: targets.aboutText, opacity: [0,1], translateX: [-50,0], duration: 1000, delay: 300, easing: 'easeOutQuad' });
anime({ targets: targets.aboutTitle, opacity: [0,1], scale: [0.8,1], duration: 800, easing: 'easeOutBack' });
} else {
// Animasi untuk scroll up
anime({ targets: targets.aboutImg, opacity: [0,1], translateY: [-100,0], rotate: [-15,0], duration: 1200, easing: 'easeOutElastic(1, .8)' });
anime({ targets: targets.aboutText, opacity: [0,1], translateX: [50,0], duration: 1000, delay: 300, easing: 'easeOutQuad' });
anime({ targets: targets.aboutTitle, opacity: [0,1], translateY: [30,0], duration: 800, easing: 'easeOutBack' });
}
},
techStack: ({targets, direction}) => {
anime({ targets: '#tech-stack', opacity: [0,1], duration: 600, easing: 'easeOutQuad' });

if (direction === 'down') {
// Animasi untuk scroll down
anime({ targets: targets.techTitle, opacity: [0,1], scale: [0.8,1], duration: 800, easing: 'easeOutBack' });
anime({ 
targets: targets.techCard, 
opacity: [0,1], 
translateY: [50,0], 
delay: anime.stagger(150, {start: 300}),
duration: 800, 
easing: 'easeOutQuad' 
});
} else {
// Animasi untuk scroll up
anime({ targets: targets.techTitle, opacity: [0,1], translateY: [-30,0], duration: 800, easing: 'easeOutBack' });
anime({ 
targets: targets.techCard, 
opacity: [0,1], 
translateX: direction === 'down' ? [50,0] : [-50,0], 
rotate: direction === 'down' ? [10,0] : [-10,0],
delay: anime.stagger(150, {start: 300, direction: 'reverse'}),
duration: 800, 
easing: 'easeOutQuad' 
});
}
},
projects: ({targets, direction}) => {
anime({ targets: '#projects', opacity: [0,1], duration: 600, easing: 'easeOutQuad' });

if (direction === 'down') {
// Animasi untuk scroll down
anime({ targets: targets.projectsTitle, opacity: [0,1], rotateX: [-90,0], duration: 1000, easing: 'easeOutBack' });
anime({ 
targets: targets.projCard, 
opacity: [0,1], 
translateY: [100,0], 
delay: anime.stagger(150, {start: 400}),
duration: 800, 
easing: 'easeOutQuad' 
});
} else {
// Animasi untuk scroll up
anime({ targets: targets.projectsTitle, opacity: [0,1], scale: [1.2,1], duration: 800, easing: 'easeOutElastic(1, .8)' });
anime({ 
targets: targets.projCard, 
opacity: [0,1], 
translateX: direction === 'down' ? [100,0] : [-100,0], 
rotate: direction === 'down' ? [10,0] : [-10,0],
delay: anime.stagger(150, {start: 400, direction: 'reverse'}),
duration: 800, 
easing: 'easeOutQuad' 
});
}
}
};

// Typed.js init
new Typed('#typ', { 
strings: ['SatzzDev','Fullstack Developer'],
typeSpeed: 100, 
backSpeed: 50, 
loop: true 
});

// Inisialisasi partikel
initParticles();

// Animasi tambahan untuk avatar
anime({
targets: '.avatar-container',
scale: [0.9, 1],
rotate: [5, 0],
duration: 2000,
easing: 'easeOutElastic(1, .8)',
delay: 1000
});

// Animasi untuk tombol di home
anime({
targets: '.btn',
translateY: [10, 0],
opacity: [0, 1],
delay: anime.stagger(200),
duration: 1000
});

// Animasi untuk kartu tech stack
anime({
targets: '.tech-item',
translateY: [20, 0],
opacity: [0, 1],
delay: anime.stagger(100),
duration: 800,
easing: 'easeOutQuad'
});

// Observe dan trigger animasi section pada scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
const section = entry.target;
const key = section.getAttribute('data-anim');
if (entry.isIntersecting) {
const targets = {};
section.querySelectorAll('[data-anim-target]').forEach(el => {
const name = el.getAttribute('data-anim-target');
targets[name] = targets[name] || [];
targets[name].push(el);
});

for (let k in targets) {
if (targets[k].length === 1) targets[k] = targets[k][0];
}

// Terapkan animasi dengan arah scroll saat ini
animations[key]({ 
targets,
direction: scrollDirection
});

// Hanya unobserve home section
if (key === 'home') {
observer.unobserve(section);
}
}
});
}, { threshold: 0.3 });

// Atur semua section ke opacity 0 saat pertama kali
document.querySelectorAll('.page').forEach(sec => {
sec.style.opacity = 0;
sec.querySelectorAll('[data-anim-target]').forEach(el => el.style.opacity = 0);
observer.observe(sec);
});

// Resize canvas saat ukuran window berubah
window.addEventListener('resize', () => {
const canvas = document.getElementById('particle-canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
});
});
