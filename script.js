/* =============================================
   BEST FRIEND'S DAY WEBSITE — script.js
   All logic: animations, carousels, typewriter,
   counters, scroll effects, finale collage.
   ============================================= */

/* =============================================
   ★ EASY EDIT ZONE — Change these values ★
   ============================================= */

// TYPEWRITER: Lines typed in Section 1 letter
const TYPEWRITER_LINES = [
  "It's funny how life works.\n\n",
  "A year ago we were complete strangers.\n\n",
  "Neither of us knew that one random meeting at DSN ",
  "would become one of the most meaningful ",
  "friendships of my life.\n\n",
  "You are someone I can laugh with, cry with, ",
  "roast endlessly — and still know you'll always ",
  "have my back.\n\n",
  "This friendship is one of the things I'm most ",
  "grateful for. 💕"
];

// FRIENDSHIP STATS — Update these numbers
// (They also animate from 0, so big numbers work fine)
const FRIENDSHIP_STATS = {
  days:   365,   // Days of friendship
  trips:  4,     // Trips together
  calls:  200,   // Hours of calls
  photos: 500    // Photos shared
};

// COLLAGE PHOTOS — filenames used in the finale heart collage
// Add any photo filenames you want to appear in the heart
// REPLACE: change these to your actual image filenames
const COLLAGE_PHOTOS = [
  "dsn1.jpg",
  "dsn2.jpg",
  "food1.jpg",
  "food2.jpg",
  "lastday1.jpg",
  "lucknow1.jpg",
  "lucknow2.jpg",
  "bangalore1.jpg",
  "sangam1.jpg",
  "change.jpg"
];

/* =============================================
   HEART POSITIONS for the collage
   These x/y values (as % of 280px container)
   roughly trace a heart shape.
   ============================================= */
const HEART_POSITIONS = [
  {x: 35, y: 10}, {x: 55, y: 10}, {x: 20, y: 25},
  {x: 70, y: 25}, {x: 10, y: 40}, {x: 80, y: 40},
  {x: 5,  y: 55}, {x: 85, y: 55}, {x: 10, y: 68},
  {x: 78, y: 68}, {x: 20, y: 78}, {x: 68, y: 78},
  {x: 32, y: 86}, {x: 56, y: 86}, {x: 44, y: 92}
];

/* =============================================
   PRELOADER
   ============================================= */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
    initPetals();
  }, 1200);
});

/* =============================================
   MUSIC TOGGLE
   ============================================= */
const musicBtn = document.getElementById("music-btn");
const bgm       = document.getElementById("bgm");
let   musicOn   = false;

musicBtn.addEventListener("click", () => {
  musicOn = !musicOn;
  if (musicOn) {
    bgm.volume = 0.3;
    bgm.play().catch(() => {}); // silently fail if no file
    musicBtn.classList.add("playing");
    musicBtn.querySelector(".music-icon").textContent = "🎶";
  } else {
    bgm.pause();
    musicBtn.classList.remove("playing");
    musicBtn.querySelector(".music-icon").textContent = "🎵";
  }
});

/* =============================================
   FALLING PETALS (hero section)
   ============================================= */
function initPetals() {
  const container = document.getElementById("petals");
  if (!container) return;
  const emojis = ["🌸", "🌺", "✨", "💕", "🌷", "💫"];
  for (let i = 0; i < 18; i++) {
    const p    = document.createElement("div");
    p.classList.add("petal");
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left   = Math.random() * 100 + "%";
    p.style.top    = -(Math.random() * 20) + "px";
    p.style.fontSize = (0.7 + Math.random() * 0.8) + "rem";
    p.style.animationDuration  = (5 + Math.random() * 8) + "s";
    p.style.animationDelay     = (Math.random() * 6) + "s";
    p.style.opacity = 0;
    container.appendChild(p);
  }
}

/* =============================================
   ENVELOPE OPEN → auto-scroll to letter
   ============================================= */
