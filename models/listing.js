const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const listeningSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image: {
        filename: {
            type: String,
            default: "listingimage"
        },
        url: {
            type: String,
            default: "https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8",
            set: (v) => v === "" 
                ? "https://unsplash.com/photos/seashore-during-golden-hour-KMn4VEeEPR8"
                : v
        }
    },
    price:Number,
    location:String,
    country:String,
})

const Listing=mongoose.model("Listing",listeningSchema);
module.exports=Listing;