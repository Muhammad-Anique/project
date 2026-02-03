/**
 * COUNTDOWN TIMER - PURE JAVASCRIPT
 * Author: Muhammad Anique
 * Description: Real-time countdown timer with automatic updates
 */

// ===================================
// CONFIGURATION
// ===================================

// Set your target date here (YYYY-MM-DDTHH:MM:SS format)
// Example: '2024-12-31T23:59:59' for New Year's Eve
const targetDate = new Date('2024-12-31T23:59:59').getTime();

// Update interval in milliseconds (1000ms = 1 second)
const updateInterval = 1000;

// ===================================
// DOM ELEMENTS
// ===================================

// Get countdown display elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Get containers
const countdownContainer = document.getElementById('countdown');
const completionMessage = document.getElementById('completionMessage');

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Pads single digits with leading zero
 * @param {number} num - Number to pad
 * @returns {string} - Padded string
 */
function padZero(num) {
    return num.toString().padStart(2, '0');
}

/**
 * Calculates time remaining until target date
 * @param {number} targetTime - Target timestamp
 * @param {number} currentTime - Current timestamp
 * @returns {Object} - Time components object
 */
function calculateTimeRemaining(targetTime, currentTime) {
    const difference = targetTime - currentTime;
    
    // If countdown is complete
    if (difference <= 0) {
        return {
            total: 0,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            isComplete: true
        };
    }
    
    // Calculate time components
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return {
        total: difference,
        days,
        hours,
        minutes,
        seconds,
        isComplete: false
    };
}

/**
 * Updates DOM elements with time values
 * @param {Object} timeObj - Time components object
 */
function updateDisplay(timeObj) {
    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
        console.error('Countdown elements not found in DOM');
        return;
    }
    
    // Update display with padded values
    daysElement.textContent = padZero(timeObj.days);
    hoursElement.textContent = padZero(timeObj.hours);
    minutesElement.textContent = padZero(timeObj.minutes);
    secondsElement.textContent = padZero(timeObj.seconds);
    
    // Add animation class for visual feedback
    const elements = [daysElement, hoursElement, minutesElement, secondsElement];
    elements.forEach(el => {
        el.classList.add('updating');
        setTimeout(() => el.classList.remove('updating'), 300);
    });
}

/**
 * Shows completion message and hides countdown
 */
function showCompletionMessage() {
    if (countdownContainer) {
        countdownContainer.style.display = 'none';
    }
    
    if (completionMessage) {
        completionMessage.style.display = 'block';
        completionMessage.classList.add('celebration-active');
    }
    
    // Update document title
    document.title = '🎉 Event Complete! | Countdown Timer';
    
    // Optional: Play celebration sound (uncomment if you add audio file)
    // playCompletionSound();
    
    // Optional: Trigger confetti or other celebration effects
    triggerCelebration();
}

/**
 * Triggers celebration effects when countdown completes
 */
function triggerCelebration() {
    // Create celebration effect
    createConfettiEffect();
    
    // Log completion for analytics (if needed)
    console.log('🎉 Countdown completed at:', new Date().toLocaleString());
    
    // Optional: Send completion event to analytics
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'countdown_complete', {
    //         'event_category': 'engagement',
    //         'event_label': 'countdown_timer'
    //     });
    // }
}

/**
 * Creates a simple confetti effect
 */
function createConfettiEffect() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#feca57', '#ff9ff3'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background-color: ${colors[Math.floor(Math.random() * colors.length)]};
                top: -10px;
                left: ${Math.random() * window.innerWidth}px;
                z-index: 9999;
                border-radius: 50%;
                animation: confettiFall ${Math.random() * 2 + 1}s linear forwards;
                pointer-events: none;
            `;
            
            document.body.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 50);
    }
}

/**
 * Main countdown update function
 */
function updateCountdown() {
    try {
        const currentTime = new Date().getTime();
        const timeRemaining = calculateTimeRemaining(targetDate, currentTime);
        
        if (timeRemaining.isComplete) {
            showCompletionMessage();
            // Stop the interval
            if (window.countdownInterval) {
                clearInterval(window.countdownInterval);
                window.countdownInterval = null;
            }
            return;
        }
        
        updateDisplay(timeRemaining);
        
        // Update page title with current countdown
        document.title = `${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s | Countdown Timer`;
        
    } catch (error) {
        console.error('Error updating countdown:', error);
    }
}

/**
 * Validates target date
 * @param {number} targetTime - Target timestamp
 * @returns {boolean} - Whether target date is valid
 */
function isValidTargetDate(targetTime) {
    const now = new Date().getTime();
    
    if (isNaN(targetTime)) {
        console.error('Invalid target date format');
        return false;
    }
    
    if (targetTime <= now) {
        console.warn('Target date is in the past');
        // Still return true to show completion message
        return true;
    }
    
    return true;
}

/**
 * Initializes the countdown timer
 */
function initializeCountdown() {
    console.log('🚀 Initializing countdown timer...');
    console.log('Target date:', new Date(targetDate).toLocaleString());
    
    // Validate target date
    if (!isValidTargetDate(targetDate)) {
        console.error('Cannot initialize countdown with invalid target date');
        return;
    }
    
    // Run initial update
    updateCountdown();
    
    // Set up interval for continuous updates
    window.countdownInterval = setInterval(updateCountdown, updateInterval);
    
    console.log('✅ Countdown timer initialized successfully');
}

/**
 * Cleanup function for timer
 */
function cleanup() {
    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
        window.countdownInterval = null;
        console.log('🧹 Countdown timer cleaned up');
    }
}

// ===================================
// EVENT LISTENERS
// ===================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeCountdown);
} else {
    initializeCountdown();
}

// Cleanup when page is about to unload
window.addEventListener('beforeunload', cleanup);

// Handle visibility changes (pause when tab is hidden, resume when visible)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Optionally pause updates when tab is hidden
        console.log('⏸️ Tab hidden - countdown continues');
    } else {
        // Force immediate update when tab becomes visible
        console.log('▶️ Tab visible - updating countdown');
        updateCountdown();
    }
});

// Handle window focus events
window.addEventListener('focus', () => {
    // Force update when window regains focus
    updateCountdown();
});

// ===================================
// CSS ANIMATIONS (Injected via JS)
// ===================================

// Add dynamic CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .updating {
        animation: numberUpdate 0.3s ease-in-out;
    }
    
    @keyframes numberUpdate {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); color: #f093fb; }
        100% { transform: scale(1); }
    }
    
    .celebration-active {
        animation: celebrationZoomIn 0.5s ease-out;
    }
    
    @keyframes celebrationZoomIn {
        0% {
            transform: scale(0.8);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }
`;

document.head.appendChild(style);

// ===================================
// EXPORT FOR TESTING (if needed)
// ===================================

// Expose functions for testing purposes
if (typeof window !== 'undefined') {
    window.CountdownTimer = {
        calculateTimeRemaining,
        updateCountdown,
        cleanup,
        // Expose current interval for testing
        get interval() {
            return window.countdownInterval;
        }
    };
}

// ===================================
// CONSOLE BRANDING
// ===================================

console.log(`
🎯 COUNTDOWN TIMER v1.0
👨‍💻 Built by Muhammad Anique
🌐 https://www.muhammadanique.com/
⭐ Star this project: https://github.com/Muhammad-Anique/project
`);

// Development helpers
if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    console.log('🔧 Development mode detected');
    console.log('Target date:', new Date(targetDate));
    console.log('Time remaining:', calculateTimeRemaining(targetDate, new Date().getTime()));
}