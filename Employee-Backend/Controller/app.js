const Employee = require('../Modal/app')
exports.addEmployee = (req, res, next) => {
    new Employee({
        empName: req.body.empName,
        skill: req.body.skill,
        dob: req.body.dob,
        salary: req.body.salary
    }).save().then(employee => {
        res.json(employee);
        let xy = new Employee({
            ...employee._doc
        })
        const filter = { _id: employee._doc._id };
        const update = { ID: 'N-M' + employee._doc.empName + '_' + employee._doc._id };
        Employee.findOneAndUpdate(filter, update).then(daa => {})
    }).catch(err => {
        console.log(err);
    })
}


exports.getEmployee = (req, res, next) => {
    Employee.find().then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    })
}

exports.updateEmployee = (req, res, next) => {
    let id = req.body.id;
    Employee.findById(id).then(updatedEmp => {
        updatedEmp.empName = req.body.empName,
            updatedEmp.skill = req.body.skill,
            updatedEmp.dob = req.body.dob,
            updatedEmp.salary = req.body.salary
        updatedEmp.save();
        res.json(updatedEmp);
    }).catch(err => {
        console.log(err);
    })
}

exports.removeEmployee = (req, res, next) => {
    let id = req.params.id;
    Employee.findByIdAndRemove(id).then(result => {
        res.json(result);
    }).catch(err => {
        console.log(err);
    })
}