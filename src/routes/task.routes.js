const express=require('express');
const router=express.Router();

const Task=require('../models/task');

router.get('/',async(req,res)=>{
    const Tasks=await Task.find();
    res.json(Tasks);
})

router.get('/:id',async (req,res)=>{
    const task=await Task.findById(req.params.id);
    res.json(task);
})

router.post('/',async (req,res)=>{

    const {title,description}=req.body;
    const task=new Task({
        title,description
    });
    await task.save();
    console.log(task);
    res.json({status:'Task saved'});
});

router.put('/:id',async(req,res)=>{
    const {title,description}=req.body;
    const newTask={title,description};
    await Task.findOneAndUpdate(req.params.id,newTask);
    res.json({status:'Task Updated'});

});

router.delete('/:id', async (req,res)=>{
    await Task.findByIdAndRemove(req.params.id);
    res.json({status:'Task eliminated'});
});


module.exports=router;