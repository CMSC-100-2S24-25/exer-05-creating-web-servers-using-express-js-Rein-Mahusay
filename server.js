import express from "express";

//from the handout
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//sample from handout
app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(3000, () => { console.log('Server started at port 3000.') });

app.post('/submit-data', (req, res) => {
    res.send('Received a POST request.');
});