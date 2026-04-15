import { ref } from "joi";
import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, "Team name is required"],
        trim:true,
        minlength: 2,
        maxlength: 100
    },
    ownerId: {
        type: module.Schema.Types.ObjectId,
        ref: "Owner",
        required: [true, "Owner "]
    }
})