// ========== GAME CONFIGURATION ==========
const GAME_CONFIG = {
    1: { speed: 200, gridSize: 20, name: 'Easy' },
    2: { speed: 80, gridSize: 20, name: 'Medium' },
    3: { speed: 50, gridSize: 20, name: 'Hard' },
    4: { speed: 30, gridSize: 20, name: 'Extreme' }
};

// ========== GAME STATE ==========
const gameState = {
    level: 1,
    score: 0,
    bestScore: localStorage.getItem('snakeBestScore') || 0,
    isRunning: false,
    isPaused: false,
    snake: [{ x: 10, y: 10 }],
    food: { x: 15, y: 15 },
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    foodEaten: 0,
    gameTime: 0,
    startTime: 0
};

// ========== DOM ELEMENTS ==========
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const menuScreen = document.getElementById('menuScreen');
const gameWrapper = document.getElementById('gameWrapper');
const gameHUD = document.getElementById('gameHUD');
const gameStats = document.getElementById('gameStats');
const gameOverScreen = document.getElementById('gameOverScreen');
const pauseScreen = document.getElementById('pauseScreen');
const mobileControls = document.getElementById('mobileControls');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const levelDisplay = document.getElementById('levelDisplay');
const scoreDisplay = document.getElementById('scoreDisplay');
const bestScoreDisplay = document.getElementById('bestScoreDisplay');
const speedDisplay = document.getElementById('speedDisplay');
const foodEatenDisplay = document.getElementById('foodEaten');
const snakeLengthDisplay = document.getElementById('snakeLength');
const timeDisplay = document.getElementById('timeDisplay');

// Buttons
const restartBtn = document.getElementById('restartBtn');
const menuBtn = document.getElementById('menuBtn');
const resumeBtn = document.getElementById('resumeBtn');
const pauseMenuBtn = document.getElementById('pauseMenuBtn');

// Mobile buttons
const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const btnPause = document.getElementById('btnPause');

// ========== INITIALIZATION ==========
function init() {
    showMenu();
    setupEventListeners();
    updateBestScore();
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Difficulty selection
    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => selectDifficulty(btn));
    });

    // Game buttons
    restartBtn.addEventListener('click', restartGame);
    menuBtn.addEventListener('click', backToMenu);
    resumeBtn.addEventListener('click', resumeGame);
    pauseMenuBtn.addEventListener('click', backToMenu);

    // Mobile controls
    btnUp.addEventListener('click', () => setDirection(0, -1));
    btnDown.addEventListener('click', () => setDirection(0, 1));
    btnLeft.addEventListener('click', () => setDirection(-1, 0));
    btnRight.addEventListener('click', () => setDirection(1, 0));
    btnPause.addEventListener('click', togglePause);

    // Keyboard controls
    document.addEventListener('keydown', handleKeyPress);

    // Touch controls for mobile
    setupTouchControls();
}

// ========== DIFFICULTY SELECTION ==========
function selectDifficulty(btn) {
    difficultyButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    gameState.level = parseInt(btn.dataset.level);
    startGame();
}

// ========== KEYBOARD HANDLING ==========
function handleKeyPress(event) {
    const key = event.key.toLowerCase();

    switch(key) {
        case 'arrowup':
        case 'w':
            event.preventDefault();
            setDirection(0, -1);
            break;
        case 'arrowdown':
        case 's':
            event.preventDefault();
            setDirection(0, 1);
            break;
        case 'arrowleft':
        case 'a':
            event.preventDefault();
            setDirection(-1, 0);
            break;
        case 'arrowright':
        case 'd':
            event.preventDefault();
            setDirection(1, 0);
            break;
        case ' ':
            event.preventDefault();
            if (gameState.isRunning) {
                togglePause();
            }
            break;
    }
}

// ========== TOUCH CONTROLS ==========
function setupTouchControls() {
    let touchStartX = 0;
    let touchStartY = 0;

    gameWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    });

    gameWrapper.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        handleSwipe(touchStartX, touchStartY, touchEndX, touchEndY);
    });
}

function handleSwipe(startX, startY, endX, endY) {
    const diffX = endX - startX;
    const diffY = endY - startY;
    const threshold = 50;

    if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > threshold) {
            setDirection(1, 0); // Right
        } else if (diffX < -threshold) {
            setDirection(-1, 0); // Left
        }
    } else {
        if (diffY > threshold) {
            setDirection(0, 1); // Down
        } else if (diffY < -threshold) {
            setDirection(0, -1); // Up
        }
    }
}

