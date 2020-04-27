import { createTable } from './table-creator.js';

const storedSessionData = localStorage.getItem('results');
const parsedSessionData = JSON.parse(storedSessionData);

const sessionTable = document.getElementById('session-table');

createTable(parsedSessionData, sessionTable);

