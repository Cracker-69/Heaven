// Calculator functionality
let calcDisplay = document.getElementById('calcDisplay');
let currentInput = '';

// Calculator functions
function appendToCalc(value) {
    if (value === '*') {
        currentInput += '*';
        calcDisplay.value += '×';
    } else {
        currentInput += value;
        calcDisplay.value += value;
    }
}

function clearCalc() {
    currentInput = '';
    calcDisplay.value = '';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    calcDisplay.value = calcDisplay.value.slice(0, -1);
}

function calculateResult() {
    try {
        if (!currentInput) {
            return;
        }
        
        // Validate expression - only allow numbers, operators, and decimal points
        if (!/^[0-9+\-*/.() ]+$/.test(currentInput)) {
            calcDisplay.value = 'Error';
            currentInput = '';
            return;
        }
        
        let result = eval(currentInput);
        
        // Handle division by zero and other edge cases
        if (!isFinite(result)) {
            calcDisplay.value = 'Error';
            currentInput = '';
            return;
        }
        
        // Round to avoid floating point precision issues
        result = Math.round(result * 1000000000) / 1000000000;
        
        calcDisplay.value = result;
        currentInput = result.toString();
    } catch (error) {
        calcDisplay.value = 'Error';
        currentInput = '';
    }
}

// Frame checker functionality
const legacyFrames = {
    '$59fcc': 'Arcade',
    '$ccf2b': 'Azure Bloom',
    '$9b149': 'Beloved',
    '$06af6': 'Blaze Blue',
    '$af848': 'Blue Electric',
    '$48373': 'Bookworm',
    '$8b176': 'Bronze Treasure',
    '$bf060': 'Cherry Blossom',
    '$e5904': 'Cosmic Digital',
    '$623d2': 'Cute Devil',
    '$ca998': 'Cutie Darling',
    '$0cb99': 'Cyberstein',
    '$68569': 'Eternal Tempest',
    '$a9343': 'Falling Sakura',
    '$7781e': 'Flame Hashira',
    '$f231f': 'Flora Bamboo',
    '$4d1fa': 'Forever Bound',
    '$5b67f': 'Fox Sword Stage',
    '$0c01c': 'Frost Ornament',
    '$52216': 'Glacier Slab',
    '$da6e3': 'Glaze',
    '$25493': 'Gloss',
    '$e6b4c': 'Golden',
    '$d9b64': 'Grace',
    '$2beb9': 'Graceful Bloom',
    '$0bf5b': 'Hazard',
    '$36091': 'Henna',
    '$e1be1': 'Interstella',
    '$e0ac4': 'Leafet',
    '$ce2f8': 'Love Frame',
    '$91e5a': 'Magnificent',
    '$d808d': 'Maple',
    '$5882a': 'MilléSime Doré',
    '$80729': 'Minahil',
    '$057db': 'Mystic Element',
    '$fbd92': 'Occult Monarch',
    '$5b7fe': 'Poker',
    '$cf9e8': 'Pyari Pinky 2.0',
    '$10a25': 'QT',
    '$7bd0c': 'Reflector ✧',
    '$1ceb1': 'Royal Ossein',
    '$ceb4b': 'Red Mecha',
    '$3a0c7': 'Sakura',
    '$63b99': 'Sakura Tech',
    '$5213d': 'Secret Garden',
    '$7e5f9': 'Spring Heart',
    '$47066': 'Stark',
    '$b1ce3': 'Sdate',
    '$edbb0': 'The Deep Within',
    '$9cb8f': 'Vintage Blue'
};