// ========== DIRECTION CONTROL ==========
function setDirection(x, y) {
    // Prevent reverse direction
    if (gameState.direction.x === -x && gameState.direction.y === -y) return;
    gameState.nextDirection = { x, y };
}

// ========== GAME FLOW ==========
function showMenu() {
    menuScreen.style.display = 'block';
    gameWrapper.style.display = 'none';
    gameHUD.style.display = 'none';
    gameStats.style.display = 'none';
    gameOverScreen.classList.remove('active');
    pauseScreen.classList.remove('active');
    mobileControls.style.display = 'none';
}

function startGame() {
    menuScreen.style.display = 'none';
    gameWrapper.style.display = 'flex';
    gameHUD.style.display = 'grid';
    gameStats.style.display = 'grid';
    mobileControls.style.display = 'grid';
    gameOverScreen.classList.remove('active');
    pauseScreen.classList.remove('active');

    resetGameState();
    gameState.isRunning = true;
    gameState.isPaused = false;
    gameState.startTime = Date.now();

    updateDisplay();
    gameLoop();
}

function resetGameState() {
    gameState.snake = [{ x: 10, y: 10 }];
    gameState.direction = { x: 1, y: 0 };
    gameState.nextDirection = { x: 1, y: 0 };
    gameState.score = 0;
    gameState.foodEaten = 0;
    gameState.gameTime = 0;
    generateFood();
}

function restartGame() {
    gameState.level = 1;
    difficultyButtons.forEach(b => b.classList.remove('active'));
    difficultyButtons[0].classList.add('active');
    gameState.startTime = 0;
    startGame();
}

function backToMenu() {
    gameState.isRunning = false;
    gameState.isPaused = false;
    showMenu();
}

function togglePause() {
    if (!gameState.isRunning) return;

    gameState.isPaused = !gameState.isPaused;
    pauseScreen.classList.toggle('active');
}

function resumeGame() {
    gameState.isPaused = false;
    pauseScreen.classList.remove('active');
    gameState.startTime = Date.now() - gameState.gameTime * 1000;
}

// ========== GAME LOOP ==========
function gameLoop() {
    if (!gameState.isRunning) return;

    const config = GAME_CONFIG[gameState.level];
    const delay = config.speed;

    setTimeout(() => {
        if (!gameState.isPaused) {
            update();
            draw();
        }
        gameLoop();
    }, delay);
}

// ========== UPDATE GAME STATE ==========
function update() {
    // Update direction
    gameState.direction = { ...gameState.nextDirection };

    // Calculate new head position
    const head = gameState.snake[0];
    const newHead = {
        x: head.x + gameState.direction.x,
        y: head.y + gameState.direction.y
    };

    const gridSize = GAME_CONFIG[gameState.level].gridSize;

    // Check wall collision
    if (newHead.x < 0 || newHead.x >= gridSize || 
        newHead.y < 0 || newHead.y >= gridSize) {
        endGame();
        return;
    }

    // Check self collision
    if (gameState.snake.some(segment => 
        segment.x === newHead.x && segment.y === newHead.y)) {
        endGame();
        return;
    }

    // Add new head
    gameState.snake.unshift(newHead);

    // Check food collision
    if (newHead.x === gameState.food.x && newHead.y === gameState.food.y) {
        gameState.score += 10 * gameState.level;
        gameState.foodEaten++;
        generateFood();
        
        // Level progression
        if (gameState.foodEaten % 5 === 0 && gameState.level < 4) {
            gameState.level++;
        }
    } else {
        gameState.snake.pop();
    }

    // Update time
    gameState.gameTime = Math.floor((Date.now() - gameState.startTime) / 1000);
    updateDisplay();
}

