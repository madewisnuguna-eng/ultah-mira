
const namaPenerima = "Honeyyy💖💖";
const pesanUtama   = "I hope that on your special day, you’ll be happy with what I’ve given you, and I also truly hope that you’ll be able to achieve your dreams. ✨";
const pesanKejutan = "🎉 I Hope you always happy, and i am so proud of you cause you are the one girl, who can understand me 🎉";


document.getElementById('nama').textContent  = namaPenerima;
document.getElementById('pesan').textContent = pesanUtama;
document.getElementById('year').textContent  = new Date().getFullYear();

const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');
let musikNyala = false;

function toggleMusic() {
  if (musikNyala) {
    bgMusic.pause();
    musicIcon.textContent = '🔇';
    musicBtn.classList.remove('playing');
    musikNyala = false;
  } else {
    bgMusic.play().catch(err => {
      console.log('Autoplay diblokir browser:', err);
    });
    musicIcon.textContent = '🎵';
    musicBtn.classList.add('playing');
    musikNyala = true;
  }
}


function cobaAutoplay() {
  bgMusic.play()
    .then(() => {
      musikNyala = true;
      musicBtn.classList.add('playing');
      musicIcon.textContent = '🎵';
    })
    .catch(() => {

    });
  document.removeEventListener('click', cobaAutoplay);
}
document.addEventListener('click', cobaAutoplay, { once: true });


function tampilKejutan() {
  const surprise = document.getElementById('surprise');
  surprise.textContent = pesanKejutan;
  surprise.classList.toggle('show');

  for (let i = 0; i < 50; i++) buatKonfeti(true);

  if (!musikNyala) toggleMusic();
}


const warna = ['#ff6a88', '#ffd89b', '#ffe066', '#66d9ff', '#a78bfa', '#34d399', '#f472b6'];

function buatKonfeti(meledak = false) {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)];
  confetti.style.width  = Math.random() * 8 + 5 + 'px';
  confetti.style.height = Math.random() * 8 + 5 + 'px';
  confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';

  const durasi = Math.random() * 3 + 3;
  confetti.style.animationDuration = durasi + 's';
  confetti.style.animationDelay = meledak
    ? Math.random() * 0.5 + 's'
    : Math.random() * 5 + 's';

  document.body.appendChild(confetti);
  setTimeout(() => confetti.remove(), (durasi + 5) * 1000);
}

setInterval(() => buatKonfeti(), 400);
for (let i = 0; i < 25; i++) buatKonfeti();


function buatBalon() {
  const balon = document.createElement('div');
  balon.classList.add('balloon');
  balon.style.left = Math.random() * 90 + 'vw';
  balon.style.background = `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.7), ${warna[Math.floor(Math.random() * warna.length)]})`;
  balon.style.animationDuration = Math.random() * 6 + 8 + 's';
  balon.style.animationDelay = Math.random() * 5 + 's';
  balon.style.width  = Math.random() * 30 + 45 + 'px';
  balon.style.height = Math.random() * 40 + 60 + 'px';

  document.body.appendChild(balon);
  setTimeout(() => balon.remove(), 25000);
}

setInterval(buatBalon, 2000);
for (let i = 0; i < 4; i++) buatBalon();


function openLightbox(el) {
  const img = el.querySelector('img');
  document.getElementById('lightboxImg').src = img.src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});