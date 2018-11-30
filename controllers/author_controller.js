const AuthorModel = require("./../database/models/author_model");



//logic for creating a resource
//you can use normal .then and .catch error promise code or as in this case use async await as its synthen.sugar
async function create(req, res) {
    let {name, bio, gender} = req.body; 
    //this saves information from create form to our model
    let author = await AuthorModel.create({name, bio, gender})
      .catch(err => res.status(500).send(err));
    res.redirect(`/authors/${author._id}`); //this redirects to the author page we just created
    
}
//show all items
async function index(req, res){
  let authors = await AuthorModel.find();
  res.render("author/index", {authors});
}

function make(req, res) {
   //shows the form to create the resource (this page shows the form and is related to create)
  res.render("author/new");
  }

async function destroy(req, res){
  let { id } = req.params; //this is same as let id = req.params.id;
  await AuthorModel.findByIdAndRemove(id);
  res.redirect("/authors");
}

//shows a single author
async function show(req, res){
  let { id } = req.params
  let author = await AuthorModel.findById(id)
  res.render("author/show", {author});
}

//updates the tresource
async function update(req, res){
  let {name, bio, gender} = req.body; 
  let { id } = req.params; 

  await AuthorModel.findByIdAndUpdate(id, {name, bio, gender});
  res.redirect(`/author/${id}`);

}

//shows the form to edit the resource
async function edit(req, res){
    let { id } = req.params
    let author = await AuthorModel.findById(id)
    res.render("author/edit", {author});
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