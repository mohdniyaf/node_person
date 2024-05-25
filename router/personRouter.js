
const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const person = require('../models/person');

router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "internal error" });
    }
});

router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "internal error" });
    }
});
//worktypevevv sss
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType === 'chef' || workType === 'manager') {
            const response = await Person.find({ work: workType });
            res.status(200).json(response);
        } else {
            res.status(400).json({ err: "enter right url" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "internal error" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; 
        const personUpdatedData = req.body;

        const response = await Person.findByIdAndUpdate(personId, personUpdatedData, {
            new: true,
            runValidators: true,
        })

        if (!response) {
            return res.status(404).json({ err: "person id not found" });
        }
        console.log("data updated");
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ err: "internal error" });
    }
});

    router.delete('/:id',async (req,res)=>{
        try {
        const personId=req.params.id;
        const persondelete=req.body;

        const response=await person.findByIdAndDelete(personId,persondelete);

        if (!response) {
            return res.status(404).json({ err: "person id not found" });
        }

        console.log("deleted data");
        res.status(200).json({message:"sucesufully deleted"});
        } catch (error) {
             console.log(error);
        res.status(500).json({ err: "internal error" });
        }
    })



module.exports = router;
