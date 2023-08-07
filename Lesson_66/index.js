import express from 'express'
import mongoose from 'mongoose';
import { Course } from './model/course.js';

const PORT = 3000;

const url = 'mongodb://127.0.0.1:27017/study';

const app = express();

app.use(express.static('css'));

app.set('view engine', 'pug');
app.get('/', async (req, res) => {
    try {
        const courses = await Course.find();
        res.render('index', {courses})
    } catch (err){
        console.log(err);
    }});
    app.get('/edit/:id', async (req, res)=> {
        try{
            const course = await Course.findById(req.params.id)
            res.render('edit', {course})
        } catch(err){
            console.log(err);
        }
    });
    
    
    app.post('/change-course/:id', async (req, res)=> {
        try{
            await Course.findByIdAndUpdate(req.params.id, req.body);
            res.redirect('/');
        } catch(err){
            console.log(err);
        }
    });
    
   
  app.delete('/remove/:id', async (req, res)=> {
    try{
        await Course.deleteOne({_id: req.params.id})
        res.status(200).json({ message: 'Course deleted' });
    } catch(err){
        console.log(err);
    }
});
app.delete('/remove/:id', async (req, res)=> {
    try{
        await Course.deleteOne({_id: req.params.id})
        res.status(200).json({ message: 'Course deleted' });
    } catch(err){
        console.log(err);
    }
});

    mongoose.connect(url)
        .then(() => {
            console.log('Connected to DB');
            app.listen(PORT, () => {
                console.log(`Server started on http://localhost:${PORT}`);
            });
        })
        .catch((err) => {
            console.log(`DB connection error: ${err}`);
        });
