import { initializeMenu, updateClock } from './miscModules.js';
import { initializeNotesApp } from './notesApp.js';
import { initializeCalculator } from './calculatorApp.js';
import { initializeWeatherApp } from './weatherApp.js';



document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();
    initializeWeatherApp();
    initializeCalculator();
    initializeNotesApp();
});

setInterval(updateClock, 1000);
