/**
 * ==========================================================================
 * CONFIGURATION & STATS MANAGEMENT
 * Easily update counter metrics down below.
 * ==========================================================================
 */
const CONFIG_STATS = {
    days: 365,      // Number of Days of Friendship
    trips: 4,       // Trips Together
    calls: 240,     // Hours of Calls
    photos: 850     // Photos Shared
};

/**
 * ALL UPLOADED PHOTOS ARRAY
 * This list feeds the progressive heart-shaped collage at the end of the journey.
 * Absolute filenames matching your root directory uploads (PNG format).
 */
const ALL_MEMORIES = [
    'dsn1.png', 'dsn2.png', 'dsn3.png',
    'dog-memory.png', 'food1.png', 'food2.png', 'food3.png',
    'lastday1.png', 'lastday2.png', 'sangam1.png', 'sangam2.png',
    'lucknow1.png', 'lucknow2.png', 'lucknow3.png', 'lucknow4.png',
    'bangalore1.png', 'bangalore2.png', 'bangalore3.png', 'change.png'
];

/**
 * ==========================================================================
 * PRELOADER & INITIALIZATION
 * ==========================================================================
 */
window.addEventListener('DOMContentLoaded', () => {
    // Hide Preloader once basic components load up safely
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => preloader.style.display = 'none', 500);
    }, 1200);

    initEnvelope();
    initScrollAnimations();
    initCarousel();
    initAudioController();
});

/**
 * ==========================================================================
 * MUSIC / AUDIO ENGINE
 * ==========================================================================
 */
function initAudioController() {
    const musicBtn = document.getElementById('musicBtn');
    const audio = document.getElementById('bgMusic');
    
    if(!musicBtn || !audio) return;

    musicBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().then(() => {
                musicBtn.classList.add('playing');
            }).catch(err => console.log("Audio play blocked by device policies:", err));
        } else {
            audio.pause();
            musicBtn.classList.remove('playing');
        }
    });
}

/**
 * ==========================================================================
 * LANDING PAGE: ENVELOPE & TYPEWRITER TRIGGER
 * ==========================================================================
 */
function initEnvelope() {
    const envelope = document.getElementById('mainEnvelope');
    const sec1 = document.getElementById('section1');

    if(!envelope) return;

    envelope.addEventListener('click', () => {
        if (!envelope.classList.contains('open')) {
            envelope.classList.add('open');
            
            // Wait for envelope layout animations to naturally breathe, then scroll down
            setTimeout(() => {
                sec1.classList.add('visible-section');
                sec1.scrollIntoView({ behavior: 'smooth' });
                // Trigger the emotional typewriter typewriter execution sequence
                startTypewriter();
            }, 1200);
        }
    });
}

function startTypewriter() {
    const container = document.getElementById('typewriterText');
    const prompt = document.getElementById('scrollPrompt1');
    if(!container) return;

    const narrativeText = `Dear Simran,\n\nIt's funny how life works.\nA year ago we were complete strangers.\n\nNeither of us knew that one random meeting at DSN would become one of the most meaningful friendships of my life. ✨`;
    
    container.innerHTML = '';
    let idx = 0;

    function type() {
        if (idx < narrativeText.length) {
            const char = narrativeText.charAt(idx);
            if (char === '\n') {
                container.innerHTML += '<br>';
            } else {
                container.innerHTML += char;
            }
            idx++;
            setTimeout(type, 45); // Comfortable reading cadence
        } else {
            // Unveil navigation indicator smoothly once finished typing
            if(prompt) {
                prompt.classList.remove('hidden');
                prompt.style.opacity = '1';
            }
        }
    }
    setTimeout(type, 400);
}

/**
 * ==========================================================================
 * CAROUSEL CONTROLLER (SECTION 2)
 * ==========================================================================
 */
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    if(!track || dots.length === 0) return;

    let currentSlide = 0;
    
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 3;
        track.style.transform = `translateX(-${currentSlide * 33.333}%)`;
        
        dots.forEach(d => d.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    }, 3000); // 3-second picture swap cycle
}

/**
 * ==========================================================================
 * PERFORMANCE ENGINE: SCROLL REVEAL & LAZY LOADING
 * ==========================================================================
 */
