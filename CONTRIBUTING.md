# Contributing to Snake Game

Thank you for your interest in contributing to the Snake Game project! We welcome contributions from everyone.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## How to Contribute

### 🐛 Reporting Bugs

1. Check if the bug has already been reported in [Issues](https://github.com/ChiragJuvarda/snake-game/issues)
2. If not, create a new issue with:
   - Clear title describing the bug
   - Detailed description of the problem
   - Steps to reproduce
   - Expected vs actual behavior
   - Browser and device information
   - Screenshots if applicable

### 💡 Suggesting Features

1. Check existing [Issues](https://github.com/ChiragJuvarda/snake-game/issues) for similar suggestions
2. Create a new issue with:
   - Clear title describing the feature
   - Detailed description of the feature
   - Explain the use case
   - Mockups or examples if helpful

### 🚀 Submitting Pull Requests

#### Setup
```bash
# 1. Fork the repository
# 2. Clone your fork
git clone https://github.com/YOUR-USERNAME/snake-game.git

# 3. Create a feature branch
git checkout -b feature/YourFeatureName

# 4. Make your changes
# 5. Test thoroughly on multiple devices
```

#### Code Guidelines
- **HTML**: Use semantic HTML5 tags
- **CSS**: 
  - Follow existing naming conventions
  - Use CSS variables for consistency
  - Add media queries for responsive design
  - Test on all breakpoints
- **JavaScript**:
  - Use clear, descriptive variable names
  - Comment complex logic
  - Follow existing code patterns
  - Use const/let instead of var
  - Add error handling where needed

#### Testing Checklist
- [ ] Game plays correctly
- [ ] No console errors
- [ ] Works on desktop browsers
- [ ] Works on mobile browsers
- [ ] Responsive design working
- [ ] All controls functional
- [ ] Score tracking works
- [ ] No performance issues

#### Commit Guidelines
```bash
# Make clear, descriptive commits
git commit -m "Add feature: description"

# Examples:
git commit -m "Add sound effects for food collection"
git commit -m "Fix mobile button alignment on small screens"
git commit -m "Improve game collision detection"
```

#### Push and Create PR
```bash
# Push your feature branch
git push origin feature/YourFeatureName

# Go to GitHub and create a Pull Request
# Provide a clear description of your changes
```

## Feature Ideas

Already thinking about what to contribute? Here are some ideas:

### 🎮 Gameplay
- [ ] Power-ups (speed boost, slow motion, shield)
- [ ] Obstacles to avoid
- [ ] Special food items with bonus points
- [ ] Game modes (classic, survival, time attack)
- [ ] Difficulty scaling adjustments

### 🎨 UI/UX
- [ ] Dark/Light theme toggle
- [ ] Custom color schemes
- [ ] Settings menu
- [ ] Improved mobile UI
- [ ] Accessibility improvements

### 🎵 Audio/Visual
- [ ] Background music
- [ ] Sound effects
- [ ] Particle effects
- [ ] Animations
- [ ] Visual themes

### 📊 Features
- [ ] Leaderboard system
- [ ] Game statistics/analytics
- [ ] Replay system
- [ ] Achievements/badges
- [ ] Share score feature

### 📱 Mobile
- [ ] Touch joystick control
- [ ] Responsive improvements
- [ ] App-like experience
- [ ] Progressive Web App (PWA)

## Project Structure

```
snake-game/
├── index.html          # Game HTML
├── styles.css          # CSS styling
├── script.js           # Game logic
├── README.md           # Documentation
├── CONTRIBUTING.md     # This file
├── LICENSE             # MIT License
└── .gitignore          # Git ignore rules
```

## Development Tips

### Testing Responsiveness
```bash
# Test different viewport sizes
# Use Chrome DevTools - Toggle Device Toolbar (Ctrl+Shift+M)
# Test on actual devices if possible
```

### Debugging
```javascript
// Add console logs for debugging
console.log('Variable:', variable);

// Check browser console for errors (F12)
```

### Performance
- Use Chrome DevTools Performance tab
- Check for unnecessary redraws
- Monitor memory usage
- Test on older devices

## Questions?

- 📖 Check the README.md
- 💬 Create a Discussion issue
- 📧 Contact the maintainer

## Review Process

All PRs will be reviewed for:
1. Code quality and style
2. Functionality and correctness
3. Browser compatibility
4. Mobile responsiveness
5. Performance impact
6. Documentation updates

Reviewers may request changes before merging.

## Recognition

Contributors will be:
- Thanked in the README
- Listed in commit history
- Added to CONTRIBUTORS list
- Featured in releases notes

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! 🎉**
