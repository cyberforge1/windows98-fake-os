
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
    let hours = now.getHours();
    let minutes = now.getMinutes();

    minutes = minutes < 10 ? '0' + minutes : minutes;

    let formattedTime = hours + ':' + minutes;

    return formattedTime;
};

const initializeMenu = () => {
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');

    startButton.addEventListener('click', () => toggleStartMenu(startMenu));
};


export { toggleStartMenu, updateClock, currentTime, initializeMenu };