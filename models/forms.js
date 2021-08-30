const mongoose = require('mongoose')

const Schema = mongoose.Schema

const multiStepFormSchema = new Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        phone : {
            type : Number,
            required : true
        },
        password : {
            type : String,
            required : true
        },
        address : {
            type : String,
            required : true
        },
        city : {
            type : String,
            required : true
        },
        state : {
            type : String,
            required : true
        },
        pincode : {
            type : Number,
            required : true
        },
        gurl : {
            type : String,
            required : true
        },
        gender : {
            type : String,
            required : true
        }
    }
) 

const multiStepForm = mongoose.model('multiStepForm', multiStepFormSchema)

module.exports = multiStepForm
