const mongoose = require ('mongoose');
const Schema = mongoose.Schema
const workoutSchema = new  Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    mnumber:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    }
},{timestamps:true})

workoutSchema.statics.login = async function (email, password){
    const user = await this.findOne({email});
    if (!user) throw Error("User not found");
    if (user.password != password) throw Error("Password mismatch");
    return user;
};

module.exports = mongoose.model('Workout',workoutSchema)