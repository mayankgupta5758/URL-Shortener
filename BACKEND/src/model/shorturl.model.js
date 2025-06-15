import mongoose, { mongo } from "mongoose";

const short_urlschema = new mongoose.Schema({
    full_url: {
        type: String,
        required: true,
    },
    short_url: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});


const shortUrl = new mongoose.model("shortUrl", short_urlschema);
export default shortUrl;