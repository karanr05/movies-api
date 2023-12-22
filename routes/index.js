const express = require('express');
const Model = require('../model');

const router = express.Router();

//CREATE 
router.post('/movie', async (req,res) => {
    const data = new Model({
        title: req.body.title,
        year: req.body.year,
        runTime: req.body.runTime,
        genre: req.body.genre,
        director: req.body.director,
        actors: req.body.actors,
        plot: req.body.plot,
        imdbRating: req.body.imdbRating,
        imdbID: req.body.imdbID,
    });

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    } 
    catch (error) {
        res.status(500).json({message: error.message})
    }
});

//READ 
router.get('/movies', async (req,res) => {
    try {
        const data = await Model.find();
        res.json(data);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

router.get('/movies/:id', async (req,res) => {
    try {
        const data = await Model.findById(req.params.id);
        res.json(data);
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

//UPDATE
router.put('/movies/:id', async (req,res) => {
        try {
            const result = await Model.findByIdAndUpdate(
                req.params.id, req.body,
                {
                    new : true
                }
            )
            res.json(result);
        } 
        catch (error) {
            res.status(500).json({message: error.message});
        }
});

//DELETE 
router.delete('/movies/:id', async (req,res) => {
    try {
        const result = await Model.findByIdAndDelete(req.params.id);
        res.send('Data deleted successfully');
    } 
    catch (error) {
        res.status(500).json({message: error.message});
    }
});

module.exports = router;







