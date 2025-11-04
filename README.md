# 🐍 Snake Game - Advanced Edition

A modern, feature-rich Snake game built with **HTML5**, **Advanced CSS**, and **Vanilla JavaScript**. Fully responsive, playable on all devices with multiple difficulty levels and smooth gameplay.

![Snake Game](https://img.shields.io/badge/HTML5-Game-orange?style=flat-square)
![CSS3](https://img.shields.io/badge/CSS3-Advanced%20Styling-blue?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20JS-yellow?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-All%20Devices-green?style=flat-square)

---

## 🎮 Features

### 🎯 Gameplay
- **4 Difficulty Levels**: Easy → Medium → Hard → Extreme
- **Progressive Difficulty**: Game levels increase as you progress
- **Score System**: Points multiply based on current level
- **Best Score Tracking**: Your high score is saved locally
- **Real-time Statistics**: Track food eaten, snake length, and play time

### 📱 Responsive Design
- ✅ Desktop (1920px and above)
- ✅ Tablets (768px - 1920px)
- ✅ Mobile Phones (480px - 768px)
- ✅ Small Phones (360px - 480px)
- ✅ Extra Small Devices (< 360px)

### 🎮 Multiple Control Methods
- **Keyboard Controls**
  - Arrow Keys (↑ ↓ ← →)
  - WASD Keys (W A S D)
  - Space Bar to Pause/Resume
  
- **Mobile Controls**
  - On-screen D-Pad buttons
  - Touch swipe gestures
  - Responsive button layout

- **Desktop Controls**
  - Keyboard for optimal gameplay
  - Mouse-free experience

### 🎨 Modern Design
- **Neon Color Scheme**: Vibrant gradient colors
- **Glass-morphism Effects**: Frosted glass UI elements
- **Smooth Animations**: Fluid transitions and effects
- **Professional Graphics**: High-quality game board rendering
- **Gradient Elements**: Modern visual design throughout

### ✨ Visual Effects
- Animated snake with eyes
- Glowing food with shine effects
- Grid pattern visualization
- Smooth gradient transitions
- Bounce animations on UI elements

### 🎮 Game Modes
1. **Easy** - Speed: Slow (100ms per move)
2. **Medium** - Speed: Normal (80ms per move)
3. **Hard** - Speed: Fast (50ms per move)
4. **Extreme** - Speed: Very Fast (30ms per move)

---

## 🚀 Quick Start

### 1. **Play Online**
Simply open `index.html` in your web browser and start playing!

### 2. **Local Setup**
```bash
# Clone the repository
git clone https://github.com/ChiragJuvarda/snake-game.git

# Navigate to the project directory
cd snake-game

# Open in your favorite browser
# On Windows:
start index.html

# On macOS:
open index.html

# On Linux:
xdg-open index.html
```

### 3. **No Installation Needed!**
This game requires no build tools, dependencies, or installation. Just open the HTML file and play!

---

## 📋 How to Play

### 🎮 Game Rules
1. **Objective**: Control the snake to eat food and grow longer
2. **Avoid Collisions**: Don't hit walls or yourself
3. **Earn Points**: Each food eaten = 10 × Level points
4. **Level Up**: Eat 5 foods to advance to the next level
5. **Progressive Speed**: Each level increases the game speed

### 🕹️ Controls

**Desktop:**
- **Arrow Keys** or **WASD** to move the snake
- **Space** to pause/resume the game

**Mobile:**
- **D-Pad Buttons** on the screen
- **Swipe Gestures** to change direction
- **Pause Button** to pause the game

---

## 📊 Game Statistics

During gameplay, you'll see:
- **Level**: Current difficulty level (1-4)
- **Score**: Total points earned
- **Speed**: Current game speed (Easy/Medium/Hard/Extreme)
- **Best Score**: Your all-time high score
- **Food Eaten**: Number of food items consumed
- **Snake Length**: Current length of your snake
- **Time**: How long you've been playing

---

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Game structure and semantic markup
- **CSS3**: Advanced styling with gradients, animations, and media queries
- **JavaScript (Vanilla)**: Game logic, collision detection, and controls

### Browser Compatibility
- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)
- ✅ Mobile Browsers (iOS Safari, Chrome Mobile)

### Project Structure
```
snake-game/
├── index.html          # Game HTML structure
├── styles.css          # Advanced CSS styling and responsive design
├── script.js           # Game logic and controls
├── README.md           # This file
└── .gitignore          # Git ignore rules
```

### Key Features in Code
- **Canvas API**: For game rendering and graphics
- **Gradient Effects**: Both linear and radial gradients
- **CSS Media Queries**: Responsive design breakpoints
- **LocalStorage API**: For saving best score
- **Event Listeners**: Keyboard and touch controls
- **RequestAnimationFrame Pattern**: Smooth game loop

---

## 📱 Responsive Breakpoints

The game adapts perfectly to different screen sizes:

| Device | Width | Adjustments |
|--------|-------|------------|
| Desktop | 1920px+ | Full HUD, optimal canvas size |
| Tablet | 768px - 1920px | Grid layout, adjusted spacing |
| Mobile | 480px - 768px | Single column, D-Pad controls |
| Small Phone | 360px - 480px | Compact UI, mobile-first |
| Extra Small | < 360px | Minimal spacing, essential elements |

---

## 🎮 Gameplay Tips

### 🏆 High Score Tips
1. **Start Easy**: Master the basics on Easy mode
2. **Plan Ahead**: Think about your next move
3. **Avoid Corners**: Don't trap yourself in tight spaces
4. **Stay Centered**: Keep the snake away from walls
5. **Gradual Growth**: Take your time to grow the snake safely

### 🚀 Speed Run Tips
- Each level increases speed by approximately 25%
- Practice reflexes on Hard and Extreme modes
- Use consistent control method (keyboard is fastest)
- Learn to anticipate food spawning patterns

---

## 💾 Local Storage

The game automatically saves:
- **Best Score**: Stored in browser's localStorage
- **Persists**: Across browser sessions until cache is cleared
- **Location**: `localStorage['snakeBestScore']`

To reset your best score:
```javascript
localStorage.removeItem('snakeBestScore');
```

---

## 🐛 Known Issues & Limitations

- None currently! The game is fully functional.

---

## 🔮 Future Enhancements

Potential features for future versions:
- [ ] Sound effects and background music
- [ ] Leaderboard system
- [ ] Custom themes and color schemes
- [ ] Power-ups and obstacles
- [ ] Multiplayer mode
- [ ] Touch joystick control
- [ ] Settings menu for customization
- [ ] Difficulty presets with obstacles

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Style
- Use clear, descriptive variable names
- Comment complex logic
- Follow existing code patterns
- Test on multiple devices before submitting

---

## 📄 License

This project is open source and available under the **MIT License**.

See the LICENSE file for details.

---

## 👨‍💻 Author

**Chirag Juvarda**
- GitHub: [@ChiragJuvarda](https://github.com/ChiragJuvarda)
- Project: [Snake Game](https://github.com/ChiragJuvarda/snake-game)

---

## 🔗 Links

- **Play Online**: [Open in Browser](./index.html)
- **GitHub Repository**: [snake-game](https://github.com/ChiragJuvarda/snake-game)
- **Report Issues**: [GitHub Issues](https://github.com/ChiragJuvarda/snake-game/issues)

---

## 📞 Support

If you encounter any issues or have suggestions:
1. Check the [Issues](https://github.com/ChiragJuvarda/snake-game/issues) page
2. Create a new issue with details
3. Include browser and device information

---

## ⭐ Show Your Support

If you enjoyed this game, please:
- ⭐ Star the repository
- 🍴 Fork the repository
- 📢 Share with friends
- 💬 Leave feedback

---

## 📈 Version History

### v1.0.0 - Initial Release
- ✅ 4 difficulty levels
- ✅ Responsive design for all devices
- ✅ Multiple control methods
- ✅ Modern UI design
- ✅ Score tracking system
- ✅ Progressive difficulty

---

## 🙏 Acknowledgments

- Built with love and vanilla JavaScript
- Inspired by the classic Snake game
- Modern web technologies and best practices

---

**Enjoy the game! 🎮🐍**

*Last Updated: November 2024*
