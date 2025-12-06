import mongoose from "mongoose";

export interface InteractionDoc extends mongoose.Document {
    question: string;
    response: string;
    type: string;
    self_id: string;
    user_id: string;
}

const interactionSchema = new mongoose.Schema({
    question: String,
    response: String,
    type: String,
    self_id: String,
    user_id: String,
}, {
    timestamps: true,
});

const Interaction = mongoose.models.Interaction || mongoose.model("Interaction", interactionSchema);

export default Interaction;