const envelopeWrap = document.getElementById("envelopeWrap");
const envelope     = document.getElementById("envelope");

function openEnvelope() {
  envelope.classList.add("open");
  setTimeout(() => {
    document.getElementById("letter").scrollIntoView({ behavior: "smooth" });
  }, 700);
}

envelopeWrap.addEventListener("click", openEnvelope);
envelopeWrap.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") openEnvelope();
});

/* =============================================
   TYPEWRITER EFFECT (Section 1)
   ============================================= */
let typewriterDone = false;

function startTypewriter() {
  if (typewriterDone) return;
  typewriterDone = true;

  const container = document.getElementById("typewriter-container");
  const scrollHint = document.getElementById("scrollHint");
  const fullText   = TYPEWRITER_LINES.join("");
  let   i          = 0;

  // Add blinking cursor
  const cursor = document.createElement("span");
  cursor.classList.add("cursor");
  container.appendChild(cursor);

  const interval = setInterval(() => {
    if (i < fullText.length) {
      cursor.insertAdjacentText("beforebegin", fullText[i]);
      i++;
    } else {
      clearInterval(interval);
      cursor.remove();
      // Show scroll hint after typing ends
      setTimeout(() => {
        scrollHint.style.opacity = "1";
      }, 400);
    }
  }, 35); // speed: lower = faster
}

/* =============================================
   STARS BACKGROUND (dark sections)
   ============================================= */
function createStars(containerId, count = 60) {
  const container = document.getElementById(containerId);
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.classList.add("star-particle");
    const size = 1 + Math.random() * 2.5;
    star.style.cssText = `
      width:${size}px; height:${size}px;
      top:${Math.random()*100}%;
      left:${Math.random()*100}%;
      animation-duration:${1.5 + Math.random() * 3}s;
      animation-delay:${Math.random() * 3}s;
    `;
    container.appendChild(star);
  }
}

createStars("starsBg", 70);
createStars("starsBg2", 80);

/* =============================================
   CAROUSEL
   ============================================= */
const carouselStates = {};

function initCarousel(trackId, dotsId, slideCount) {
  carouselStates[trackId] = { current: 0, total: slideCount };
  const dotsContainer = document.getElementById(dotsId);
  if (!dotsContainer) return;
  for (let i = 0; i < slideCount; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(trackId, dotsId, i));
    dotsContainer.appendChild(dot);
  }
}

function goToSlide(trackId, dotsId, index) {
  const state = carouselStates[trackId];
  if (!state) return;
  state.current = Math.max(0, Math.min(index, state.total - 1));
  const track = document.getElementById(trackId);
  if (track) track.style.transform = `translateX(-${state.current * 100}%)`;
  // Update dots
  const dotsEl = document.getElementById(dotsId);
  if (dotsEl) {
    dotsEl.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === state.current);
    });
  }
}

window.slideCarousel = function(trackId, dir) {
  const state = carouselStates[trackId];
  if (!state) return;
  const newIndex = (state.current + dir + state.total) % state.total;
  // Determine dotsId from trackId (convention: replace "Track" with "Dots")
  const dotsId = trackId.replace("Track", "Dots");
  goToSlide(trackId, dotsId, newIndex);
};

// Initialize carousels
initCarousel("dsnTrack", "dsnDots", 3);

// Touch/swipe support for carousels
function addSwipe(trackId) {
  const track = document.getElementById(trackId);
  if (!track) return;
  let startX = 0;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) window.slideCarousel(trackId, diff > 0 ? 1 : -1);
  }, { passive: true });
}

addSwipe("dsnTrack");

/* =============================================
   COUNTER ANIMATION (Section 11)
   ============================================= */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current) + suffix;
    if (current >= target) clearInterval(timer);
  }, 16);
}

/* =============================================
   "WHAT CHANGED" LINE ANIMATION
   ============================================= */
function animateChangeLines() {
  const lines = document.querySelectorAll(".change-line");
  lines.forEach((line) => {
    const delay = parseInt(line.dataset.delay || 0, 10);
    setTimeout(() => {
      line.classList.add("visible");
    }, delay);
  });
}

