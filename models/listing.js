const mongoose=require("mongoose");
const { listingSchema } = require("../schema");
const Schema=mongoose.Schema;
const listeningSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image: {
    url: {
    type: String,
    // required: true   // makes sure you must add it
  } 
}
,
    price:Number,
    location:String,
    country:String,

    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
});

listingSchema.post("findOneAndDelete",async(listing)=>{
    
})

const Listing=mongoose.model("Listing",listeningSchema);
module.exports=Listing;