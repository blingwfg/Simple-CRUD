import user from "../models/userModels.js";

const method = {
    getUser: async(req, res) =>{
        try {
            const response = await user.findAll();
            res.status(200).json(response)
        } catch (error) {
            console.log(error.message);
        }
    },
    getUserById: async(req, res) =>{
        try {
            const response = await user.findAll({
                where:{
                    id: req.params.id
                }
            });
            res.status(200).json(response[0])
        } catch (error) {
            console.log(error.message);
        }
    },
    ceateUser: async(req, res) =>{
        try {
           await user.create(req.body);
        
            res.status(20).json({msg: `User ${req.body.name} Berhasil Dibuat`})
        } catch (error) {
            console.log(error.message);
        }
    },
    updateUser: async(req, res) =>{
        try {
           await user.update(req.body,{
            where:{
                id: req.params.id
            }
           })
   
            res.status(201).json({msg: `User ${req.body.name} Berhasil di Update`})
        } catch (error) {
            console.log(error.message);
        }
    },
    deleteUser: async(req, res) =>{
        try {
           
           await user.destroy({
            where:{
                id: req.params.id
            }
           })
   
            res.status(201).json({msg: `User Berhasil di Hapus`})
        } catch (error) {
            console.log(error.message);
        }
    }











}
  

export default method;