/* =============================================
   LAST DAY TEXT REVEAL
   ============================================= */
function revealLastDayText() {
  document.getElementById("lastdayText")?.classList.add("visible");
}

/* =============================================
   FINAL ENVELOPE
   ============================================= */
const finalEnv   = document.getElementById("finalEnvelope");
const finalPaper = document.getElementById("finalLetterPaper");

finalEnv?.addEventListener("click", () => {
  finalEnv.classList.toggle("open");
  if (finalPaper) {
    if (finalPaper.style.display === "none") {
      finalPaper.style.display = "block";
    } else {
      finalPaper.style.display = "none";
    }
  }
});

/* =============================================
   FINALE HEART COLLAGE
   ============================================= */
function buildCollage() {
  const container = document.getElementById("collagePhotos");
  if (!container) return;

  const positions = HEART_POSITIONS;
  const photos    = COLLAGE_PHOTOS;

  photos.forEach((src, i) => {
    const pos = positions[i % positions.length];
    const img = document.createElement("img");
    img.src   = src;
    img.alt   = `Memory ${i + 1}`;
    img.loading = "lazy";
    img.classList.add("collage-photo");
    img.style.cssText = `
      left: ${pos.x}%;
      top:  ${pos.y}%;
      animation-delay: ${0.2 + i * 0.15}s;
    `;
    container.appendChild(img);
  });
}

/* =============================================
   INTERSECTION OBSERVER — Trigger all effects
   on scroll
   ============================================= */
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -60px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;

    // General reveal
    if (el.classList.contains("reveal-section")) {
      el.classList.add("visible");
    }

    // Section-specific triggers
    const id = el.id;

    if (id === "letter") {
      setTimeout(startTypewriter, 300);
    }

    if (id === "lastday") {
      setTimeout(revealLastDayText, 600);
    }

    if (id === "stats") {
      document.querySelectorAll(".stat-num").forEach((numEl) => {
        animateCounter(numEl);
      });
    }

    if (id === "changed") {
      setTimeout(animateChangeLines, 400);
    }

    if (id === "finale") {
      buildCollage();
    }

    observer.unobserve(el); // fire once
  });
}, observerOptions);

// Observe all relevant sections
document.querySelectorAll(
  ".reveal-section, #letter, #lastday, #stats, #changed, #finale"
).forEach((el) => observer.observe(el));

/* =============================================
   FLOATING DOG easter egg
   ============================================= */
let dogBarking = false;
document.getElementById("floatingDog")?.addEventListener("click", () => {
  if (dogBarking) return;
  dogBarking = true;
  const dog = document.getElementById("floatingDog");
  dog.textContent = "🐶💨";
  setTimeout(() => {
    dog.textContent = "🐶";
    dogBarking = false;
  }, 1000);
});

/* =============================================
   REPLAY JOURNEY
   ============================================= */
window.replayJourney = function() {
  typewriterDone = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  // Reset envelope
  envelope?.classList.remove("open");
  finalEnv?.classList.remove("open");
  if (finalPaper) finalPaper.style.display = "none";
  // Reset typewriter
  const tw = document.getElementById("typewriter-container");
  if (tw) tw.innerHTML = "";
  const sh = document.getElementById("scrollHint");
  if (sh) sh.style.opacity = "0";
  // Reset change lines
  document.querySelectorAll(".change-line").forEach((l) => l.classList.remove("visible"));
  // Reset lastday text
  document.getElementById("lastdayText")?.classList.remove("visible");
  // Reset collage
  const cp = document.getElementById("collagePhotos");
  if (cp) cp.innerHTML = "";
  // Re-observe sections
  document.querySelectorAll(
    ".reveal-section, #letter, #lastday, #stats, #changed, #finale"
  ).forEach((el) => {
    el.classList.remove("visible");
    observer.observe(el);
  });
};
