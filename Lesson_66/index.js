import express from 'express';
import mongoose from 'mongoose';
import { User } from './model/user.js';
import csurf from 'csurf';
import jwt from 'jsonwebtoken';


const checkToken = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Invalid token' });
        } else {
          next();
        }
      });
    } else {
      return res.status(401).json({ message: 'Token not found' });
    }};


const csrf = csurf({ cookie: true });



import cookieParser from 'cookie-parser';


const PORT = 3000;

const url = 'mongodb://127.0.0.1:27017/client';

const app = express();

app.use(express.static('css'));
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.use(cookieParser());

mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});

        app.get('/', async (req, res) => {
            try {
                const title = {};
                let isAdmin = false;
        
                if (req.cookies.username === 'admin') {
                    title.text = `You are in administrator mode, to logout press `;
                    title.link = 'http://localhost:3000/logout';
                    title.linkMessage = 'log out';
                    isAdmin = true;
                } else {
                    title.text = 'If you are admin please ';
                    title.link = 'http://localhost:3000/login';
                    title.linkMessage = 'log in';
                    isAdmin = false;
                }
        
                const users = await User.find();
                res.render('index', { users, title, isAdmin });
            } catch (err) {
                console.log(err);
            }
        });
           

app.post('/add', async (req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.redirect('/');
    } catch(err){
        console.log(err);
    }
});

app.get('/edit/:id', checkToken, async (req, res)=> {
    try{
        const user = await User.findById(req.params.id)
        res.render('edit', {user});
    } catch(err){
        console.log(err);
    }
});

app.post('/change-user/:id', async (req, res)=> {
    try{
        await User.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/');
    } catch(err){
        console.log(err);
    }
});

app.delete('/remove/:id', async (req, res)=> {
    try{
        await User.deleteOne({_id: req.params.id})
        res.status(200).json({ message: 'User deleted' });
    } catch(err){
        console.log(err);
    }
});

app.get('/login', csrf, (req, res) => {
    res.render('login', { csrfToken: req.csrfToken() })
});

app.post('/set-cookie', csrf, async (req, res)=> {
    const {name, password} = req.body;
    if (name == 'admin' && password == '123'){
        res.cookie('username', name);
        res.redirect('/');
    } else {
        res.redirect('/login')
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('username');
    res.clearCookie('token');
    res.redirect('/')
});
