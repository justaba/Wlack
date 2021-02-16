import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
    },
    workspaces: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Workspace"
        }
    ], 
    created_at: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model("User", userSchema);

export default User;


