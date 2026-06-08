
Action: file_editor create /app/style.css --file-text "/* =================================================================
   Best Friend's Day — Memory Book for Simran ♥
   Soft pastel pink + cream + gold storybook aesthetic
   Mobile-first | GitHub Pages compatible | No frameworks
   ================================================================= */

/* ---------- 1.  TOKENS  ---------- */
:root {
  --cream:        #fff7f1;
  --cream-2:      #fdeef0;
  --blush:        #f6d3d6;
  --pink:         #f4a8b4;
  --pink-deep:    #e88a99;
  --gold:         #c9a35a;
  --gold-soft:    #e6c989;
  --ink:          #4a2e36;
  --ink-soft:     #6d4a52;
  --paper:        #fffaf3;
  --night:        #1a1230;
  --night-2:      #2a1d49;
  --star:         #ffe9b8;

  --shadow-soft:  0 10px 30px rgba(220, 150, 160, 0.18);
  --shadow-tape:  0 4px 14px rgba(0, 0, 0, 0.08);

  --font-script:  \"Caveat\", \"Dancing Script\", cursive;
  --font-serif:   \"Cormorant Garamond\", Georgia, serif;
  --font-script-2: \"Dancing Script\", cursive;
}

/* ---------- 2.  BASE  ---------- */
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; }
body {
  font-family: var(--font-serif);
  color: var(--ink);
  background: var(--cream);
  line-height: 1.55;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}
img { display: block; max-width: 100%; }
button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }

/* ---------- 3.  GLOBAL DECORATIONS  ---------- */
.sky {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
}
.float-item {
  position: absolute;
  opacity: 0;
  animation: floatUp linear infinite;
  will-change: transform, opacity;
}
.float-item.heart { color: var(--pink); font-size: 1rem; }
.float-item.star  { color: var(--gold); font-size: 0.85rem; }
@keyframes floatUp {
  0%   { transform: translateY(0) rotate(0deg);    opacity: 0; }
  10%  { opacity: 0.7; }
  90%  { opacity: 0.6; }
  100% { transform: translateY(-110vh) rotate(60deg); opacity: 0; }
}

/* progress bar */
.progress-bar {
  position: fixed;
  top: 0; left: 0;
  width: 0%;
  height: 3px;
  background: linear-gradient(90deg, var(--pink) 0%, var(--gold) 100%);
  z-index: 100;
  transition: width 0.1s linear;
}

/* music toggle */
.music-toggle {
  position: fixed;
  top: 14px;
  right: 14px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: var(--shadow-soft);
  z-index: 99;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  color: var(--pink-deep);
  transition: transform 0.25s ease, background 0.25s ease;
}
.music-toggle:hover { transform: scale(1.08); }
.music-toggle.playing .music-icon { animation: spin 4s linear infinite; }
@keyframes spin { to { transform: rotate(360deg); } }