// ========== RENDERING ==========
function draw() {
    const gridSize = GAME_CONFIG[gameState.level].gridSize;
    const cellSize = canvas.width / gridSize;

    // Clear canvas
    ctx.fillStyle = 'rgba(15, 20, 25, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    drawGrid(gridSize, cellSize);

    // Draw food
    drawFood(cellSize);

    // Draw snake
    drawSnake(cellSize);

    // Draw border
    ctx.strokeStyle = '#4ecdc4';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function drawGrid(gridSize, cellSize) {
    ctx.strokeStyle = 'rgba(78, 205, 196, 0.1)';
    ctx.lineWidth = 0.5;

    for (let i = 0; i <= gridSize; i++) {
        const pos = i * cellSize;
        ctx.beginPath();
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, canvas.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(0, pos);
        ctx.lineTo(canvas.width, pos);
        ctx.stroke();
    }
}

function drawSnake(cellSize) {
    gameState.snake.forEach((segment, index) => {
        if (index === 0) {
            // Head
            drawGradientRect(
                segment.x * cellSize,
                segment.y * cellSize,
                cellSize,
                cellSize,
                '#ff6b6b',
                '#ff8e8e'
            );

            // Eyes
            const eyeSize = cellSize / 8;
            const eyeOffset = cellSize / 3;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(segment.x * cellSize + eyeOffset, 
                   segment.y * cellSize + eyeOffset, 
                   eyeSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(segment.x * cellSize + cellSize - eyeOffset, 
                   segment.y * cellSize + eyeOffset, 
                   eyeSize, 0, Math.PI * 2);
            ctx.fill();
        } else if (index === gameState.snake.length - 1) {
            // Tail with gradient
            drawGradientRect(
                segment.x * cellSize,
                segment.y * cellSize,
                cellSize,
                cellSize,
                'rgba(255, 107, 107, 0.3)',
                'rgba(255, 107, 107, 0.6)'
            );
        } else {
            // Body
            drawGradientRect(
                segment.x * cellSize,
                segment.y * cellSize,
                cellSize,
                cellSize,
                '#ff6b6b',
                '#ff8e8e'
            );
        }

        // Segment border
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.strokeRect(
            segment.x * cellSize + 1,
            segment.y * cellSize + 1,
            cellSize - 2,
            cellSize - 2
        );
    });
}

function drawFood(cellSize) {
    const x = gameState.food.x * cellSize;
    const y = gameState.food.y * cellSize;

    // Outer glow
    ctx.fillStyle = 'rgba(255, 230, 109, 0.2)';
    ctx.beginPath();
    ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 1.5, 0, Math.PI * 2);
    ctx.fill();

    // Food circle
    const gradient = ctx.createRadialGradient(
        x + cellSize / 2, y + cellSize / 2, 0,
        x + cellSize / 2, y + cellSize / 2, cellSize / 2
    );
    gradient.addColorStop(0, '#ffe66d');
    gradient.addColorStop(1, '#ffc107');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x + cellSize / 2, y + cellSize / 2, cellSize / 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Shine effect
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.beginPath();
    ctx.arc(x + cellSize / 3, y + cellSize / 3, cellSize / 8, 0, Math.PI * 2);
    ctx.fill();
}

function drawGradientRect(x, y, width, height, color1, color2) {
    const gradient = ctx.createLinearGradient(x, y, x + width, y + height);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y, width, height);
}

// ========== FOOD GENERATION ==========
function generateFood() {
    const gridSize = GAME_CONFIG[gameState.level].gridSize;
    let newFood;
    let isOnSnake = true;

    while (isOnSnake) {
        newFood = {
            x: Math.floor(Math.random() * gridSize),
            y: Math.floor(Math.random() * gridSize)
        };

        isOnSnake = gameState.snake.some(segment =>
            segment.x === newFood.x && segment.y === newFood.y
        );
    }

    gameState.food = newFood;
}

// ========== GAME END ==========
function endGame() {
    gameState.isRunning = false;

    // Update best score
    if (gameState.score > gameState.bestScore) {
        gameState.bestScore = gameState.score;
        localStorage.setItem('snakeBestScore', gameState.bestScore);
    }

    // Show game over screen
    showGameOverScreen();
}

function showGameOverScreen() {
    document.getElementById('finalScore').textContent = gameState.score;
    document.getElementById('finalLevel').textContent = gameState.level;
    document.getElementById('finalLength').textContent = gameState.snake.length;
    document.getElementById('finalTime').textContent = gameState.gameTime + 's';
    
    gameOverScreen.classList.add('active');
}

// ========== DISPLAY UPDATES ==========
function updateDisplay() {
    levelDisplay.textContent = gameState.level;
    scoreDisplay.textContent = gameState.score;
    speedDisplay.textContent = GAME_CONFIG[gameState.level].name;
    foodEatenDisplay.textContent = gameState.foodEaten;
    snakeLengthDisplay.textContent = gameState.snake.length;
    timeDisplay.textContent = gameState.gameTime + 's';
}

function updateBestScore() {
    bestScoreDisplay.textContent = gameState.bestScore;
}

// ========== START APPLICATION ==========
window.addEventListener('load', init);

// Prevent double tap zoom on mobile
document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, { passive: false });

// Prevent context menu on long press
document.addEventListener('contextmenu', (e) => {
    if (gameState.isRunning) {
        e.preventDefault();
    }
});
