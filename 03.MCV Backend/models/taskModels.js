// is ma schema likta hn

const mongoose = require ("mongoose")
const taskSchema = new mongoose.Schema({
    task:{
        type:Strings,
        required :true
    }
})

module.exports = mongoose.model("Task",taskSchema)


// import mongoose, { model } from 'mongoose'
// import { Schema } from 'mongoose'
// // is ko krna sa ye hota hn ka jaga pr bi schema hu ga waha pr mongoose khudi attached ho jya ga bagir type kiya
// const mongoose=require('mongosse')
// const taskSchema = new  Schema({
//     task:{
//         type:String,
//         require:true
//     }
// })
// module.exports=mongoose.module("task",taskSchema)