import express from 'express';
import mongoose from 'mongoose';
import Cards from './dbCard.js';

//App Config
const app = express();
const port = process.env.PORT || 8001
const connection_url = 'mongodb+srv://admin:ezukw2vshBVGJaPX@cluster0.krkvf.mongodb.net/tinderdb?retryWrites=true&w=majority'

//Middle Layers

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//API Endpoints
app.get('/',(req, res) => res.status(200).send('HELLOOO KEVIN!!'));

app.post('/tinder/card', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).send(data); 
        }
    }) 
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    }) 
})
//Listner
app.listen(port,() => console.log(`listening on localhost: ${port}`));


