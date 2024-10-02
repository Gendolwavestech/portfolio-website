// Set the target launch date (format: 'MM DD, YYYY HH:MM:SS')
const launchDate = new Date('October 25, 2024 23:59:59').getTime();

// Update the countdown every second
const countdownTimer = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdownTimer);
        document.getElementById('timer').textContent = 'The site is live!';
    }
}, 1000);
