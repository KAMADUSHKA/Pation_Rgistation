const express =require ('express');
const router = express.Router();
const {
        createWorkout,
        getWorkout,
        getDetail
      } = require ('../controllers/workoutControllers')

//GET all workouts
router.get('/', getWorkout)

//GET single workouts
router.get('/:email',getDetail)

//POST a new workouts
router.post('/',createWorkout);

//DELET single workouts
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELET a workouts'})
})

//UPDATE single workouts
router.patch('/:id',(req,res)=>{
    res.json({mssg:'POST a newworkouts'})
})
module.exports = router 