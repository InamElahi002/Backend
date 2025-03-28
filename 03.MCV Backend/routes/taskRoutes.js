// navigation is ma likhta hn

const {Router}= require('express')
const {getTask,saveTask,updateTask,deleteTask}=require("../controllers/taskControllers")

const router= Router();

router.get("/get",getTask)
router.post("/save",saveTask)
router.update("/update/:id",updateTask)
router.delete("/delete/:id",deleteTask)
module.exports = router
