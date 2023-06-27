
const user = require('../model/user')

// get the user Details

const getUser = async  (req,res) =>{
    try{
     const data = await user.find();
     res.status(200).json(data);
    }
    catch(error){
     res.status(400).json({error});
    }
}

//add the user details

const addUser = async(req,res)=>{
    try{
      const data = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      })
      try{
        const adddata = await data.save();
        res.status(200).json({"Successfully inserted":true});
      }
      catch(error)
      {
        res.status(400).json({"Succes":false});
      }
    }
    catch(error){
       console.log(error);
    }
}

//delete the user details using by the user id

const deleteUser = async(req,res)=>{
    try{
      const del = await user.findByIdAndRemove(req.params.id)
      res.status(200).json({"User deleted Successfully":true});
    }
    catch(error){
        res.status(400).json({"delete error":true});
    }
}

//update the user valuse using their id

const updateUser = async(req,res)=>{
    try{
     const update = await user.findByIdAndUpdate(req.params.id,{name:req.body.name})
     res.status(200).json({"updated the data Successfully":true});
    }
    catch(error){
        res.status(400).json({"update error":true});
    }
}

module.exports={
    getUser,
    addUser,
    updateUser,
    deleteUser
}