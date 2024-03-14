function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = time;

    const hour = now.getHours();
    let greeting;
    if (hour < 12) {
        greeting = 'Good Morning';
    } else if (hour < 18) {
        greeting = 'Good Afternoon';
    } else {
        greeting = 'Good Evening';
    }
    document.getElementById('greeting').textContent = greeting;

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];
    document.getElementById('day').textContent = day;

    if (hour >= 6 && hour < 18) {
        document.body.classList.remove('night');
    } else {
        document.body.classList.add('night');
    }
}

setInterval(updateClock, 1000);
updateClock(); // Initial call to update immediately