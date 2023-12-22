const usermodel = require('../models/userModel')
const { v4: uuidv4, validate: isUuid } = require('uuid');
const Createuser = async function (req, res) {

    try {
        let body = req.body

        if (Object.keys(body).length === 0) {
            return res.status(400).send({ Status: false, message: " Sorry Body can't be empty" })
        }
            let userCreate = await usermodel.create(body)
            return res.status(201).send({ Status: true, statuscode: 201, message: 'Success', data: userCreate })
        
     }
    catch (err) {
        return res.status(500).send({ Status: false, message: err.message })
    }

}
const getAllUsers = async function (req, res) {

    try {
        let userData = await usermodel.find()
        if(!userData){
            return res.status(404).send({ Status: false, statuscode: 404, message: 'No user found' })
        }
        return res.status(200).send({ Status: true, statuscode: 200, message: 'Success', data: userData })
        
    }
    catch (err) {
        return res.status(500).send({ Status: false, message: err.message })
    }

}
const getUserById = async function (req, res) {

    try {

        let userId = req.params.userId  
            if (!isUuid(userId)) {
              return res.status(400).json({ message: 'Invalid userId format' });
            }
            
        let userData = await usermodel.findById({_id:userId})
         if(!userData){
            return res.status(404).send({ Status: false, statuscode: 404, message: 'No user found' })
         }
        return res.status(200).send({ Status: true, statuscode: 200, message: 'Success', data: userData })
        
    }
    catch (err) {
        return res.status(500).send({ Status: false, message: err.message })
    }

}
const updateUser = async function (req, res) {
    try {
        let body = req.body;
        let userId = req.params.userId;

        if (!body.userName || !body.age || !body.hobbies) {
            return res.status(400).send({ Status: false, message: "Please provide all the fields" });
        }

        if (!isUuid(userId)) {
            return res.status(400).json({ message: 'Invalid userId format' });
        }

        let userUpdate = await usermodel.findByIdAndUpdate(userId, body, { new: true });

        if (!userUpdate) {
            return res.status(404).json({ Status: false, message: 'User not found' });
        }

        return res.status(200).send({ Status: true, statuscode: 200, message: 'Success', data: userUpdate });
    } catch (err) {
        return res.status(500).send({ Status: false, message: err.message });
    }
};

const deleteUsers = async function (req, res) {
    try {
        let userId = req.params.userId;

        if (!isUuid(userId)) {
            return res.status(400).json({ message: 'Invalid userId format' });
        }

        let userData = await usermodel.findById(userId);

        if (!userData) {
            return res.status(404).send({ Status: false, statuscode: 404, message: 'No user found' });
        }

        let userDelete = await usermodel.deleteOne({ _id: userId });

        return res.status(204).send({Status:true, statuscode: 204, message: 'Success', data: userDelete });
    } catch (err) {
        return res.status(500).send({ Status: false, message: err.message });
    }
};


module.exports={Createuser,getAllUsers,getUserById,updateUser,deleteUsers}