console.log('hello world')

// JS VARIABLE ASSIGNMENT

const startButton = document.getElementById('startButton')
const startMenu = document.getElementById('startMenu')

const closeButtonOne = document.getElementById('closeButtonOne')
const closeButtonTwo = document.getElementById('closeButtonTwo')
const closeButtonThree = document.getElementById('closeButtonThree')

const appOneImage = document.getElementById('appOneCard').querySelector('img');
const appTwoImage = document.getElementById('appTwoCard').querySelector('img');
const appThreeImage = document.getElementById('appThreeCard').querySelector('img');




// EVENT LISTENERS

startButton.addEventListener('click', toggleStartMenu);

closeButtonOne.addEventListener('click', closeApplicationWindow);
closeButtonTwo.addEventListener('click', closeApplicationWindow);
closeButtonThree.addEventListener('click', closeApplicationWindow);

appOneImage.addEventListener('dblclick', openAppOneWindow);
appTwoImage.addEventListener('dblclick', openAppTwoWindow);
appThreeImage.addEventListener('dblclick', openAppThreeWindow);


// FUNCTION DEFINITION


// START MENU VISIBILITY TOGGLE

function toggleStartMenu() {
    // Toggle the display property of the start menu
    if (startMenu.style.display === 'none') {
        startMenu.style.display = 'flex';
    } else {
        startMenu.style.display = 'none';
    }
}

// CLOSE APPLICATION WINDOWS WITH X BUTTON

function closeApplicationWindow(event) {
        // Find the parent node (outer-app-window) of the close button clicked
        let outerAppWindow = event.target.closest('.outerAppWindow');
    
        // Hide the outer app window
        outerAppWindow.style.display = 'none';
}

// FETCHING & DISPLAYING CURRENT TIME










// NEEDS RE-FACTORING //
// OPENS A DESKTOP APPLICATION WINDOW ON ICON DOUBLE CLICK

function openAppOneWindow() {
    let appOneWindow = document.querySelector('#appOneOuter');
    if (appOneWindow.style.display === 'none') {
        appOneWindow.style.display = 'block';
    } else {
        appOneWindow.style.display = 'none';
    }
    }

function openAppTwoWindow() {
    let appTwoWindow = document.querySelector('#appTwoOuter');
    if (appTwoWindow.style.display === 'none') {
        appTwoWindow.style.display = 'block';
    } else {
        appTwoWindow.style.display = 'none';
    }
    }

function openAppThreeWindow() {
    let appThreeWindow = document.querySelector('#appThreeOuter');
    if (appThreeWindow.style.display === 'none') {
        appThreeWindow.style.display = 'block';
    } else {
        appThreeWindow.style.display = 'none';
    }
    }




// GET AND DISPLAY THE CLOCK

function currentTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
  
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    let formattedTime = hours + ':' + minutes
  
    const currentTimeElement = document.getElementById('currentTime');
    currentTimeElement.innerText = formattedTime;
  }

  setInterval(currentTime, 1000);
  
  currentTime();