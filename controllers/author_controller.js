const ContactModel = require("./../database/models/contact_model");

//show all items
function index(req, res){
    // ContactModel.find()
    //   .then(contacts => {
    //     res.json(contacts);
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //   });
}

//logic for creating a resource
function create(req, res) {
    // // console.log(res.body);
    // // res.send();
    // let {name, email, enquiry} = req.body; 
    
    // ContactModel.create({name, email, enquiry})
    //   .then(contact => {
    //     res.render("success");
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //   });
}

function make(req, res) {
   //shows the form to create the resource (this page shows the form and is related to create)
}

function destroy(req, res){
    // ContactModel.findOne()
    //   .then(contact => {
    //     res.json(contact.id);
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //   });
}

function show(req, res){
    // ContactModel.findOne()
    //   .then(contact => {
    //     res.json(contact.id);
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //   });
}

//updates the tresource
function update(req, res){
    // ContactModel.findOne()
    //   .then(contact => {
    //     res.json(contact.id);
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //   });
}

//shows the form to edit the resource
function edit(req, res){
    // ContactModel.findOne()
    //   .then(contact => {
    //     res.json(contact.id);
    //   })
    //   .catch(err => {
    //     res.status(500).send(err);
    //   });
}

module.exports = {
    create,
    index,
    make,
    destroy,
    show,
    update,
    edit
}