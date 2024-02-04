import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
   
    date: {
        type: String,
        required: false,
    },
    heading: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: false,
    }
    // timestamps: true

})

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", blogSchema);
export default Blogs;