const newLegacyFrames = {
    '$155b9': 'Water Breathing',
    '$c7cde': 'ALTAR RIP',
    '$89a6e': 'ATHENA\'S TEMPLE',
    '$f2772': 'DEEZ HANDZ',
    '$6585e': 'DEMONOID',
    '$7848a': 'DIVINE CHORD',
    '$ef069': 'EMERALD INFERNO',
    '$1b285': 'EVIDENCE BOARD',
    '$58cf1': 'FUTURO TECH',
    '$8fb45': 'HAZARDOUS',
    '$432d9': 'HOLOGRAM',
    '$1e5db': 'LUCKY CHARM',
    '$1f3f1': 'LUXURY BLOSSOM',
    '$43c1d': 'MIKO',
    '$1fadc': 'MOBIUS SHARD',
    '$b6ee3': 'NENO GALAXY',
    '$e1da0': 'NOXIOUS ✦',
    '$f014d': 'PASTEL NOTEBOOK',
    '$5f6dc': 'REMEMBRANCE',
    '$b598f': 'RIAMU GLITCH',
    '$73e69': 'ROSE COFFIN',
    '$43679': 'ROUGE QUEEN',
    '$17868': 'PEACE & HEALING',
    '$86480': 'SAKURA FEST',
    '$b7cd9': 'SLIME',
    '$6188c': 'SODA POP',
    '$ace03': 'SUNSET',
    '$861b1': 'SWEET DREAMS✩',
    '$1626f': 'THE SCRIBE',
    '$30f8d': 'HEROS JOURNEY',
    '$6704a': 'TRI-CANDY',
    '$2318f': 'ASIAN SCROLL',
    '$80b0a': 'UR CARD',
    '$b98e6': 'AUTUMN SEASON',
    '$6fa9f': 'ORIENTAL GOLD',
    '$2b021': 'MEDIEVAL BANNER',
    '$1c83e': 'CATIFY',
    '$fb236': 'OPENED WINDOW',
    '$021c0': 'ORIENTAL PINK',
    '$f7d92': 'BLOODY DOMAIN',
    '$50aeb': 'GREEN LOVE',
    '$80ef1': 'LEVIATHAN OMEGA',
    '$5be54': 'DARKEST SPACE',
    '$6d029': 'DIGI SPLATTER',
    '$4b88c': 'ALASKA TILES',
    '$ee4f0': 'FLORAL GRAVE',
    '$57ace': 'COSMIC GLEAM',
    '$8d825': 'WAY OF LOVE',
    '$79843': 'DOMINANCE',
    '$9dc3e': 'SEA ARTEFACT',
    '$77d73': 'IRIS GARDEN',
    '$87dc9': 'DYSTOPIA',
    '$228b4': 'AURIFEROUS',
    '$42ca3': 'HOSHIZORA',
    '$e1981': 'HILL OF SWORDS',
    '$21c34': 'THE LIFESTREAM',
    '$c54d4': 'FLUFFY PANDA'
};

function checkFrame() {
    const input = document.getElementById('frameInput').value.trim();
    const result = document.getElementById('frameResult');
    
    if (!input) {
        result.innerHTML = '❌ Please enter a frame code!';
        return;
    }

    if (legacyFrames[input]) {
        result.innerHTML = `✅ <strong>Legacy</strong>`;
    } else if (newLegacyFrames[input]) {
        result.innerHTML = `🆕 <strong>New Legacy</strong>`;
    } else {
        result.innerHTML = '❌ <strong>No Legacy</strong>';
    }
}

// Event listeners
document.getElementById('frameInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkFrame();
    }
});

// Animation functions
function createSakuraPetal() {
    const winterScene = document.getElementById('winterScene');
    const petal = document.createElement('div');
    petal.className = 'sakura-petal';
    
    // Different sakura petal characters
    const sakuraTypes = ['🌸', '🌺', '🌷', '💮', '🏵️'];
    petal.innerHTML = sakuraTypes[Math.floor(Math.random() * sakuraTypes.length)];
    
    // Random properties
    petal.style.left = Math.random() * 100 + '%';
    petal.style.fontSize = (Math.random() * 12 + 14) + 'px';
    petal.style.animationDuration = (Math.random() * 5 + 4) + 's';
    petal.style.animationDelay = Math.random() * 2 + 's';
    
    winterScene.appendChild(petal);
    
    // Remove petal after animation
    setTimeout(() => {
        if (petal.parentNode) {
            petal.parentNode.removeChild(petal);
        }
    }, 9000);
}

function createStar() {
    const winterScene = document.getElementById('winterScene');
    const star = document.createElement('div');
    star.className = 'star';
    
    const starTypes = ['✦', '✧', '⭐', '🌟', '💫'];
    star.innerHTML = starTypes[Math.floor(Math.random() * starTypes.length)];
    
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 50 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    
    winterScene.appendChild(star);
    
    // Remove star after some time
    setTimeout(() => {
        if (star.parentNode) {
            star.parentNode.removeChild(star);
        }
    }, 10000);
}

function createMagicParticle() {
    const winterScene = document.getElementById('winterScene');
    const particle = document.createElement('div');
    particle.className = 'magic-particle';
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 4 + 3) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    
    // Random colors for particles
    const colors = [
        'rgba(255, 255, 255, 0.8)',
        'rgba(255, 182, 193, 0.8)',
        'rgba(255, 215, 0, 0.8)',
        'rgba(173, 216, 230, 0.8)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
    particle.style.boxShadow = `0 0 10px ${color}`;
    
    winterScene.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, 7000);
}

// Initialize animations
function initWinterScene() {
    // Create initial stars
    for (let i = 0; i < 12; i++) {
        setTimeout(() => createStar(), i * 300);
    }
}

// Start continuous animations
setInterval(createSakuraPetal, 300);
setInterval(createStar, 2500);
setInterval(createMagicParticle, 800);

// Initialize scene and create initial elements
initWinterScene();

for (let i = 0; i < 12; i++) {
    setTimeout(createSakuraPetal, i * 150);
}

for (let i = 0; i < 8; i++) {
    setTimeout(createMagicParticle, i * 200);
}
