/* ===== State ===== */
const state = {
  currentTheme: null,
  currentCharacter: null,
  currentVerse: null,
  lastShownIndex: {}
};

/* ===== DOM References ===== */
const $ = (id) => document.getElementById(id);
const grid = $('characters-grid');
const modal = $('verse-modal');
const verseCharEl = $('verse-character');
const verseKoEl = $('verse-korean');
const verseEnEl = $('verse-english');
const verseRefEl = $('verse-reference');
const btnAnother = $('btn-another');
const toast = $('toast');

/* ===== Render Characters ===== */
function renderCharacters() {
  grid.innerHTML = CHARACTERS.map((ch, i) => `
    <button class="character-btn" data-theme="${ch.theme}" data-index="${i}"
      style="--btn-color: ${ch.color}">
      <span class="character-emoji">${ch.emoji}</span>
    </button>
  `).join('');
}

/* ===== Get Random Verse ===== */
function getRandomVerse(theme) {
  const pool = VERSES[theme];
  if (!pool || pool.length === 0) return null;

  let index;
  if (pool.length === 1) {
    index = 0;
  } else {
    do {
      index = Math.floor(Math.random() * pool.length);
    } while (index === state.lastShownIndex[theme]);
  }

  state.lastShownIndex[theme] = index;
  return pool[index];
}

/* ===== Show Verse ===== */
function showVerse(theme, characterIndex) {
  const character = CHARACTERS[characterIndex];
  const verse = getRandomVerse(theme);
  if (!verse) return;

  state.currentTheme = theme;
  state.currentCharacter = character;
  state.currentVerse = verse;

  // Update card content
  modal.setAttribute('data-theme', theme);
  verseCharEl.textContent = character.emoji;
  verseKoEl.textContent = verse.korean;
  verseEnEl.textContent = verse.english;
  verseRefEl.textContent = `${verse.reference} | ${verse.referenceEn}`;

  // Update cheering message
  const cheerEl = document.getElementById('verse-cheering');
  cheerEl.textContent = character.cheering;
  cheerEl.style.color = character.cheerColor;

  // Apply theme color to card top bar
  const card = modal.querySelector('.verse-card');
  card.style.setProperty('--card-color', character.color);
  card.querySelector('::before');
  card.style.borderTop = `5px solid ${character.color}`;

  // Show modal
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Re-trigger animation
  card.style.animation = 'none';
  card.offsetHeight; // force reflow
  card.style.animation = '';

  parseTwemoji();
}

/* ===== Close Modal ===== */
function closeModal() {
  modal.classList.add('hidden');
  document.body.style.overflow = '';
}

/* ===== Share ===== */
async function shareVerse() {
  if (!state.currentVerse) return;

  const text = `${state.currentVerse.korean}\n\n${state.currentVerse.english}\n\n- ${state.currentVerse.reference}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: '오늘의 말씀',
        text: text,
        url: window.location.href
      });
    } catch (e) {
      // User cancelled share
    }
  } else {
    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(text + '\n\n' + window.location.href);
      showToast('말씀이 복사되었습니다!');
    } catch (e) {
      showToast('복사에 실패했습니다');
    }
  }
}

/* ===== Toast ===== */
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 2000);
}

/* ===== Particles ===== */
function initParticles() {
  const container = $('particles');
  const emojis = ['\u2728', '\u2B50', '\uD83D\uDCAB', '\uD83C\uDF38', '\uD83D\uDC96', '\uD83C\uDF3C', '\u2764\uFE0F'];
  const count = 18;

  for (let i = 0; i < count; i++) {
    const span = document.createElement('span');
    span.className = 'particle';
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 100 + '%';
    span.style.top = (Math.random() * 100 + 100) + '%';
    span.style.fontSize = (Math.random() * 1 + 0.6) + 'rem';
    span.style.animationDuration = (Math.random() * 8 + 8) + 's';
    span.style.animationDelay = (Math.random() * 10) + 's';
    container.appendChild(span);
  }
}

/* ===== Utility ===== */
function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/* ===== Event Listeners ===== */
function setupEventListeners() {
  // Character button clicks
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.character-btn');
    if (!btn) return;
    const theme = btn.dataset.theme;
    const index = parseInt(btn.dataset.index);
    showVerse(theme, index);
  });

  // Close modal
  modal.querySelector('.close-btn').addEventListener('click', closeModal);
  modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Another verse
  btnAnother.addEventListener('click', () => {
    if (state.currentTheme && state.currentCharacter) {
      showVerse(state.currentTheme, CHARACTERS.indexOf(state.currentCharacter));
    }
  });

}

/* ===== Init ===== */
function parseTwemoji() {
  if (typeof twemoji !== 'undefined') {
    twemoji.parse(document.body, {
      folder: 'svg',
      ext: '.svg'
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderCharacters();
  initParticles();
  setupEventListeners();
  parseTwemoji();
});
