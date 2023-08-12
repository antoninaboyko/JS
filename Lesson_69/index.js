//1
// import fs from 'fs';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const book = 'The Wind in the Willows (introductory fragment).txt';

// const readStream = fs.createReadStream(path.join(__dirname, '/files', book), { highWaterMark: 1024 });

// const writeStream = fs.createWriteStream(path.join(__dirname, '/files', 'modified_' + book));


// const introLines = [
//     "Introductory fragment, copying is prohibited!",
//     "Introductory fragment, copying is prohibited!",
//     "Introductory fragment, copying is prohibited!"
// ];

// readStream.on('data', (chunk) => {
//     writeStream.write('\n---CHUNK START---\n');
//     writeStream.write(chunk);
   
//     const randomIntroIndex = Math.floor(Math.random() * introLines.length);
//     writeStream.write(introLines[randomIntroIndex] + '\n');
//     writeStream.write('\n---CHUNK END---\n');
// });

// readStream.on('end', () => {
//     console.log('Reading and writing finished.');
// });

// readStream.on('error', (error) => {
//     console.error('An error occurred:', error);
// });

// writeStream.on('finish', () => {
//     console.log('Writing finished.');
// });

// writeStream.on('error', (error) => {
//     console.error('An error occurred:', error);
// });


//2
// const log = (value) => {
//     process.stdout.write(value + "\n");
// };

// log("Hello, world!");


//3
// import readline from "readline";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const validResponses = ["Y", "y", "yes", "YES", "N", "n", "no", "No"];

// const askQuestion = (question) => {
//     rl.question(question, (answer) => {
//         if (validResponses.includes(answer)) {
//             if (answer.toUpperCase() === "Y" || answer.toUpperCase() === "YES" ) {
//                 console.log("Great! Moving on to the next question.");
//                 askNextQuestion();
//             } else {
//                 console.log("Understood. Exiting.");
//                 rl.close();
//             }
//         } else {
//             console.error("Invalid response format");
//             rl.close();
//         }
//     });
// };

// const askNextQuestion = () => {
//     const nextQuestion = "Do you want to ESLint? (Y/N): ";
//     askQuestion(nextQuestion);
// };

// const initialQuestion = "Do you want to use SCSS? (Y/N): ";
// askQuestion(initialQuestion);