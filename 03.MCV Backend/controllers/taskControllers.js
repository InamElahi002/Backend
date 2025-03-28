// bussnieess logic is ma likhta hn
const TaskModel = require ("../models/taskModels")

//for get
 module.exports.getTask = asyn (req,res) => {
    const tasks = await TaskModel.find()
    res.send(tasks)
   //  res.send("hi")
 }
 //for save

 module.exports.saveTask=asyn(req,res)=>{
    const {task}=req.body
    TaskModel.create({task})
 }
 .then ((data)=>{
    console.log("save sucessfully")
    res.status(201).send(data);
 })
 .catch((err)=>{
    console.log(err);
    res.send({error:err, msg:"something went wrong"})
 })

 //for update
 module.exports.updateTask=asyn(req,res)=>{
    const {id}=req.param
    const {task}=req.body

    TaskModel.findByIdAndUpdate(id,{task})

    .then(()=> req.send("update sucessfully"))
    .catch((err)=>{
      console.log(err)
      res.send({error:err , msg: "something went wrong"})
    })

 }
 
//  for  delete task
module.exports.deleteTask=asyn(req,res)=>{
   const {id}=req.param

   TaskModel.findByIdAndDelete(id)
   .then(()=> res.send("delete sucessfully"))
   .catch((err)=>{
      console.log(err)
      res.send({error:err ,msg: "something went wrong"})
   })
}