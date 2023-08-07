import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const courseSchema = new Schema ({
    name: String,
    age: Number,
    status: String,
    avatar: String,
    
})

const Course = mongoose.model('course', courseSchema);

export {Course};