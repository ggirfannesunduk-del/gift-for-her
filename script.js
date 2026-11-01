let currentLang = 'ru';

// ============ ПАРОЛЬ ============
const lockScreen = document.getElementById('lockScreen');
const siteContent = document.getElementById('siteContent');
const passwordInput = document.getElementById('passwordInput');
const unlockBtn = document.getElementById('unlockBtn');
const lockError = document.getElementById('lockError');
const lockBox = document.querySelector('.lock-box');

function tryUnlock() {
  if (passwordInput.value === SITE_PASSWORD) {
    lockScreen.classList.add('hidden');
    siteContent.classList.add('visible');
    tryPlayMusic();
  } else {
    lockError.textContent = translations[currentLang].lockError;
    lockBox.classList.add('shake');
    passwordInput.value = '';
    setTimeout(() => lockBox.classList.remove('shake'), 400);
  }
}

unlockBtn.addEventListener('click', tryUnlock);
passwordInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') tryUnlock();
});

// ============ МУЗЫКА ============
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
let musicPlaying = false;

function tryPlayMusic() {
  bgMusic.volume = 0.4;
  bgMusic.play()
    .then(() => {
      musicPlaying = true;
      musicBtn.textContent = '🔊';
      musicBtn.classList.add('playing');
      musicBtn.title = translations[currentLang].musicOn;
    })
    .catch(() => {
      musicPlaying = false;
      musicBtn.textContent = '🔇';
      musicBtn.title = translations[currentLang].musicOff;
    });
}

musicBtn.addEventListener('click', () => {
  if (musicPlaying) {
    bgMusic.pause();
    musicPlaying = false;
    musicBtn.textContent = '🔇';
    musicBtn.classList.remove('playing');
    musicBtn.title = translations[currentLang].musicOff;
  } else {
    tryPlayMusic();
  }
});

// ============ ЛЕПЕСТКИ ============
function createPetals() {
  const container = document.getElementById('petals');
  const emojis = ['🌸', '🌺', '💖', '💕', '🌸', '💗'];
  const count = window.innerWidth < 600 ? 12 : 20;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.fontSize = (14 + Math.random() * 18) + 'px';
    petal.style.animationDuration = (8 + Math.random() * 8) + 's';
    petal.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(petal);
  }
}

// ============ ГАЛЕРЕИ ============
function renderGalleries() {
  ['general', 'best'].forEach(category => {
    const container = document.getElementById(category + 'Gallery');
    container.innerHTML = '';
    photosData[category].forEach(photo => {
      const card = document.createElement('div');
      card.className = 'photo-card';
      card.innerHTML = `<img src="${photo.src}" alt="" loading="lazy">`;
      card.addEventListener('click', () => openModal(photo));
      container.appendChild(card);
    });
  });
}

// ============ МОДАЛЬНОЕ ОКНО ============
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalDesc = document.getElementById('modalDesc');

function openModal(photo) {
  modalImg.src = photo.src;
  modalDesc.textContent = photo.descriptions[currentLang];
  modal.classList.add('show');
}

function closeModal() {
  modal.classList.remove('show');
}

document.querySelector('.close').addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// ============ ЯЗЫКИ ============
document.querySelectorAll('.lang-switcher button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.lang-switcher button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLang = btn.dataset.lang;
    applyLanguage();
  });
});

function applyLanguage() {
  const t = translations[currentLang];
  document.documentElement.lang = currentLang;
  document.getElementById('mainTitle').textContent = t.mainTitle;
  document.getElementById('tabGeneral').textContent = t.tabGeneral;
  document.getElementById('tabBest').textContent = t.tabBest;
  document.getElementById('tabLetter').textContent = t.tabLetter;
  document.getElementById('letterTitle').textContent = t.letterTitle;
  document.getElementById('letterBody').textContent = t.letterBody;
  document.getElementById('letterSign').textContent = t.letterSign;

  // Пароль-экран
  document.getElementById('lockTitle').textContent = t.lockTitle;
  passwordInput.placeholder = t.lockPlaceholder;
  unlockBtn.textContent = t.lockBtn;
  if (lockError.textContent) lockError.textContent = t.lockError;

  // Кнопка музыки
  musicBtn.title = musicPlaying ? t.musicOn : t.musicOff;

  // Модалка — если открыта
  if (modal.classList.contains('show')) {
    const src = modalImg.getAttribute('src');
    const all = [...photosData.general, ...photosData.best];
    const found = all.find(p => p.src === src);
    if (found) modalDesc.textContent = found.descriptions[currentLang];
  }
}

// ============ ВКЛАДКИ ============
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// ============ ЗАПУСК ============
renderGalleries();
applyLanguage();
createPetals();
passwordInput.focus();