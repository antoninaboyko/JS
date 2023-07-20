const fs = require('fs').promises;
const path = require('path');
const os = require('os');


const users = [
    {name: 'Mike', age: 25},
    {name: 'Bob', age: 32},
    {name: 'Nikola', age: 17},
];

const newData = [
    {name: 'Anna', age: 24},
    {name: 'Tom', age: 52},
];

const data = {
    users: users,
};

const json = JSON.stringify(data, null, 2);
const file = path.join(os.homedir(), 'data.json');

// fs.writeFile(file, json, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Data written to file');
//     }
// });



async function isExist(filePath) {
    try {
      await fs.stat(filePath);
      return true;
    } catch (err) {
      if (err.code === 'ENOENT') {
        return false;
      }
    }
  }
async function updateData() {
    try {
      const fileContent = await fs.readFile('data.json', 'utf-8');
      const data = JSON.parse(fileContent);
      data.users = [...data.users, ...newData];
  
 
      const jsonData = JSON.stringify(data, null, 2);
  
      await fs.writeFile('data.json', jsonData, 'utf-8');
  
      console.log('update');
    } catch (err) {
      console.error('Error:', err);
    }
  }
  
async function main() {
    try {
        if (await isExist(file)) {
            console.log('Файл існує');
            await updateData();
        } else {
            console.log('Файл не існує');
        }
    } catch (err) {
        console.error('Error:', err);
    }
}
  
  main();
