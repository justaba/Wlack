import mongoose, {Schema} from 'mongoose';

const chatSchema = new Schema({
    data: [{
        message: String
    }]
})