import { initializeMenu, updateClock } from './js/miscModules.js';
import { initializeNotesApp } from './js/notesApp.js';
import { initializeCalculator } from './js/calculatorApp.js';
import { initializeWeatherApp } from './js/weatherApp.js';



document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeWeatherApp();
    initializeCalculator();
    initializeNotesApp();
    setInterval(updateClock, 1000);
});