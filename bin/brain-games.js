#!/usr/bin/env node

//Импорты
import readlineSync from 'readline-sync';
//код
console.log("Welcome to the Brain Games!");//dsdjlbv 
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);