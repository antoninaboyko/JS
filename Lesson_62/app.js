import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

// const PORT = 3000;
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/',  async  (req, res)=>{
    const filePath = path.join(__dirname, './package.json');
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    res.send(`<h1>Welcome</h1> 
    Json text: <pre>${fileContents}</pre>`);
  } catch (err) {
    console.error('Error', err);
  }
})


if(process.env.NODE_ENV == 'development') {
    console.log('development mode');
    } else {
    console.log('production mode');
    }

app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
})

    
