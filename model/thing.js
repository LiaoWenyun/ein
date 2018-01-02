const mongoose= require('mongoose');



const ThingSchema= mongoose.Schema({
    name: {type:String},
    description:{ type:String},
    rate: {type:Number}
})

const Thing=module.exports=mongoose.model('Thing',ThingSchema);



module.exports.save_thing=function(new_thing){
    return new Promise((resolve, reject)=>{
        new_thing.save(function (err) {
            if (err) reject(err);
            resolve("yay")
        })
    })
}