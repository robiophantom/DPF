// Schemna for Task model
import { Schema } from 'mongoose';

const TaskSchema = new Schema({
  task_id: { type: Number, required: true, unique: true },
  status: { type: String, enum: ['pending', 'in_progress', 'completed'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default TaskSchema;