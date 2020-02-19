const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

const EmployeeSchema = new Schema({
    empName: {
        type: String,
        require: true
    },
    skill: {
        type: Array,
        require: true
    },
    dob: {
        type: String,
        require: true
    },
    salary: {
        type: String,
        require: true
    }

})



autoIncrement.initialize(mongoose.connection);

EmployeeSchema.plugin(autoIncrement.plugin, 'Employee'); // 4. use autoIncrement
module.exports = mongoose.model('Employee', EmployeeSchema);