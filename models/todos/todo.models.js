import mongoose, { mongo } from "mongoose";


const TodoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    subTodo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'SubTodo',
        }
    ]

}, { timestamps: true });

export const Todo = mongoose.model('Todo', TodoSchema);
