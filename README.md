# Countdown Timer ⏳

A simple and elegant countdown timer web application with a beautiful gradient background.

## Features

- Clean and modern user interface
- Customizable countdown duration (in minutes)
- Visual timer display in MM:SS format
- Alert notification when time's up
- Responsive design
- Smooth animations and hover effects

## Project Structure

```
countdown-timer/
│
├── index.html      # Main HTML file
├── style.css       # Stylesheet with gradient background
├── script.js       # JavaScript functionality
└── README.md       # Project documentation
```

## Installation

1. Download or clone all project files
2. Ensure all files (`index.html`, `style.css`, `script.js`) are in the same directory
3. No additional dependencies or installations required

## Usage

1. Open `index.html` in your web browser
2. Enter the desired countdown time in minutes
3. Click the "Start" button to begin the countdown
4. The timer will count down to zero and alert you when time's up

## How It Works

- **HTML**: Provides the structure with an input field for minutes and a display for the countdown
- **CSS**: Styles the page with a gradient background and modern design elements
- **JavaScript**: Handles the countdown logic, updates the display every second, and alerts when finished

## Browser Compatibility

Works on all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge

## Customization

### Change Colors
Edit `style.css` to modify:
- Background gradient colors (lines 5-6)
- Button colors (lines 35-36)
- Text colors

### Modify Timer Display
Edit `script.js` to change:
- Time format in `updateDisplay()` function
- Alert message when timer ends

## License

Free to use and modify for personal or commercial projects.

## Author

Created with HTML, CSS, and JavaScript
