import mongoose, {Schema} from 'mongoose';

const workspaceSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    channels: [
        {
            id: String,
            chatID: {
                   type: mongoose.Schema.Types.ObjectId,
                   ref: "Chat"
                } 
        }
    ],
    directID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    }
})

const Workspace = mongoose.model("Workspace", workspaceSchema);

export default Workspace;