# 🎨 Customization Guide

This countdown timer is designed to be easily customizable. Here's how to make it your own!

## 📅 Setting Your Target Date

### Basic Configuration

Edit the target date in `script.js`:

```javascript
// Change this line to your desired date and time
const targetDate = new Date('2024-12-31T23:59:59').getTime();
```

### Date Format Examples

```javascript
// New Year's Eve 2024
const targetDate = new Date('2024-12-31T23:59:59').getTime();

// Wedding day
const targetDate = new Date('2024-06-15T14:30:00').getTime();

// Product launch
const targetDate = new Date('2024-03-01T09:00:00').getTime();

// Conference start
const targetDate = new Date('2024-11-20T08:00:00').getTime();

// Birthday celebration
const targetDate = new Date('2024-07-04T00:00:00').getTime();
```

### Time Zone Considerations

```javascript
// For specific time zones, use this format:
const targetDate = new Date('2024-12-31T23:59:59-05:00').getTime(); // EST
const targetDate = new Date('2024-12-31T23:59:59+00:00').getTime(); // UTC
const targetDate = new Date('2024-12-31T23:59:59+09:00').getTime(); // JST
```

## 🎯 Customizing Content

### Page Title and Headers

Edit `index.html`:

```html
<!-- Change the main title -->
<h1 class="title">🎉 Your Amazing Event</h1>
<p class="subtitle">Something incredible is coming!</p>

<!-- Update page title -->
<title>Your Event Countdown | Coming Soon</title>

<!-- Update meta description -->
<meta name="description" content="Countdown to our amazing event - don't miss out!">
```

### Event Description

```html
<!-- Modify the event details section -->
<div class="event-details">
    <h2>What's Coming?</h2>
    <p>Join us for an unforgettable experience that will change everything. 
       Be part of something amazing!</p>
</div>
```

### Completion Message

```html
<!-- Customize what shows when countdown ends -->
<div class="completion-message" id="completionMessage" style="display: none;">
    <h2>🎊 It's Here!</h2>
    <p>The moment we've all been waiting for has finally arrived!</p>
    <div class="celebration">🎉 🎊 🥳 🎈 ✨</div>
</div>
```

## 🎨 Styling and Colors

### CSS Variables

All colors and styling can be changed via CSS variables in `style.css`:

```css
:root {
    /* Main colors */
    --primary-color: #667eea;      /* Main brand color */
    --secondary-color: #764ba2;    /* Secondary brand color */
    --accent-color: #f093fb;       /* Accent/highlight color */
    
    /* Text colors */
    --text-primary: #2d3748;       /* Main text */
    --text-secondary: #4a5568;     /* Secondary text */
    --text-light: #a0aec0;         /* Light text */
    
    /* Background colors */
    --bg-primary: #f7fafc;         /* Light background */
    --bg-secondary: #ffffff;       /* Card backgrounds */
    
    /* Effects */
    --border-color: #e2e8f0;       /* Border color */
    --border-radius: 12px;         /* Corner roundness */
}
```

### Color Scheme Examples

**Dark Theme:**
```css
:root {
    --primary-color: #9f7aea;
    --secondary-color: #553c9a;
    --accent-color: #ed8936;
    --text-primary: #f7fafc;
    --text-secondary: #e2e8f0;
    --text-light: #a0aec0;
    --bg-primary: #1a202c;
    --bg-secondary: #2d3748;
    --border-color: #4a5568;
}
```

**Ocean Theme:**
```css
:root {
    --primary-color: #0080ff;
    --secondary-color: #0066cc;
    --accent-color: #00ccff;
    --text-primary: #1a365d;
    --text-secondary: #2c5282;
    --text-light: #63b3ed;
    --bg-primary: #ebf8ff;
    --bg-secondary: #ffffff;
    --border-color: #bee3f8;
}
```

**Sunset Theme:**
```css
:root {
    --primary-color: #ff6b6b;
    --secondary-color: #ff5722;
    --accent-color: #ffd93d;
    --text-primary: #2d1b69;
    --text-secondary: #553c9a;
    --text-light: #9f7aea;
    --bg-primary: #fff5f5;
    --bg-secondary: #ffffff;
    --border-color: #fed7d7;
}
```

## 🔤 Typography

### Changing Fonts

Add Google Fonts to `index.html`:

```html
<head>
    <!-- Add before closing </head> tag -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
```

Update CSS:

```css
body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Font Options

**Modern and Clean:**
- `'Inter', sans-serif`
- `'Roboto', sans-serif`
- `'Open Sans', sans-serif`

**Friendly and Rounded:**
- `'Poppins', sans-serif`
- `'Nunito', sans-serif`
- `'Rounded', sans-serif`

**Elegant and Sophisticated:**
- `'Playfair Display', serif`
- `'Lora', serif`
- `'Crimson Text', serif`

**Bold and Impact:**
- `'Oswald', sans-serif`
- `'Bebas Neue', sans-serif`
- `'Anton', sans-serif`

### Font Sizes

```css
.title {
    font-size: 3rem;        /* Make title bigger */
}

.time-value {
    font-size: 4rem;        /* Make countdown numbers bigger */
}

@media (max-width: 768px) {
    .title {
        font-size: 2rem;    /* Responsive sizing */
    }
    .time-value {
        font-size: 2.5rem;
    }
}
```

## 🎭 Layout Modifications

### Vertical Layout

Change the countdown to stack vertically:

```css
.countdown-container {
    flex-direction: column;
    gap: 20px;
}

.separator {
    display: none; /* Hide separators */
}
```

### Grid Layout

Create a 2x2 grid layout:

```css
.countdown-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    max-width: 400px;
    margin: 0 auto;
}