/* ---------- 4.  CHAPTER LAYOUT  ---------- */
.chapter {
  position: relative;
  min-height: 100vh;
  padding: 90px 22px 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 2;
}
.chapter-tag {
  font-family: var(--font-script);
  color: var(--gold);
  font-size: 1.05rem;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  opacity: 0.85;
}
.chapter-tag.light { color: var(--star); }
.chapter-date {
  font-family: var(--font-script);
  color: var(--pink-deep);
  font-size: 1.6rem;
  margin-bottom: 4px;
}
.chapter-title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-style: italic;
  font-size: clamp(1.9rem, 7vw, 2.8rem);
  letter-spacing: -0.5px;
  margin-bottom: 28px;
  color: var(--ink);
}
.chapter-title.light { color: #f8e8d5; }
.chapter-sub {
  font-family: var(--font-script);
  font-size: 1.3rem;
  color: var(--gold);
  margin: -18px 0 24px;
}
.emoji { font-style: normal; }
.heart-inline { color: var(--pink-deep); display: inline-block; }

/* story text */
.story-block {
  font-family: var(--font-script);
  font-size: 1.5rem;
  line-height: 1.7;
  color: var(--ink-soft);
  margin-top: 30px;
  max-width: 520px;
}
.story-block.light { color: #f6e5d3; }
.story-block .soft { opacity: 0.75; font-style: italic; }
.story-block em { color: var(--pink-deep); font-style: italic; }
.story-block .highlight {
  background: linear-gradient(transparent 60%, var(--gold-soft) 60%);
  padding: 0 4px;
}
.big-line { font-size: 1.9rem; color: var(--pink-deep); }

/* ---------- 5.  REVEAL ANIMATION  ---------- */
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- 6.  CHAPTER 1 — COVER  ---------- */
.cover {
  background: linear-gradient(135deg, #fff0e8 0%, #fde2e6 50%, #f7d6dc 100%);
  overflow: hidden;
}
.cover-gradient {
  position: absolute;
  inset: -20%;
  background:
    radial-gradient(circle at 20% 30%, rgba(255, 200, 210, 0.6), transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(232, 200, 140, 0.45), transparent 55%);
  animation: drift 14s ease-in-out infinite alternate;
  z-index: 0;
}
@keyframes drift {
  to { transform: translate(20px, -20px) scale(1.08); }
}
.cover-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cover-eyebrow {
  font-family: var(--font-script);
  color: var(--gold);
  font-size: 1.1rem;
  letter-spacing: 1px;
  margin-bottom: 6px;
}
.cover-title {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(2.4rem, 10vw, 3.8rem);
  color: var(--ink);
  letter-spacing: -1px;
  margin-bottom: 6px;
}
.cover-subtitle {
  font-family: var(--font-script);
  font-weight: 600;
  font-size: clamp(1.5rem, 6vw, 2rem);
  color: var(--pink-deep);
  margin-bottom: 36px;
}

/* envelope */
.envelope {
  position: relative;
  width: min(280px, 78vw);
  height: 180px;
  margin: 18px auto 36px;
  cursor: pointer;
  perspective: 800px;
}
.envelope-back, .envelope-front {
  position: absolute;
  inset: 0;
  border-radius: 6px;
  background: linear-gradient(180deg, #fbeada, #f3d5b9);
  box-shadow: var(--shadow-soft);
}
.envelope-front {
  background: linear-gradient(180deg, #f6cfb8, #ecb893);
  z-index: 3;
  clip-path: polygon(0 100%, 0 28%, 50% 70%, 100% 28%, 100% 100%);
}
.envelope-flap {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: linear-gradient(180deg, #f0c197, #e1a173);
  clip-path: polygon(0 0, 100% 0, 50% 65%);
  transform-origin: top center;
  transition: transform 1s cubic-bezier(.7,.05,.3,1);
  z-index: 4;
}
.envelope.open .envelope-flap { transform: rotateX(180deg); }
.envelope-heart {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  color: #fff;
  background: var(--pink-deep);
  width: 36px; height: 36px;
  border-radius: 50%;
  display: grid; place-items: center;
  box-shadow: 0 6px 14px rgba(232,138,153,0.45);
  z-index: 5;
  animation: pulse 1.8s ease-in-out infinite;
}
.envelope.open .envelope-heart { opacity: 0; transition: opacity 0.4s; }
@keyframes pulse {
  0%,100% { transform: translate(-50%, -50%) scale(1); }
  50%     { transform: translate(-50%, -50%) scale(1.12); }
}
.envelope-letter {
  position: absolute;
  inset: 18px 18px 32px;
  background: var(--paper);
  border-radius: 4px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 1.1s cubic-bezier(.7,.05,.3,1) 0.4s;
  box-shadow: inset 0 0 0 1px rgba(201,163,90,0.2);
}
.envelope.open .envelope-letter { transform: translateY(-58%); }
.letter-line {
  font-family: var(--font-script);
  font-size: 1.4rem;
  color: var(--ink);
  line-height: 1.2;
}

.open-btn {
  background: var(--ink);
  color: var(--cream);
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.05rem;
  padding: 14px 32px;
  border-radius: 999px;
  letter-spacing: 0.5px;
  box-shadow: var(--shadow-soft);
  transition: transform 0.25s ease, background 0.25s ease;
}
.open-btn:hover { transform: translateY(-2px); background: var(--pink-deep); }
.open-btn:active { transform: translateY(0); }

.scroll-hint {
  margin-top: 28px;
  font-family: var(--font-script);
  color: var(--ink-soft);
  font-size: 1.1rem;
  opacity: 0.7;
  animation: bob 2.4s ease-in-out infinite;
}
@keyframes bob { 50% { transform: translateY(6px); } }

/* ---------- 7.  CHAPTER 2 — BEGINNING (scrapbook)  ---------- */
.beginning {
  background:
    radial-gradient(circle at 100% 0%, rgba(232, 200, 140, 0.15), transparent 50%),
    var(--cream);
}
.scrapbook {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 560px;
  margin: 0 auto 10px;
}
.scrap {
  background: var(--paper);
  padding: 12px 12px 36px;
  box-shadow: var(--shadow-tape);
  position: relative;
  border-radius: 2px;
}
.scrap::before {
  content: \"\";
  position: absolute;
  top: -10px; left: 50%;
  transform: translateX(-50%) rotate(-3deg);
  width: 70px; height: 18px;
  background: rgba(232, 200, 140, 0.55);
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
}
.scrap img {
  width: 100%;
  height: auto;
  /* CRITICAL: never crop the memory */
  object-fit: contain;
  background: var(--cream-2);
  border-radius: 2px;
}
.scrap figcaption {
  font-family: var(--font-script);
  color: var(--ink-soft);
  font-size: 1.15rem;
  margin-top: 10px;
}
.scrap-tilt-left  { transform: rotate(-2deg); }
.scrap-tilt-right { transform: rotate(2deg); }
.scrap-tilt-left:hover, .scrap-tilt-right:hover { transform: rotate(0deg) scale(1.02); transition: transform .4s ease; }

/* ---------- 8.  CHAPTER 3 — DOG  ---------- */
.dog-story {
  background:
    radial-gradient(circle at 0% 100%, rgba(244, 168, 180, 0.18), transparent 55%),
    var(--cream);
}
.dog-grid {
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;
  max-width: 520px;
}

/* polaroid */
.polaroid {
  background: var(--paper);
  padding: 14px 14px 50px;
  box-shadow: 0 14px 30px rgba(120, 80, 90, 0.15);
  border-radius: 3px;
  position: relative;
}
.polaroid img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: var(--cream-2);
}
.polaroid figcaption {
  position: absolute;
  bottom: 12px; left: 0; right: 0;
  text-align: center;
  font-family: var(--font-script);
  color: var(--ink-soft);
  font-size: 1.15rem;
}
.polaroid-pop:nth-child(odd)  { transform: rotate(-3deg); }
.polaroid-pop:nth-child(even) { transform: rotate(2deg); }

.story-block.playful {
  font-size: 1.7rem;
  line-height: 1.6;
}

/* ---------- 9.  CHAPTER 4 — LITTLE MOMENTS  ---------- */
.little-moments {
  background:
    radial-gradient(circle at 100% 50%, rgba(230, 201, 137, 0.2), transparent 55%),
    var(--cream);
}
.polaroid-stack {
  display: flex;
  flex-direction: column;
  gap: 38px;
  width: 100%;
  max-width: 520px;
}
.polaroid-stack .polaroid:nth-child(1) { transform: rotate(-4deg); }
.polaroid-stack .polaroid:nth-child(2) { transform: rotate(3deg); }
.polaroid-stack .polaroid:nth-child(3) { transform: rotate(-2deg); }

.tape-top::before {
  content: \"\";
  position: absolute;
  top: -10px; left: 50%;
  transform: translateX(-50%) rotate(-2deg);
  width: 80px; height: 18px;
  background: rgba(244, 168, 180, 0.55);
}
.tape-side::before {
  content: \"\";
  position: absolute;
  top: 18px; left: -14px;
  transform: rotate(-32deg);
  width: 60px; height: 18px;
  background: rgba(230, 201, 137, 0.6);
}

/* ---------- 10. CHAPTER 5 — LAST DAY (dark + stars)  ---------- */
.last-day {
  background: linear-gradient(180deg, #2a1d49 0%, #1a1230 100%);
  color: #f6e5d3;
  overflow: hidden;
}
.stars { position: absolute; inset: 0; pointer-events: none; }
.star-twinkle {
  position: absolute;
  width: 3px; height: 3px;
  background: var(--star);
  border-radius: 50%;
  box-shadow: 0 0 6px var(--star);
  animation: twinkle 2.6s ease-in-out infinite;
}
@keyframes twinkle {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.4); }
}

.dual-frame {
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  max-width: 540px;
}
.frame {
  background: var(--paper);
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 14px 30px rgba(0,0,0,0.15);
}
.frame.dark { background: rgba(255,255,255,0.06); padding: 6px; box-shadow: 0 0 30px rgba(255, 233, 184, 0.08); }
.frame img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: rgba(0,0,0,0.2);
  border-radius: 2px;
}

/* ---------- 11. CHAPTER 6 — THE RIDE  ---------- */
.the-ride {
  background:
    radial-gradient(circle at 30% 0%, rgba(244, 168, 180, 0.18), transparent 50%),
    var(--cream);
}
.ride-timeline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  margin-bottom: 36px;
  flex-wrap: wrap;
}
.ride-node {
  background: var(--paper);
  border: 1.5px dashed var(--gold);
  border-radius: 999px;
  padding: 8px 16px;
  font-family: var(--font-script);
  font-size: 1.05rem;
  color: var(--ink-soft);
}
.ride-node.active {
  background: var(--pink-deep);
  color: #fff;
  border-style: solid;
  border-color: var(--pink-deep);
}
.ride-line {
  width: 30px;
  height: 2px;
  background: repeating-linear-gradient(90deg, var(--gold) 0 6px, transparent 6px 10px);
}
.ride-photos {
  display: flex;
  flex-direction: column;
  gap: 26px;
  width: 100%;
  max-width: 520px;
  margin-bottom: 10px;
}

/* ---------- 12. CHAPTER 7 — STATION  ---------- */
.station {
  background:
    radial-gradient(circle at 0% 100%, rgba(230, 201, 137, 0.18), transparent 55%),
    var(--cream);
}

/* ---------- 13. CHAPTER 8 — CALLS (night sky)  ---------- */
.calls {
  background: linear-gradient(180deg, #221a3f 0%, #0f0a25 100%);
  color: #f6e5d3;
  overflow: hidden;
}
.night-sky { position: absolute; inset: 0; pointer-events: none; }
.moon {
  position: absolute;
  top: 8%; right: 12%;
  width: 60px; height: 60px;
  background: radial-gradient(circle at 35% 35%, #fff5dc, #ecd29a 70%, transparent 75%);
  border-radius: 50%;
  box-shadow: 0 0 30px rgba(255,229,170,0.4);
}
.calls-grid {
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;
  max-width: 360px;
}
.phone-frame {
  background: linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  padding: 8px;
  border-radius: 22px;
  border: 1px solid rgba(255, 233, 184, 0.18);
  box-shadow: 0 14px 40px rgba(0,0,0,0.4), 0 0 30px rgba(255, 233, 184, 0.06);
}
.phone-frame img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: rgba(0,0,0,0.3);
  border-radius: 16px;
}

/* ---------- 14. CHAPTER 9 — LUCKNOW (travel diary)  ---------- */
.lucknow {
  background:
    radial-gradient(circle at 100% 0%, rgba(244, 168, 180, 0.15), transparent 50%),
    var(--cream);
}
.travel-diary {
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  width: 100%;
  max-width: 560px;
  margin-bottom: 6px;
}
.diary-card {
  background: var(--paper);
  padding: 12px 12px 18px;
  border-radius: 4px;
  box-shadow: var(--shadow-tape);
  position: relative;
}
.diary-card::after {
  content: \"\";
  position: absolute;
  bottom: 8px; right: 14px;
  width: 30px; height: 2px;
  background: var(--gold);
  opacity: 0.6;
}
.diary-card img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: var(--cream-2);
}
.diary-card figcaption {
  font-family: var(--font-script);
  color: var(--gold);
  font-size: 1.05rem;
  margin-top: 8px;
  text-align: left;
}

/* ---------- 15. CHAPTER 10 — BANGALORE  ---------- */
.bangalore {
  background:
    radial-gradient(circle at 50% 0%, rgba(230, 201, 137, 0.2), transparent 55%),
    linear-gradient(180deg, var(--cream) 0%, #fdf3eb 100%);
}
.peaceful-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 520px;
}
.soft-frame {
  background: rgba(255,255,255,0.7);
  backdrop-filter: blur(6px);
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 18px 40px rgba(201, 163, 90, 0.18);
}
.soft-frame img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: var(--cream-2);
  border-radius: 8px;
}

/* ---------- 16. CHAPTER 11 — WHAT CHANGED  ---------- */
.what-changed {
  background:
    radial-gradient(circle at 50% 100%, rgba(244, 168, 180, 0.2), transparent 55%),
    var(--cream);
}
.hero-frame {
  background: var(--paper);
  padding: 14px;
  border-radius: 6px;
  box-shadow: 0 22px 50px rgba(120, 80, 90, 0.2);
  margin-bottom: 36px;
  max-width: 480px;
  width: 100%;
}
.hero-frame img {
  width: 100%;
  height: auto;
  object-fit: contain;
  background: var(--cream-2);
}
.lines-reveal {
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: var(--font-script);
  color: var(--ink);
}
.lines-reveal .line {
  font-size: 1.45rem;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.lines-reveal.visible .line { opacity: 1; transform: translateY(0); }
.lines-reveal.visible .line:nth-child(1) { transition-delay: 0.1s; }
.lines-reveal.visible .line:nth-child(2) { transition-delay: 0.6s; }
.lines-reveal.visible .line:nth-child(3) { transition-delay: 1.1s; }
.lines-reveal.visible .line:nth-child(4) { transition-delay: 1.6s; }
.lines-reveal.visible .line:nth-child(5) { transition-delay: 2.1s; }
.lines-reveal .line.big {
  font-size: 1.9rem;
  color: var(--pink-deep);
  margin-top: 12px;
}

/* ---------- 17. CHAPTER 12 — TIMELINE  ---------- */
.timeline-chapter {
  background:
    radial-gradient(circle at 100% 50%, rgba(232, 200, 140, 0.15), transparent 60%),
    var(--cream);
}
.timeline {
  position: relative;
  width: 100%;
  max-width: 560px;
  padding: 20px 0;
}
.thread {
  position: absolute;
  top: 0; bottom: 0; left: 22px;
  width: 2px;
  background: linear-gradient(180deg, var(--gold-soft), var(--pink), var(--gold-soft));
  box-shadow: 0 0 12px rgba(232, 200, 140, 0.45);
}
.t-node {
  position: relative;
  padding-left: 50px;
  margin-bottom: 28px;
  text-align: left;
}
.t-node .dot {
  position: absolute;
  left: 14px;
  top: 8px;
  width: 18px; height: 18px;
  background: var(--pink-deep);
  border: 3px solid var(--cream);
  border-radius: 50%;
  box-shadow: 0 0 0 3px rgba(232,138,153,0.35), 0 0 14px rgba(232,138,153,0.5);
}
.t-card {
  background: var(--paper);
  padding: 14px 18px;
  border-radius: 8px;
  box-shadow: var(--shadow-tape);
}
.t-card h4 {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 500;
  font-size: 1.3rem;
  color: var(--ink);
  margin-bottom: 4px;
}
.t-card p {
  font-family: var(--font-script);
  color: var(--ink-soft);
  font-size: 1.1rem;
}

/* ---------- 18. CHAPTER 13 — FINAL LETTER  ---------- */
.final-letter {
  background: linear-gradient(180deg, var(--cream) 0%, #fde7e0 100%);
}
.letter-paper {
  background: var(--paper);
  background-image:
    repeating-linear-gradient(0deg, transparent 0 30px, rgba(201,163,90,0.08) 30px 31px);
  padding: 36px 28px;
  max-width: 520px;
  width: 100%;
  border-radius: 4px;
  box-shadow: 0 20px 60px rgba(120, 80, 90, 0.18);
  text-align: left;
  font-family: var(--font-script);
  font-size: 1.25rem;
  line-height: 1.7;
  color: var(--ink);
  position: relative;
}
.letter-paper::before {
  content: \"\";
  position: absolute;
  top: -10px; left: 50%;
  transform: translateX(-50%) rotate(-3deg);
  width: 90px; height: 20px;
  background: rgba(232, 200, 140, 0.6);
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
}
.letter-paper p { margin-bottom: 14px; }
.letter-sign {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.35rem;
  color: var(--pink-deep);
  margin-top: 20px;
}

/* ---------- 19. FINALE — HEART COLLAGE  ---------- */
.heart-finale {
  background: linear-gradient(180deg, #fde7e0 0%, #fff7f1 100%);
  text-align: center;
  overflow: hidden;
}
.heart-collage {
  position: relative;
  width: min(380px, 92vw);
  height: min(380px, 92vw);
  margin: 10px auto 30px;
}
.heart-photo {
  position: absolute;
  width: 50px; height: 50px;
  border-radius: 6px;
  background: var(--paper);
  padding: 3px;
  box-shadow: 0 6px 18px rgba(120, 80, 90, 0.2);
  overflow: hidden;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.4);
  transition: opacity 0.8s ease, transform 0.8s cubic-bezier(.4,.2,.2,1.2);
}
.heart-photo.show { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(var(--rot, 0deg)); }
.heart-photo img {
  width: 100%; height: 100%;
  object-fit: contain;
  background: var(--cream-2);
  border-radius: 4px;
}

.finale-text {
  font-family: var(--font-script);
  font-size: 1.5rem;
  color: var(--ink-soft);
  line-height: 1.8;
  margin-bottom: 30px;
}
.finale-text .big-line { color: var(--pink-deep); font-size: 1.9rem; margin-top: 10px; }

.replay-btn {
  background: linear-gradient(135deg, var(--pink-deep), var(--gold));
  color: #fff;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.05rem;
  padding: 14px 36px;
  border-radius: 999px;
  letter-spacing: 0.5px;
  box-shadow: 0 12px 30px rgba(232,138,153,0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.replay-btn:hover { transform: translateY(-2px) scale(1.03); }

.footer {
  margin-top: 40px;
  font-family: var(--font-script);
  color: var(--ink-soft);
  opacity: 0.7;
  font-size: 1rem;
}

/* ---------- 20.  TABLET + DESKTOP  ---------- */
@media (min-width: 720px) {
  .chapter { padding: 120px 40px; }
  .scrapbook, .dog-grid, .polaroid-stack, .ride-photos, .calls-grid, .peaceful-grid {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 920px;
  }
  .scrapbook .scrap, .dog-grid .polaroid, .polaroid-stack .polaroid,
  .ride-photos .scrap, .calls-grid .phone-frame, .peaceful-grid .soft-frame {
    flex: 1 1 280px;
    max-width: 320px;
  }
  .dual-frame { flex-direction: row; max-width: 820px; }
  .dual-frame .frame { flex: 1; }
  .travel-diary { grid-template-columns: 1fr 1fr; max-width: 760px; }
  .heart-collage { width: 460px; height: 460px; }
  .heart-photo { width: 64px; height: 64px; }
}

@media (min-width: 1024px) {
  .cover-title { font-size: 4.2rem; }
  .chapter-title { font-size: 3rem; }
  .story-block { font-size: 1.75rem; }
}

/* respect reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}
"
Observation: Create successful: /app/style.css
