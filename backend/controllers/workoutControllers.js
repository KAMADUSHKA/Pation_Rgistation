const Workout = require('../models/WorkoutModel');


//GET all workouts
const getWorkout = async (req,res) => {
    const workouts = await Workout.find({}).sort({createAt: -1})

    res.status(200).json(workouts)
}


//GET single workouts
const getDetail = async (req,res) => {
    try {
        const {email} = req.params
        const register = await Workout.findOne({email})
        if (register.length == 0) throw Error("Not Found")
        res.status(200).json(register)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//POST a new workouts
const createWorkout = async (req,res) =>{
    const {fname,lname,mnumber,email,password} = req.body

    //add doc to DB  
    try{
        const workout = await Workout.create({fname,lname,mnumber,email,password})
        res.status(200).json(workout)
    }catch(error){
    res.status(400).json({error:error.message})
    }
}


//DELET single workouts


//UPDATE single workouts

module.exports = { 
    createWorkout,
    getWorkout,
    getDetail
 }