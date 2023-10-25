const userModel = require('../Models/userModel');

const settingData = async (req, res) => {
    try {
        
        const { thought, name } = req.body;

        // checking for existing data
        const unique = await userModel.findOne({ thought });
        if (unique) {
            res.status(200).send({
                success: true,
                message: "Thought is already exists"
            });
        }else{
            // registering new data
            const newThought = new userModel({
                thought, name
            });
            await newThought.save();

            res.status(200).send({
                success: true,
                message: "Data saved successfully",
                data: newThought
            });
        }
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

const gettingData = async (req, res) => {
    try {
        const users = await userModel.find();
        // res.status(200).send(users[0].thought);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error
        })
    }
}

module.exports = { settingData, gettingData }