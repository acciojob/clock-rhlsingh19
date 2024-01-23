document.addEventListener("DOMContentLoaded", function () {
    const timerElement = document.getElementById('timer');

    function updateTimer() {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        // Convert hours to 12-hour format
        const formattedHours = hours % 12 || 12;

        // Add leading zero to minutes and seconds if they are less than 10
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

        const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

        timerElement.textContent = `${formattedDate}, ${formattedTime}`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial update
    updateTimer();
});