function initScrollAnimations() {
    const sections = document.querySelectorAll('.hidden-section');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Fires as soon as elements safely peak out on modern mobile viewports
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                target.classList.add('visible-section');

                // Lazy loading heavy PNG assets contained within target block
                const lazyImgs = target.querySelectorAll('.lazy-img');
                lazyImgs.forEach(img => {
                    if(img.dataset.src && !img.classList.contains('loaded')) {
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                    }
                });

                // Contextual Component Animators
                if(target.id === 'section6') {
                    document.getElementById('scooter').style.left = '85%';
                }
                if(target.id === 'section7') {
                    target.querySelector('.phone-interface').classList.add('active-call');
                }
                if(target.id === 'section10') {
                    target.querySelectorAll('.fade-line').forEach(line => line.classList.add('viewed'));
                }
                if(target.id === 'section11') {
                    runCounters();
                }
                if(target.id === 'finalScreen') {
                    buildHeartCollage();
                }

                observer.unobserve(target); // Memory optimization safeguard
            }
        });
    }, observerOptions);

    sections.forEach(sec => scrollObserver.observe(sec));
}

/**
 * ==========================================================================
 * NUMERICAL STATS COUNTER SYSTEM
 * ==========================================================================
 */
function runCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const type = counter.dataset.target;
        const finalValue = CONFIG_STATS[type] || 0;
        let start = 0;
        const duration = 1500; // Total count acceleration speed window
        const stepTime = Math.max(Math.floor(duration / finalValue), 15);
        
        const timer = setInterval(() => {
            start += Math.ceil(finalValue / 40); // Natural visual acceleration steps
            if (start >= finalValue) {
                counter.innerText = finalValue + (type === 'photos' || type === 'calls' ? '+' : '');
                clearInterval(timer);
            } else {
                counter.innerText = start;
            }
        }, stepTime);
    });
}

/**
 * ==========================================================================
 * FINAL MATRICULATED HEART-SHAPED COLLAGE ALGORITHM
 * Arranges photos into a heart layout without aspect distortion or truncation.
 * ==========================================================================
 */
function buildHeartCollage() {
    const container = document.getElementById('heartCollage');
    if(!container || container.children.length > 0) return;

    const containerWidth = container.offsetWidth || 340;
    const containerHeight = container.offsetHeight || 320;
    
    // Mathematical relative point distribution mapping standard cardioid trajectories
    const heartPoints = [
        {x: 0.5,  y: 0.22}, {x: 0.32, y: 0.12}, {x: 0.68, y: 0.12},
        {x: 0.15, y: 0.22}, {x: 0.85, y: 0.22}, {x: 0.11, y: 0.40},
        {x: 0.89, y: 0.40}, {x: 0.18, y: 0.58}, {x: 0.82, y: 0.58},
        {x: 0.30, y: 0.74}, {x: 0.70, y: 0.74}, {x: 0.50, y: 0.88},
        {x: 0.50, y: 0.42}, {x: 0.36, y: 0.38}, {x: 0.64, y: 0.38},
        {x: 0.32, y: 0.56}, {x: 0.68, y: 0.56}, {x: 0.50, y: 0.68}
    ];

    ALL_MEMORIES.forEach((imgSrc, index) => {
        if(index >= heartPoints.length) return; // Keep rendering bounded within safety coordinate count

        const item = document.createElement('div');
        item.classList.add('collage-item');
        
        const img = document.createElement('img');
        img.src = imgSrc; // Load up immediate asset instance
        item.appendChild(img);
        
        // Random rotational slight offsets mirroring traditional physical scrapbooks
        const randomRotation = Math.floor(Math.random() * 24) - 12; 
        
        container.appendChild(item);

        // Micro timed sequence intervals executing the float up animation frame
        setTimeout(() => {
            const targetX = heartPoints[index].x * containerWidth - 32; // Centering item dimensions offset
            const targetY = heartPoints[index].y * containerHeight - 32;

            item.style.transition = 'all 1.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            item.style.opacity = '1';
            item.style.left = `${targetX}px`;
            item.style.top = `${targetY}px`;
            item.style.transform = `rotate(${randomRotation}deg)`;
        }, index * 150); // Progressive stack sequencing flow
    });
}

/**
 * ==========================================================================
 * JOURNEY RESET MECHANISM
 * ==========================================================================
 */
document.getElementById('replayBtn')?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
        window.location.reload(); // Refresh viewport sequence safely
    }, 800);
});