.separator {
    display: none;
}
```

### Circular Time Segments

Make countdown numbers circular:

```css
.time-segment {
    border-radius: 50%;
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```

## ✨ Animation Customizations

### Disable Animations

For users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}
```

### Custom Animations

Add pulsing effect to countdown:

```css
.time-value {
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.05);
        opacity: 0.8;
    }
}
```

Add floating effect:

```css
.time-segment {
    animation: float 3s ease-in-out infinite;
}

.time-segment:nth-child(2) {
    animation-delay: 0.5s;
}

.time-segment:nth-child(4) {
    animation-delay: 1s;
}

.time-segment:nth-child(6) {
    animation-delay: 1.5s;
}

.time-segment:nth-child(8) {
    animation-delay: 2s;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}
```

## 🔧 Functional Customizations

### Different Time Units

Show only days and hours:

```javascript
// Modify updateDisplay function in script.js
function updateDisplay(timeObj) {
    daysElement.textContent = padZero(timeObj.days);
    hoursElement.textContent = padZero(timeObj.hours);
    // Hide minutes and seconds elements
    document.getElementById('minutes').parentElement.style.display = 'none';
    document.getElementById('seconds').parentElement.style.display = 'none';
}
```

### Add Weeks

Include weeks in the countdown:

```javascript
// Modify calculateTimeRemaining function
function calculateTimeRemaining(targetTime, currentTime) {
    const difference = targetTime - currentTime;
    
    if (difference <= 0) {
        return {
            total: 0,
            weeks: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isComplete: true
        };
    }
    
    const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return {
        total: difference,
        weeks,
        days,
        hours,
        minutes,
        seconds,
        isComplete: false
    };
}
```

### Custom Completion Actions

Add custom actions when countdown ends:

```javascript
function showCompletionMessage() {
    // ... existing code ...
    
    // Custom actions
    playCompletionSound();
    sendEmailNotification();
    redirectToLandingPage();
    showSpecialOffer();
}

function playCompletionSound() {
    const audio = new Audio('celebration.mp3');
    audio.play().catch(e => console.log('Audio play failed:', e));
}

function redirectToLandingPage() {
    setTimeout(() => {
        window.location.href = '/launch-page.html';
    }, 5000); // Redirect after 5 seconds
}
```

## 📱 Mobile Customizations

### Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) {
    .container {
        padding: 30px;
    }
    .title {
        font-size: 2.2rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .container {
        padding: 20px;
        margin: 10px;
    }
    .countdown-container {
        flex-direction: column;
    }
}

/* Small mobile */
@media (max-width: 480px) {
    .time-segment {
        width: 100%;
        max-width: 200px;
    }
    .time-value {
        font-size: 2rem;
    }
}
```

### Touch-Friendly Features

```css
/* Larger touch targets */
.time-segment {
    min-height: 60px;
    cursor: pointer;
}

/* Touch feedback */
.time-segment:active {
    transform: scale(0.95);
}
```

## 🌍 Internationalization

### Different Languages

Create language-specific versions:

**Spanish Version:**
```html
<h1 class="title">🎉 Cuenta Regresiva del Gran Evento</h1>
<p class="subtitle">¡Prepárate para algo increíble!</p>

<!-- Time labels -->
<div class="time-label">Días</div>
<div class="time-label">Horas</div>
<div class="time-label">Minutos</div>
<div class="time-label">Segundos</div>
```

**French Version:**
```html
<h1 class="title">🎉 Compte à Rebours du Grand Événement</h1>
<p class="subtitle">Préparez-vous pour quelque chose d'incroyable!</p>

<!-- Time labels -->
<div class="time-label">Jours</div>
<div class="time-label">Heures</div>
<div class="time-label">Minutes</div>
<div class="time-label">Secondes</div>
```

### Right-to-Left Languages

For Arabic, Hebrew, etc.:

```css
[dir="rtl"] .countdown-container {
    direction: rtl;
}

[dir="rtl"] .time-segment {
    text-align: center; /* Keep centered */
}
```

## 🎪 Special Effects

### Particle Background

Add animated particles:

```css
.container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 200, 255, 0.3) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
}
```

### Gradient Animations

Animated background gradient:

```css
body {
    background: linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #feca57);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
}

@keyframes gradientShift {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
```

## 🔊 Sound Integration

### Add Sound Effects

```html
<!-- Add to HTML -->
<audio id="tickSound" preload="auto">
    <source src="tick.mp3" type="audio/mpeg">
    <source src="tick.ogg" type="audio/ogg">
</audio>

<audio id="completionSound" preload="auto">
    <source src="celebration.mp3" type="audio/mpeg">
    <source src="celebration.ogg" type="audio/ogg">
</audio>
```

```javascript
// Add to JavaScript
function updateCountdown() {
    // ... existing code ...
    
    // Play tick sound (with user gesture requirement)
    const tickSound = document.getElementById('tickSound');
    if (tickSound && userHasInteracted) {
        tickSound.currentTime = 0;
        tickSound.play().catch(e => console.log('Sound play failed:', e));
    }
}
```

---

## 💡 Quick Tips

1. **Test on multiple devices** - Always check mobile responsiveness
2. **Use web safe fonts** - Include fallbacks for better compatibility
3. **Optimize images** - Compress any background images you add
4. **Consider accessibility** - Use good color contrast and alt text
5. **Test different dates** - Make sure your countdown works with various target dates
6. **Browser compatibility** - Test on different browsers and versions

---

**Need more help?** Check out the [deployment guide](DEPLOYMENT.md) or create an issue in the repository!