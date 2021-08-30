const multiStepForm = require('../models/forms')

const saveForm = (req, res) => {
    const { name, gender, email, password, phone, address, city, state, pincode, gurl } = req.body;
    console.log(req.body)
    let saveForm = new multiStepForm({
        name, email, phone, password, address, city, state, pincode, gurl, gender
    })
    saveForm.save()
        .then((result) => console.log("Inserted"))
        .catch((err) => console.log(err))
}

const getAccount = (req, res) => {
    multiStepForm.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err.name));
}

module.exports = { saveForm, getAccount }