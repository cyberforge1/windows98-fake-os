
const toggleStartMenu = (startMenu) => {
    if (startMenu.style.display === 'none') {
        startMenu.style.display = 'flex';
    } else {
        startMenu.style.display = 'none';
    }
};

const updateClock = () => {
    const formattedTime = currentTime();
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.innerText = formattedTime;
};


const currentTime = () => {
    let now = new Date();
    let options = { hour: '2-digit', minute: '2-digit', hour12: true };
    let timeString = now.toLocaleTimeString([], options);
    return timeString.replace(/am|pm/i, match => match.toUpperCase());
};

const initializeMenu = () => {
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');

    startButton.addEventListener('click', () => toggleStartMenu(startMenu));
};


export { toggleStartMenu, updateClock, currentTime, initializeMenu };